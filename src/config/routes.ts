import gitHubIcon from '@images/social/github.svg'
import statusIcon from '@images/social/status.svg'
import twitterIcon from '@images/social/twitter.svg'
import youTubeIcon from '@images/social/youtube.svg'

export const ROUTES = {
  Features: [
    { name: 'Communities', href: '/features/communities' },
    { name: 'Create Communiy', href: '/features/create-community' },
    { name: 'Messenger', href: '/features/messenger' },
    { name: 'Wallet', href: '/features/wallet' },
  ],
  Platforms: [
    { name: 'Mobile', href: '/' },
    { name: 'Desktop', href: '/' },
    { name: 'Web', href: '/' },
    { name: 'Keycard', href: '/keycard' },
  ],
  Organization: [
    { name: 'Mission', href: '/' },
    { name: 'Principles', href: '/' },
    { name: 'Brand', href: '/brand' },
    { name: 'Jobs', href: '/jobs' },
  ],
  Help: [
    { name: 'Overview', href: '/help' },
    { name: 'Getting Started', href: '/help/getting-started' },
    { name: 'Messaging', href: '/help/messaging-and-web3-browser' },
    { name: 'Communities', href: '/help/status-communities' },
    { name: 'Wallet', href: '/help/status-wallet' },
    { name: 'Profile', href: '/help/your-profile-and-preferences' },
  ],
  Collaborate: [
    {
      name: 'Discuss',
      href: 'https://discuss.status.im',
    },
    {
      name: 'Feature upvote',
      href: 'https://status-desktop.featureupvote.com',
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Translations', href: '/' },
    // { name: 'Community groups', href: '/' },
  ],
  Developers: [
    { name: 'Repos', href: 'https://github.com/status-im' },
    { name: 'Insights', href: '/insights/epics' },
    { name: 'Specs', href: '/' },
  ],
  SNT: [
    { name: 'Token', href: '/' },
    { name: 'Governance', href: 'https://snapshot.org' },
    { name: 'Curate', href: 'https://curate.status.app' },
    { name: 'Exchanges', href: '/' },
  ],
} as const

export const SOCIALS = {
  status: {
    name: 'Status',
    href: 'TODO',
    src: statusIcon,
  },
  twitter: {
    name: 'Twitter',
    href: 'https://twitter.com/ethstatus',
    src: twitterIcon,
  },
  youtube: {
    name: 'YouTube',
    href: 'https://youtube.com/<TODO>',
    src: youTubeIcon,
  },
  github: {
    name: 'GitHub',
    href: 'https://github.com/status-im',
    src: gitHubIcon,
  },
} as const

export type Routes = (typeof ROUTES)[keyof typeof ROUTES]
