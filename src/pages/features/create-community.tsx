import React from 'react'

import brandTurquoiseImage1 from '@assets/create-community/brand-turquoise-01.png'
import brandTurquoiseImage2 from '@assets/create-community/brand-turquoise-02.png'
import brandTurquoiseImage3 from '@assets/create-community/brand-turquoise-03.png'
import brandTurquoiseImage4 from '@assets/create-community/brand-turquoise-04.png'
import brandTurquoiseImage5 from '@assets/create-community/brand-turquoise-05.png'
import featureImage1 from '@assets/create-community/feature-01.png'
import featureImage2 from '@assets/create-community/feature-02.png'
import featureImage3 from '@assets/create-community/feature-03.png'
import featureImage4 from '@assets/create-community/feature-04.png'
import heroImage1 from '@assets/create-community/hero-01.png'
import heroImage2 from '@assets/create-community/hero-02.png'
import heroImage3 from '@assets/create-community/hero-03.png'
import heroImage4 from '@assets/create-community/hero-04.png'
import screenshot from '@assets/create-community/screenshot-01.png'
import sectionImage1 from '@assets/create-community/section-01.png'
import sectionImage2 from '@assets/create-community/section-02.png'
import { Text } from '@status-im/components'
import Image from 'next/image'

import { Section } from '@/components/cards'
import { FeatureList } from '@/components/feature-list'
import { Hero } from '@/components/hero'
import { SectionLarge } from '@/components/section-large'
import { VideoSection } from '@/components/video-section'
import { type Illustration, illustrations } from '@/config/illustrations'
import { AppLayout, Content } from '@/layouts/app-layout'

import type { Page } from 'next'
import type { StaticImageData } from 'next/image'

const FEATURE_LIST = [
  {
    title: 'Decentralized',
    description:
      'Communities are literally powered by their members running the Status Desktop app.',
    icon: illustrations.decentralized,
  },
  {
    title: 'Permissionless',
    description:
      'Nobody can stop you creating a community, because nobody controls Status’ p2p network.',
    icon: illustrations.guard,
  },
  {
    title: 'Self-sovereign',
    description:
      'Each community can set it’s own rules, whatever they are.  And is responsible for it’s own actions. ',
    icon: illustrations.crown,
  },
  {
    title: '100% Free to use',
    description:
      'No paid tier. No artificially imposed limits. No commission charged on community token sales.',
    icon: illustrations.free,
  },
  {
    title: '100% Open source',
    description:
      'Status itself is a community project.  Anyone can build, contribute to and fork it’s source code.',
    icon: illustrations.folder,
  },
  {
    title: '100% Freedom',
    description:
      'Status’s mission is to protect free speech, uphold human rights and defend privacy.',
    icon: illustrations.megaphone,
  },
]

const TOKEN_FEATURE_LIST = [
  {
    title: 'Token minting',
    description:
      'Mint NFT and ERC-20 tokens on any chain. Choose from finite or unlimited supply. Create soulbound and remotely destructible NFTs.',
    image: featureImage2,
  },
  {
    title: 'Token airdrop',
    description:
      'Airdrop newly minted or pre-existing tokens to current and prospective members to grow your community and reward engagement.',
    image: featureImage3,
  },
  {
    title: 'Token retail',
    description:
      'Sell tokens for fixed prices. Earnings deposited into any address, which could be a multi-sig. Token gate your token sales. 0% fee.',
    image: featureImage4,
  },
]

