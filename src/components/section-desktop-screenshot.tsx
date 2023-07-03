import React from 'react'

import { Text } from '@status-im/components'
import { cx } from 'class-variance-authority'
import Image from 'next/image'

import { type Illustration, illustrations } from '@/config/illustrations'

import type { IdentityVariant } from './identity-showcase'

type Props = {
  icon: Illustration
  title: string
  description: string
  selectedVariant: IdentityVariant
  dark?: boolean
}

const borderColor = {
  army: 'border-customisation-army/5',
  blue: 'border-customisation-blue/5',
  camel: 'border-customisation-camel/5',
  cooper: 'border-customisation-cooper/5',
  magenta: 'border-customisation-magenta/5',
  orange: 'border-customisation-orange/5',
  pink: 'border-customisation-pink/5',
  purple: 'border-customisation-purple/5',
  sky: 'border-customisation-sky/5',
  turquoise: 'border-customisation-turquoise/5',
  yellow: 'border-customisation-yellow/5',
  yin: 'border-customisation-yin/5',
}

export const SectionDesktopScreenshot = (props: Props) => {
  const { icon, title, description, dark } = props

  const illustration = illustrations[icon]

  const selectedVariant = props.selectedVariant
    .replace('bg-customisation-', '')
    .replace('-50', '')

  return (
    <div>
      <div className="container py-20">
        <div className="max-w-[462px]">
          <Image
            src={illustration.src}
            alt={illustration.alt}
            width={48}
            height={48}
          />

          <div className="flex flex-col pt-4">
            <Text size={27} weight="semibold" color={dark ? '$white-100' : ''}>
              {title}
            </Text>
            <div className="relative flex pt-1">
              <Text size={27} color={dark ? '$white-100' : ''}>
                {description}
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1504px] px-2 pb-20 lg:px-10">
        <div
          className={cx(
            'w-full overflow-hidden rounded-4xl border-4',
            borderColor[selectedVariant as keyof typeof borderColor]
          )}
        >
          <Image
            src={`/assets/messenger/identity/desktop/${selectedVariant}.png`}
            alt={title}
            width={1424}
            height={946}
          />
        </div>
        <div
          className={cx(
            'lg: absolute right-12 ml-[50%] overflow-hidden rounded-4xl border-4 lg:right-32',
            'max-w-[160px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[340px] xl:max-w-[375px]',
            'bottom-10',
            borderColor[selectedVariant as keyof typeof borderColor]
          )}
        >
          <Image
            src={`/assets/messenger/identity/mobile/${selectedVariant}.png`}
            alt={title}
            width={375}
            height={812}
          />
        </div>
      </div>
    </div>
  )
}
