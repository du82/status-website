import { Children, cloneElement, type ComponentProps } from 'react'

import { allDocs } from '@docs'
import { Avatar, Button, Counter, Tabs, Text } from '@status-im/components'
import { BulletIcon, EditIcon } from '@status-im/icons'
import * as icons from '@status-im/icons'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  // useLiveReload,
  useMDXComponent,
} from 'next-contentlayer/hooks'
import { match } from 'ts-pattern'

import { Admonition } from '@/components/admonition'
import { Breadcrumbs } from '@/components/breadcrumbs'
import * as desktopIcons from '@/components/icons/desktop'
import { Link } from '@/components/link'
import { SearchButton } from '@/components/search-button'
import { SidebarMenu } from '@/components/sidebar-menu'
import { TOC } from '@/components/toc'
import { clientEnv } from '@/config/env.client.mjs'
import { AppLayout, Content } from '@/layouts/app-layout'
import { buildDocsTree } from '@/utils/build-link-tree'
import { resolvePathname } from '@/utils/resolve-pathname'
import { slugify } from '@/utils/slugify'

import config from '../../../config.json'

import type { InformationBoxProps } from '@/components/admonition'
import type { BreadcrumbsProps } from '@/components/breadcrumbs'
// import type { SidebarMenuProps } from '@/components/sidebar-menu'
import type { Doc } from '@docs'
import type { TabsProps } from '@status-im/components'
import type { IconProps } from '@status-im/icons'
import type { GetStaticPaths, GetStaticProps, Page } from 'next'

type Params = { slug: string[] }

