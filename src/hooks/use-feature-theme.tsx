import {
  BrowserIcon,
  CommunitiesIcon,
  MessengerIcon,
  WalletIcon,
} from '@status-im/icons'

import { ROUTES } from '@/config/routes'

export type FeatureType =
  | 'communities'
  | 'create-community'
  | 'wallet'
  | 'messenger'
  | 'browser'

const themes = {
  communities: {
    label: 'Communities',
    Icon: CommunitiesIcon,
    token: '$turquoise-50',
    color: 'turquoise',
    route: ROUTES.Features.find(({ name }) => name === 'Communities')!,
  },
  'create-community': {
    label: 'Create Community',
    Icon: CommunitiesIcon,
    token: '$turquoise-60',
    color: 'turquoise',
    route: ROUTES.Features.find(({ name }) => name === 'Create Communiy')!,
  },
  messenger: {
    label: 'Messenger',
    Icon: MessengerIcon,
    token: '$purple-50',
    color: 'purple',
    route: ROUTES.Features.find(({ name }) => name === 'Messenger')!,
  },
  wallet: {
    label: 'Wallet',
    Icon: WalletIcon,
    token: '$yellow-50',
    color: 'yellow',
    route: ROUTES.Features.find(({ name }) => name === 'Wallet')!,
  },
  browser: {
    label: 'Browser',
    Icon: BrowserIcon,
    token: '$magenta-50',
    color: 'magenta',
    route: ROUTES.Features.find(({ name }) => name === 'Wallet')!,
  },
} as const

export const useFeatureTheme = (type?: FeatureType) => {
  if (!type) return
  return themes[type]
}
