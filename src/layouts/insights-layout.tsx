import { useGetEpicMenuLinksQuery } from '@/lib/graphql/generated/hooks'

import { SidebarMenu } from '../components'
import { AppLayout } from './app-layout'

const STATIC_LINKS = [
  {
    label: 'Orphans',
    href: '/insights/orphans',
  },
  {
    label: 'Repos',
    href: '/insights/repos',
  },
]

interface InsightsLayoutProps {
  children: React.ReactNode
}

export const InsightsLayout: React.FC<InsightsLayoutProps> = ({ children }) => {
  const { data, isLoading } = useGetEpicMenuLinksQuery()

  const linksFromQuery =
    data?.gh_epics
      .filter(epic => epic.status === 'In Progress')
      .map(epic => epic.epic_name) || []

  const epicLinks =
    linksFromQuery?.map(epic => {
      return {
        label: epic || '',
        href: `/insights/epics/${epic}`,
      }
    }) || []

  const links = [
    {
      label: 'Epics',
      links: [
        {
          label: 'Overview',
          href: '/insights/epics',
        },
        ...epicLinks,
      ],
    },
    ...STATIC_LINKS,
  ]

  return (
    <AppLayout hasPreFooter={false}>
      <div className="relative flex min-h-[calc(100vh-56px-4px)] w-full rounded-3xl bg-white-100">
        {<SidebarMenu items={links} isLoading={isLoading} />}
        <main className="flex-1 pb-8">{children}</main>
      </div>
    </AppLayout>
  )
}