export const getStaticPaths: GetStaticPaths<Params> = () => {
  const paths = allDocs.map(doc => ({
    params: { slug: doc.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const doc: Doc = allDocs.find(
    d => d.slug.join('/') === params!.slug.join('/')
  )!

  // root
  const breadcrumbs = [
    {
      label: 'Help',
      href: '/help',
    },
  ]

  // last slug is the current page
  for (const parentSlug of doc.slug.slice(0, -1)) {
    // const parentDoc = allDocs.find(d => d.slug.join('/') === parentSlug.join("/"))!
    breadcrumbs.push({
      label: parentSlug,
      href: `/${parentSlug}`,
    })
  }

  // current page
  breadcrumbs.push({
    label: doc.title ?? 'Untitled',
    href: doc.url,
  })

  return {
    props: {
      doc,
      menu: JSON.stringify(buildDocsTree(allDocs)),
      breadcrumbs,
    },
  }
}

type Props = {
  doc: Doc
  // menu: SidebarMenuProps['items']
  menu: string
  breadcrumbs: BreadcrumbsProps['items']
}

function transformArray(arr: any[]): any {
  return arr.map(item => {
    const [label, value] = Object.entries(item)[0]
    if (Array.isArray(value)) {
      return {
        label,
        links: value.map(link => {
          const [linkLabel, linkValue] = Object.entries(link)[0] as [any, any]

          return {
            label: linkLabel,
            href: '/help/' + linkValue + '#' + slugify(linkLabel),
          }
        }),
      }
    }

    return {
      label,
      href: value,
    }
  })
}

const DocsDetailPage: Page<Props> = props => {
  const { doc, breadcrumbs } = props

  const isIndex = doc['_raw'].sourceFileName.includes('index.md')
  const DocContent = useMDXComponent(doc.body.code)

  return (
    <Content>
      {/* Header */}
      <div className="flex">
        <div className="flex-1">
          <Breadcrumbs
            items={breadcrumbs}
            action={<SearchButton size={32} />}
          />
        </div>
      </div>

      <div className="relative grid xl:grid-cols-[320px_1fr_380px]">
        {/* Menu */}
        <SidebarMenu items={transformArray(config.nav)} />

        {/* Content */}
        <div className="mx-auto w-full max-w-[734px] px-24 py-20 pb-32">
          <div className="mb-3 flex justify-between">
            <div className="flex items-center gap-1">
              <Link
                href={`https://github.com/${doc.author}`}
                className="flex items-center gap-1"
              >
                <Avatar
                  type="user"
                  name="Jorge Campo"
                  size={20}
                  src={`https://github.com/${doc.author}.png`}
                />
                <Text size={15} weight="semibold">
                  {doc.author}
                </Text>
              </Link>
              <Text size={15} color="$neutral-50">
                on{' '}
                {new Intl.DateTimeFormat('en-GB', {
                  dateStyle: 'medium',
                }).format(new Date(doc.last_edited))}
              </Text>
            </div>

            <Button
              variant="outline"
              size={24}
              icon={<EditIcon size={12} color="$neutral-50" />}
              onPress={() => {
                window.open(
                  `${clientEnv.GITHUB_DOCS_URL}/${doc._raw.sourceFilePath}`,
                  '_blank'
                )
              }}
            >
              Edit on GitHub
            </Button>
          </div>

          <h1 className="mb-10 text-[40px] font-bold">
            <AnchorLink id={doc.titleSlug}>{doc.title}</AnchorLink>
          </h1>
          {doc.image && (
            <Image src={doc.image.src} alt={doc.image.alt} className="mb-10" />
          )}
          {doc.body.raw === '' ? (
            <Admonition type="info">
              {"We're working on this content."}
            </Admonition>
          ) : (
            <DocContent components={components} />
          )}
        </div>

        {/* Table of contents */}
        <div className="sticky top-0 hidden pt-20 xl:block">
          {isIndex === false && <TOC headings={doc.headings} />}
        </div>
      </div>
    </Content>
  )
}

DocsDetailPage.getLayout = page => {
  return <AppLayout>{page}</AppLayout>
}

const AnchorLink = ({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) => (
  <>
    <span className="absolute -left-6 hidden lg:group-hover:inline">#</span>
    <Link href={`#${id}`} aria-hidden="true" tabIndex={-1}>
      {children}
    </Link>
  </>
)

const iconComponents = Object.entries(icons).reduce((acc, [name, Icon]) => {
  return {
    ...acc,
    [name]: (props: IconProps) => {
      return (
        <div className="-mb-1 inline-block">
          <Icon {...props} size={20} />
        </div>
      )
    },
  }
}, {})

// note: icons generated without @status-im/icons#createIcon
const desktopIconsComponents = Object.entries(desktopIcons).reduce(
  (acc, [name, Icon]) => {
    return {
      ...acc,
      [name]: (props: IconProps) => {
        return (
          <div className="-mb-1 inline-block">
            <Icon {...props} color="red" width={20} height={20} />
          </div>
        )
      },
    }
  },
  {}
)

const components = {
  h1: (props: ComponentProps<'h1'>) => {
    return (
      <h1 {...props} className="group relative text-[40px] font-bold">
        <AnchorLink id={props.id!}>{props.children}</AnchorLink>
      </h1>
    )
  },
  h2: (props: ComponentProps<'h2'>) => {
    return (
      <h2
        {...props}
        className="group relative mb-3 mt-5 scroll-m-[100px] text-[27px] font-semibold"
      >
        <AnchorLink id={props.id!}>{props.children}</AnchorLink>
      </h2>
    )
  },
  h3: (props: ComponentProps<'h3'>) => {
    return (
      <h3
        {...props}
        className="group relative mb-3 mt-5 scroll-m-[100px] text-[19px] font-semibold"
      >
        <AnchorLink id={props.id!}>{props.children}</AnchorLink>
      </h3>
    )
  },
  a: (props: ComponentProps<'a'>) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const external = props.href?.startsWith('http')
    const [basePath] = router.asPath.split('#')

    return (
      <Link
        {...(props as any)}
        href={external ? props.href : resolvePathname(props.href!, basePath)}
      >
        <Text size={15} color="$primary-50">
          {props.children}
        </Text>
      </Link>
    )
  },
  p: (props: ComponentProps<'p'>) => (
    <div className="mb-5 mt-3">
      <Text size={15}>{props.children}</Text>
    </div>
  ),
  ul: (props: ComponentProps<'ul'>) => {
    // return <ul className="list-inside list-disc" {...props} />
    return <ul className="grid gap-y-3">{props.children}</ul>
  },
  ol: (props: any) => {
    const listItems = Children.toArray(props.children).filter(
      child => typeof child === 'object'
      // child => Children.only(child)
    )

    return (
      <ol className="grid gap-y-3" {...props}>
        {Children.map(listItems, (item: any, index) =>
          cloneElement(item, { order: index + 1, parent: 'ol' })
        )}
      </ol>
    )
  },
  li: (props: any) => {
    const icon = match(props.parent)
      .with('ol', () => <Counter value={props.order as any} />)
      .otherwise(() => <BulletIcon size={20} color="$neutral-50" aria-hidden />)

    return (
      <li className="flex items-center gap-2">
        <div className="shrink-0">{icon}</div>
        <div>{props.children}</div>
      </li>
    )
  },
  hr: (props: ComponentProps<'hr'>) => (
    <div className="my-5 flex justify-center gap-3" role="separator" {...props}>
      {[1, 2, 3].map(i => (
        <div key={i} className="h-2 w-2 rounded-full bg-neutral-10" />
      ))}
    </div>
  ),
  // img: (props: ImageProps) => (
  //   <Image
  //     alt={props.alt}
  //     sizes="100vw"
  //     style={{ width: '100%', height: 'auto' }}
  //     {...props}
  //   />
  // ),
  // pre: Pre,
  // code: InlineCode,
  Admonition: (props: InformationBoxProps) => {
    return (
      <div className="my-5">
        <Admonition {...props} />
      </div>
    )
  },
  Tabs: (props: TabsProps) => {
    return <Tabs {...props} />
  },
  TabsContent: (props: any) => {
    return <Tabs.Content {...props} />
  },
  TabsList: (props: any) => {
    return (
      <div className="mb-5">
        <Tabs.List {...props} />
      </div>
    )
  },
  TabsTrigger: (props: any) => {
    return (
      <Tabs.Trigger {...props}>{props.children.props.children}</Tabs.Trigger>
    )
  },
  ...iconComponents,
  ...desktopIconsComponents,
}

export default DocsDetailPage
