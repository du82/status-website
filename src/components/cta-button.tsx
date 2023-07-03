import { Button } from '@status-im/components'
import { ConfettiIcon } from '@status-im/icons'
import { useRouter } from 'next/router'

import { useFeatureTheme } from '@/hooks/use-feature-theme'

import type { FeatureType } from '@/hooks/use-feature-theme'
import type { ButtonProps } from '@status-im/components'

type Props = Omit<ButtonProps, 'icon' | 'children'>

const types: Record<string, FeatureType> = {
  '/features/communities': 'communities',
  '/features/create-community': 'create-community',
  '/features/messenger': 'messenger',
  '/features/wallet': 'wallet',
}

export const CTAButton = (props: Props) => {
  const { asPath } = useRouter()
  const [basePath] = asPath.split('#')

  const type = types[basePath]

  const theme = useFeatureTheme(type)

  return (
    <Button
      size={40}
      {...(theme && {
        variant: theme.color,
      })}
      {...props}
      icon={<ConfettiIcon size={20} />}
    >
      Sign up for early access
    </Button>
  )
}
