import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { Text } from '@status-im/components'
import { ExternalIcon } from '@status-im/icons'
import { cx } from 'class-variance-authority'

import { ROUTES } from '@/config/routes'

import { CTAButton } from '../cta-button'
import { Link } from '../link'
import { Logo } from '../logo'

type Props = {
  visible: boolean
}

const FloatingDesktop = (props: Props) => {
  const { visible } = props

  return (
    <NavigationMenu.Root
      data-visible={visible}
      className={cx([
        'data-[visible=false]:pointer-events-none',
        'data-[visible=true]:pointer-events-auto',
        'opacity-0 transition-opacity data-[visible=true]:opacity-100',
      ])}
    >
      <div className="flex items-center p-2">
        <Link href="/">
          <Logo label={false} />
        </Link>
        <NavigationMenu.List className="flex items-center pl-5">
          {Object.entries(ROUTES).map(([name, links]) => (
            <NavigationMenu.Item key={name}>
              <NavigationMenu.Trigger className="pr-5 transition-opacity aria-expanded:opacity-50">
                <Text size={15} weight="medium" color="$white-100">
                  {name}
                </Text>
              </NavigationMenu.Trigger>

              <NavigationMenu.Content
                className={cx([
                  'grid pb-12 pl-[60px]',
                  'data-[state=open]:animate-in',
                  'fade-out-20 data-[state=closed]:animate-out',
                ])}
              >
                {links.map(link => {
                  const external = link.href.startsWith('http')
                  return (
                    <NavigationMenu.Link key={link.name} asChild>
                      <Link
                        href={link.href}
                        className="flex items-center gap-1 pt-3 transition-opacity hover:opacity-50"
                      >
                        <Text size={27} weight="semibold" color="$white-100">
                          {link.name}
                        </Text>
                        {external && (
                          <ExternalIcon size={20} color="$white-100" />
                        )}
                      </Link>
                    </NavigationMenu.Link>
                  )
                })}
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>

        <CTAButton size={32} />
      </div>

      <NavigationMenu.Viewport
        className={cx([
          'data-[state=closed]:animate-heightOut data-[state=open]:animate-heightIn',
          'h-[var(--radix-navigation-menu-viewport-height)] transition-height',
        ])}
      />
    </NavigationMenu.Root>
  )
}

export { FloatingDesktop }
