import { useEffect, useMemo, useRef, useState } from 'react'

import { useInfiniteQuery } from '@tanstack/react-query'
import { differenceInCalendarDays, format } from 'date-fns'
import { useRouter } from 'next/router'

import { Breadcrumbs, EpicOverview, TableIssues } from '@/components'
import { useDebounce } from '@/hooks/use-debounce'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { InsightsLayout } from '@/layouts/insights-layout'
import { GET_ISSUES_BY_EPIC } from '@/lib/burnup'
import { api } from '@/lib/graphql'
import {
  useGetBurnupQuery,
  useGetEpicIssuesCountQuery,
  useGetEpicMenuLinksQuery,
  useGetFiltersWithEpicQuery,
} from '@/lib/graphql/generated/hooks'
import { Order_By } from '@/lib/graphql/generated/schemas'

import type {
  GetBurnupQuery,
  GetIssuesByEpicQuery,
  GetIssuesByEpicQueryVariables,
} from '@/lib/graphql/generated/operations'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { DateRange } from '@status-im/components'

type Epic = {
  title: string
  color: `#${string}`
  description: string
}

const LIMIT = 10

const INITIAL_DATES = {
  from: '2017-01-01',
  to: format(new Date(), 'yyyy-MM-dd'),
}

const EpicsDetailPage = () => {
  const router = useRouter()

  const { epic: epicName } = router.query

  const [activeTab, setActiveTab] = useState<'open' | 'closed'>('open')
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([])
  const [selectedAssignees, setSelectedAssignees] = useState<string[]>([])
  const [selectedRepos, setSelectedRepos] = useState<string[]>([])
  const [orderByValue, setOrderByValue] = useState<Order_By>(Order_By.Desc)

  const [searchFilter, setSearchFilter] = useState<string>('')
  const debouncedSearchFilter = useDebounce<string>(searchFilter)

  const [selectedDates, setSelectedDates] = useState<DateRange>()
  const [burnupData, setBurnupData] = useState<GetBurnupQuery['gh_burnup']>()

  const { data: epicLinks, isLoading } = useGetEpicMenuLinksQuery(
    {
      where: {
        epic_name: { _eq: epicName as string },
      },
    },
    {
      enabled: !!epicName,
    }
  )

  const epicLinkExists = epicLinks?.gh_epics.find(
    link => link.epic_name === epicName
  )

  const breadcrumbs = [
    {
      label: 'Epics',
      href: '/insights/epics',
    },
    {
      label: epicName as string,
      href: `/insights/epics/${epicName}`,
    },
  ]

  const { isFetching: isLoadingBurnup } = useGetBurnupQuery(
    {
      epicNames: epicName,
      from: selectedDates?.from || INITIAL_DATES.from,
      to: selectedDates?.to || INITIAL_DATES.to,
    },
    {
      // Prevent animation if we go out of the page
      refetchOnWindowFocus: false,
      onSuccess: data => {
        const differenceBetweenSelectedDates = differenceInCalendarDays(
          selectedDates?.to || new Date(),
          selectedDates?.from || new Date()
        )

        const rate = 50 // 1 sample per 50 days

        let samplingRate = rate // Use the default rate as the initial value

        if (differenceBetweenSelectedDates > 0) {
          // Calculate the total number of data points within the selected date range
          const totalDataPoints = data?.gh_burnup.length || 0

          // Calculate the desired number of data points based on the sampling rate
          const desiredDataPoints = Math.ceil(totalDataPoints / rate)

          // Calculate the actual sampling rate based on the desired number of data points
          samplingRate = Math.max(
            1,
            Math.floor(totalDataPoints / desiredDataPoints)
          )
        }

        // Downsampling the burnup data
        const downsampledData: GetBurnupQuery['gh_burnup'] = []

        if (data?.gh_burnup.length > 0) {
          data?.gh_burnup.forEach((dataPoint, index) => {
            if (index % samplingRate === 0) {
              downsampledData.push(dataPoint)
            }
          })
        }

        if (
          selectedDates?.from &&
          selectedDates?.to &&
          data?.gh_burnup.length === 0
        ) {
          downsampledData.push({
            date_field: selectedDates.from,
            total_closed_issues: 0,
            total_opened_issues: 0,
          })
          downsampledData.push({
            date_field: selectedDates.to,
            total_closed_issues: 0,
            total_opened_issues: 0,
          })
        }

        setBurnupData(downsampledData)
      },
    }
  )

  const { data: dataCounter } = useGetEpicIssuesCountQuery({
    where: {
      epic_name: { _eq: epicName as string },
      ...(selectedAuthors.length > 0 && {
        author: { _in: selectedAuthors },
      }),
      ...(selectedAssignees.length > 0 && {
        assignee: { _in: selectedAssignees },
      }),
      ...(selectedRepos.length > 0 && {
        repository: { _in: selectedRepos },
      }),
      title: { _ilike: `%${debouncedSearchFilter}%` },
    },
  })

  const count = {
    total: dataCounter?.gh_epic_issues.length,
    closed: dataCounter?.gh_epic_issues.filter(issue => issue.closed_at).length,
    open: dataCounter?.gh_epic_issues.filter(issue => !issue.closed_at).length,
  }

  const { data, isFetching, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      [
        'getIssuesByEpic',
        epicName,
        activeTab,
        selectedAssignees,
        selectedRepos,
        selectedAuthors,
        orderByValue,
        debouncedSearchFilter,
      ],
      async ({ pageParam = 0 }) => {
        const result = await api<
          GetIssuesByEpicQuery,
          GetIssuesByEpicQueryVariables
        >(GET_ISSUES_BY_EPIC, {
          where: {
            epic_name: { _eq: epicName as string },
            stage: { _eq: activeTab },
            ...(selectedAuthors.length > 0 && {
              author: { _in: selectedAuthors },
            }),
            ...(selectedAssignees.length > 0 && {
              assignee: { _in: selectedAssignees },
            }),
            ...(selectedRepos.length > 0 && {
              repository: { _in: selectedRepos },
            }),
            title: { _ilike: `%${debouncedSearchFilter}%` },
          },
          limit: LIMIT,
          offset: pageParam,
          orderBy: orderByValue,
        })

        return result?.gh_epic_issues || []
      },
      {
        getNextPageParam: (lastPage, pages) => {
          if (lastPage.length < LIMIT) {
            return undefined
          }

          return pages.length * LIMIT
        },
      }
    )

  const { data: filters } = useGetFiltersWithEpicQuery({
    epicName: epicName as string,
  })

  const issues = useMemo(
    () => data?.pages.flatMap(page => page) || [],
    [data?.pages]
  )

  const endOfPageRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(endOfPageRef, {
    rootMargin: '800px',
  })
  const isVisible = !!entry?.isIntersecting

  useEffect(() => {
    if (isVisible && !isFetchingNextPage && hasNextPage) {
      fetchNextPage()
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, isVisible])

  useEffect(() => {
    if (!epicLinkExists && !isLoading) {
      router.push('/insights/epics')
    }
  }, [epicLinkExists, router, isLoading])

  const epic: Epic = {
    title: String(epicName) || '-',
    description: epicLinkExists?.epic_description || '',
    color: epicLinkExists?.epic_color
      ? `#${epicLinkExists.epic_color}`
      : '#4360df',
  }

  return (
    <InsightsLayout>
      <Breadcrumbs items={breadcrumbs} />
      <div className="px-10 py-6">
        <EpicOverview
          title={epic.title}
          description={epic.description}
          color={epic.color}
          fullscreen
          burnup={burnupData}
          isLoading={isLoadingBurnup}
          selectedDates={selectedDates}
          setSelectedDates={setSelectedDates}
        />
      </div>
      <div className="border-neutral-10 px-10 py-6">
        <TableIssues
          data={issues}
          count={count}
          isLoading={isFetchingNextPage || isFetching || hasNextPage}
          filters={filters}
          handleTabChange={setActiveTab}
          activeTab={activeTab}
          selectedAuthors={selectedAuthors}
          handleSelectedAuthors={setSelectedAuthors}
          selectedAssignees={selectedAssignees}
          handleSelectedAssignees={setSelectedAssignees}
          selectedRepos={selectedRepos}
          handleSelectedRepos={setSelectedRepos}
          orderByValue={orderByValue}
          handleOrderByValue={setOrderByValue}
          searchFilterValue={searchFilter}
          handleSearchFilter={setSearchFilter}
        />
        <div ref={endOfPageRef} />
      </div>
    </InsightsLayout>
  )
}

export default EpicsDetailPage
