import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { Text } from '@status-im/components'
import { ExternalIcon } from '@status-im/icons'
import { cx } from 'class-variance-authority'

import { Logo } from '@/components/logo'
import { ROUTES } from '@/config/routes'

import { CTAButton } from '../cta-button'
import { Link } from '../link'

const NavDesktop = () => {
  return (
    <>
      <NavigationMenu.Root className="relative z-20 hidden md-lg:block">
        <div className="flex items-center px-6">
          <div className="mr-5 flex shrink-0 ">
            <Link href="/">
              <Logo isTopbarDesktop />
            </Link>
          </div>

          <div className="flex-1">
            <NavigationMenu.List className="flex items-center">
              {Object.entries(ROUTES).map(([name, routes]) => (
                <NavigationMenu.Item key={name}>
                  <NavigationMenu.Trigger className="py-4 pr-5 transition-opacity aria-expanded:opacity-50">
                    <Text size={15} weight="medium" color="$white-100">
                      {name}
                    </Text>
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="grid pb-12 pl-[164px]">
                    {routes.map(route => {
                      const external = route.href.startsWith('http')

                      return (
                        <NavigationMenu.Link key={route.name} asChild>
                          <Link
                            href={route.href}
                            className="flex items-center gap-1 pt-3 transition-opacity hover:opacity-50"
                          >
                            <Text
                              size={27}
                              weight="semibold"
                              color="$white-100"
                            >
                              {route.name}
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
          </div>

          <div className="flex justify-end ">
            <CTAButton size={32} variant="dark_darkGrey" />
          </div>
        </div>
        <NavigationMenu.Viewport
          className={cx([
            'data-[state=closed]:animate-heightOut data-[state=open]:animate-heightIn',
            'h-[var(--radix-navigation-menu-viewport-height)] transition-height',
            // 'data-[state=open]:animate-heightIn animate-',
            // 'data-[state=closed]:animate-heightOut',
            // 'transition-height h-[var(--radix-navigation-menu-viewport-height)]',
            // 'transition-height mb-8 h-[var(--radix-navigation-menu-viewport-height)] duration-1000',
            // 'h-[var(--radix-navigation-menu-viewport-height)]',
            // 'data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]',
          ])}
        />
      </NavigationMenu.Root>
    </>
  )
}

export { NavDesktop }