const CreateCommunityPage: Page = () => {
  return (
    <Content dark>
      <Hero
        type="create-community"
        title="Your community can take back control"
        description="Make your community autonomous and self sovereign."
        images={[heroImage1, heroImage2, heroImage3, heroImage4]}
        maxWidth={942}
        dark
      />

      <VideoSection
        title="Decentralized. Permissionless. Free."
        description="By using Status, your community can regain control of it’s destiny and data."
        dark
        poster="/assets/create-community/community-owners-preview.png"
        videoMp4="/assets/create-community/community-owners.mp4"
        videoWebm="/assets/create-community/community-owners.webm"
        hideToRight
      />

      <div className="border-b border-dashed border-white-5 pb-40">
        <FeatureList list={FEATURE_LIST} dark />
      </div>

      <SectionLarge
        title="Crypto native"
        description="Imagine a community group chat platform designed to work with crypto from the ground up."
        description2="With token gating, minting, airdrop and retail tools, the possibilities for your community are limitless."
        dark
      >
        <Section
          icon="lock"
          title="Token gating"
          // TODO: color="none"
          color="turquoise"
          description="Only let hodlers of specific tokens read or post to channels. Or require tokens to join your community."
          secondaryTitle="Powerful permissions"
          secondaryDescription="Use ERC-20, NFT and ENS tokens plus AND and OR statements in rules. Set channels so anybody can read, but tokens are required to post. Assign admin permissions with remotely destructible soulbound tokens. And much, much more!"
          image={featureImage1}
          imageAlt="wallet-5"
          dark
        />

        <div className="grid grid-flow-col gap-5 p-40">
          {TOKEN_FEATURE_LIST.map(({ title, description, image }) => (
            <div
              key={title}
              className="rounded-[36px] border border-white-5 backdrop-blur-lg"
            >
              <div className="flex flex-col p-6">
                <div className="flex flex-col gap-1 pb-12">
                  <Text size={27} weight="semibold" color="$white-100">
                    {title}
                  </Text>
                  <Text size={19} color="$white-100">
                    {description}
                  </Text>
                </div>
                <Image src={image} alt={title} />
              </div>
            </div>
          ))}
        </div>
      </SectionLarge>

      <div className="relative z-10 rounded-t-[48px] bg-customisation-turquoise/5">
        <SectionLarge
          title="Your brand. Your community."
          description="Give your community a unique look that reflects it’s passions and values. Or just look cool ✨"
          dark
        >
          <div className="relative mx-auto flex w-full max-w-[1294px] justify-between px-5">
            <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-white-100" />
            {/* <div className="absolute inset-x-0 bottom-0 z-10 h-52 bg-gradient-to-t from-customisation-turquoise/5" /> */}
            <div className="flex flex-col">
              <Image
                src={brandTurquoiseImage1}
                alt="TODO"
                width={375}
                height={142}
                className="rounded-3xl border-4 border-customisation-turquoise/5"
              />
            </div>

            <div className="flex flex-col gap-16">
              <Image
                src={brandTurquoiseImage2}
                alt="TODO"
                width={375}
                height={229}
                className="rounded-3xl border-4 border-customisation-turquoise/5"
              />
              <Image
                src={brandTurquoiseImage3}
                alt="TODO"
                width={375}
                height={812}
                className="rounded-3xl border-4 border-customisation-turquoise/5"
              />
            </div>

            <div className="flex flex-col gap-16">
              <Image
                src={brandTurquoiseImage4}
                alt="TODO"
                width={375}
                height={360}
                className="rounded-3xl border-4 border-customisation-turquoise/5"
              />
              <Image
                src={brandTurquoiseImage5}
                alt="TODO"
                width={375}
                height={304}
                className="rounded-3xl border-4 border-customisation-turquoise/5"
              />
            </div>
          </div>
        </SectionLarge>
      </div>

      <div className="relative z-10 -mt-44 bg-neutral-95">
        <SectionDesktopScreenshot
          title="Share your community"
          description="Using web URLs that can be posted on Web2 social media. User doesn’t have Status? Open in browser."
          image={screenshot}
          icon="paperPlane"
          dark
        />
      </div>

      <div className="pb-20">
        <Section
          color="turquoise"
          icon="ufo"
          title="Make your community discoverable"
          explanation="TODO"
          description="Propose your community for inclusion in the ‘community directory’ that lets Status users discover communities."
          secondaryTitle="It’s up to SNT hodlers "
          secondaryDescription="The directory is curated by an autonomous dApp where SNT hodlers vote. So Status doesn’t have any control over which communities are featured."
          image={sectionImage1}
          imageAlt="wallet-2"
          dark
        />
        <Section
          color="turquoise"
          icon="box"
          title="Import from Discord"
          explanation="TODO"
          description="Does your community have an existing Discord server? All message history can be imported into Status."
          secondaryTitle="Don’t lose those dank memes"
          secondaryDescription="When your community makes the switch to Status, no message from it’s old Discord is lost. So your community’s dank memes are safe. 😎"
          image={sectionImage2}
          imageAlt="wallet-5"
          reverse
          dark
        />
      </div>
    </Content>
  )
}

CreateCommunityPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>
}

export default CreateCommunityPage

type Props = {
  icon: Illustration
  title: string
  description: string
  image: StaticImageData
  dark?: boolean
}
export const SectionDesktopScreenshot = (props: Props) => {
  const { icon, title, description, image, dark } = props
  const illustration = illustrations[icon]
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
      <div className="mx-auto max-w-[1504px] px-10 pb-20">
        <div className="w-full overflow-hidden rounded-4xl border-4 border-customisation-turquoise/5">
          <Image src={image} alt={title} width={1424} height={946} />
        </div>
      </div>
    </div>
  )
}
