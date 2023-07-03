import React from 'react'

import { cx } from 'class-variance-authority'
import Image from 'next/image'

type Props = {
  alt: string
  selectedVariant: IdentityVariant
}

export const identityVariants = [
  'bg-customisation-army-50',
  'bg-customisation-blue-50',
  'bg-customisation-camel-50',
  'bg-customisation-cooper-50',
  'bg-customisation-magenta-50',
  'bg-customisation-orange-50',
  'bg-customisation-pink-50',
  'bg-customisation-purple-50',
  'bg-customisation-sky-50',
  'bg-customisation-turquoise-50',
  'bg-customisation-yellow-50',
  'bg-customisation-yin-50',
]

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

export type IdentityVariant = (typeof identityVariants)[number]

export const IdentityShowcase = (props: Props) => {
  const { alt } = props

  const selectedVariant = props.selectedVariant
    .replace('bg-customisation-', '')
    .replace('-50', '')

  return (
    <div className="relative flex w-full min-w-[572px] flex-1 justify-center self-center rounded-[32px]">
      <Image
        src={`/assets/messenger/identity/${selectedVariant}.png`}
        alt={alt}
        className={cx(
          'z-30 rounded-3xl border-4',
          borderColor[selectedVariant as keyof typeof borderColor]
        )}
        width={375}
        height={812}
      />
      <Image
        src={`/assets/messenger/identity/token/${selectedVariant}.png`}
        alt={alt}
        className="absolute -left-14 top-[220px] z-40 rounded-3xl"
        width={229}
        height={229}
      />

      <Image
        src={`/assets/messenger/identity/nft/${selectedVariant}.png`}
        alt={alt}
        className="absolute -right-5 bottom-40 z-0 rounded-3xl"
        width={231}
        height={231}
      />

      <Image
        src={`/assets/messenger/identity/community/${selectedVariant}.png`}
        alt={alt}
        className="absolute -bottom-12 -left-12 z-10 rounded-3xl"
        width={237}
        height={237}
      />
    </div>
  )
}
