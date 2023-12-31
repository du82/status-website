import { Tag, Text } from '@status-im/components'
import { cx } from 'class-variance-authority'

import { useFeatureTheme } from '@/hooks/use-feature-theme'

import { GridHero } from './cards'
import { CTAButton } from './cta-button'

import type { FeatureType } from '@/hooks/use-feature-theme'
import type { StaticImageData } from 'next/image'

type Props = {
  type: FeatureType
  title: string
  description: string
  images: [StaticImageData, StaticImageData, StaticImageData, StaticImageData]
  maxWidth: number
  dark?: boolean
}

export const Hero = (props: Props) => {
  const { type, title, description, images, maxWidth, dark } = props

  const theme = useFeatureTheme(type)!

  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative grid px-5 py-16 lg:px-40 lg:pb-24 lg:pt-[120px]">
        {/* <ParalaxCircle initialLeft={-206} initialTop={-170} /> */}
        <div
          className="relative flex flex-col items-center justify-center text-center"
          style={{ maxWidth }}
        >
          <div className="inline-flex">
            <Tag
              size={32}
              label={theme.label}
              color={theme.token}
              icon={theme.Icon}
            />
          </div>
          <h1
            className={cx(
              'max-w-[1000px] py-4 text-center text-48 lg:pb-5 lg:text-88',
              dark && 'text-white-100'
            )}
          >
            {title}
          </h1>
          <div className="whitespace-pre-line">
            <Text size={27} color={dark ? '$white-100' : ''}>
              {description}
            </Text>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="mt-6 inline-flex rounded-[20px] border border-dashed border-neutral-80/20 p-2 lg:mt-8">
            <CTAButton />
          </div>
        </div>
      </div>

      <GridHero
        color={theme.color as any}
        cardOne={{
          alt: 'wallet-1',
          image: images[0],
        }}
        cardTwo={{
          alt: 'wallet-2',
          image: images[1],
        }}
        cardThree={{
          alt: 'wallet-3',
          image: images[2],
        }}
        cardFour={{
          alt: 'wallet-4',
          image: images[3],
        }}
      />

      {/* <div className="relative z-[2] flex justify-center px-10">
        <div className="grid max-w-[1504px] auto-rows-[1fr] grid-cols-3 gap-[19px]">
          <div className="row-span-2">
            <div className="bg-customisation-yellow/10 rounded-[40px] px-[73px] py-[68px]">
              <Image quality={90} src={images[0]} alt="" />
            </div>
          </div>
          <div className="row-span-2">
            <div className="bg-customisation-yellow/10 rounded-[40px] px-[73px] py-[68px]">
              <Image
                quality={90}
                src={images[1]}
                alt="wallet-2"
                className="border-customisation-yellow/5 rounded-3xl border-4"
              />
            </div>
          </div>
          <div>
            <div className="bg-customisation-yellow/10 flex h-full items-end justify-end rounded-[40px] px-[73px] pt-[68px]">
              <Image
                quality={90}
                src={images[2]}
                alt="wallet-3"
                className="border-customisation-yellow/5 rounded-3xl rounded-b-none border-4 border-b-0"
              />
            </div>
          </div>
          <div>
            <div className="bg-customisation-yellow/10 flex h-full items-center justify-center rounded-[40px] px-[73px]">
              <Image quality={90} src={images[3]} alt="wallet-4" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
