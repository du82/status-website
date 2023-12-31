import communityCardImage01 from '@assets/communities/community-card-01.png'
import communityCardImage02 from '@assets/communities/community-card-02.png'
import communityCardImage03 from '@assets/communities/community-card-03.png'
import communityCardImage04 from '@assets/communities/community-card-04.png'
import communityCardNote01 from '@assets/communities/community-card-note-01.png'
import communityCardNote02 from '@assets/communities/community-card-note-02.png'
import communityCardNote03 from '@assets/communities/community-card-note-03.png'
import communityCardNote04 from '@assets/communities/community-card-note-04.png'
import featureImage1 from '@assets/communities/feature-01.png'
import featureImage2 from '@assets/communities/feature-02.png'
import featureImage3 from '@assets/communities/feature-03.png'
import featureImage4 from '@assets/communities/feature-04.png'
import featureImage5 from '@assets/communities/feature-05.png'
import heroImage1 from '@assets/communities/hero-01.png'
import heroImage2 from '@assets/communities/hero-02.png'
// TODO FIX BOX SHADOW
import heroImage3 from '@assets/communities/hero-03.png'
import heroImage4 from '@assets/communities/hero-04.png'
// import illustrationMain from '@assets/communities/illustration-main.png'
// import image5 from '@assets/communities/grid-5.png'
import sectionImage1 from '@assets/communities/section-01.png'
import sectionImage2 from '@assets/communities/section-02.png'
import { Button, Text } from '@status-im/components'
import Image from 'next/image'

import { Section } from '@/components/cards'
import { Hero } from '@/components/hero'
import { VideoSection } from '@/components/video-section'
import { AppLayout, Content } from '@/layouts/app-layout'

import type { Page } from 'next'

const CommunitiesPage: Page = () => {
  return (
    <Content>
      <Hero
        type="communities"
        title="Discover your community"
        description="Find your tribe in the metaverse of truly free Status communities."
        images={[heroImage1, heroImage2, heroImage3, heroImage4]}
        maxWidth={702}
      />
      <VideoSection
        title="Fully Decentralized Communities"
        description="Status’ Waku p2p messaging network is powered by people running Status Desktop - true decentralisation."
        poster="/assets/communities/communities-preview.png"
        videoMp4="/assets/communities/communities.mp4"
        videoWebm="/assets/communities/communities.webm"
        hideToRight
      />
      <div className="pb-12 lg:pb-20">
        <Section
          icon="lock"
          title="Token gated channels & communities"
          description="Access exclusive community spaces and content. Controlled access plus moderation for high signal to noise."
          secondaryTitle="Become eligible for airdrops"
          secondaryDescription="Every Status Community can create their own tokens and optionally airdrop tokens to their members.  Of course of doing an airdrop or not is enterally the individual choice of each community"
          video={{
            mp4: '/assets/video-home-to-channel.mp4',
            webm: '/assets/video-home-to-channel.webm',
            poster: sectionImage1.src,
          }}
          imageAlt="wallet-5"
          color="turquoise"
        />

        <Section
          icon="shapes"
          title="DeFi, DAO and NFT communities"
          description="Status Communities is built around tokenised functionality, perfect for blockchain enthusiast communities."
          secondaryTitle="Every community sets its own rules"
          secondaryDescription="Anybody can create a community, which is it’s own self-sovereign space.  This means that what each community does is enterally up to them.  Join the ones you like, leave the ones you don’t."
          reverse
          video={{
            mp4: '/assets/video-post-to-channel.mp4',
            webm: '/assets/video-post-to-channel.webm',
            poster: sectionImage2.src,
          }}
          imageAlt="wallet-5"
          color="turquoise"
        />
      </div>
      <div className="border-t-[1px] border-dashed border-neutral-80/20" />
      <div className="container pt-24 lg:pt-40">
        <div className="grid max-w-[475px] gap-4">
          <h2 className="text-40 lg:text-64">Your next community</h2>
          <Text size={27}>
            Explore the metaverse of communities and find your kindred spirits
            in the Status&nbsp;Community Directory.
          </Text>
        </div>
      </div>

      <div className="gallery">
        <div className="no-scrollbar gallery-wrapper">
          <div className="gallery-inside">
            <div className="relative min-h-[230px] min-w-[335px] snap-start">
              <Image
                src={communityCardImage01}
                alt="TODO"
                className="relative rounded-2xl shadow-2"
                width="335"
                height="230"
              />
              <Image
                src={communityCardNote01}
                alt="TODO"
                className="absolute left-[130px] top-[205px]"
                width="173"
                height="162"
              />
            </div>
            <div className="relative min-h-[230px] min-w-[335px] snap-start">
              <Image
                src={communityCardImage02}
                alt="TODO"
                className="relative rounded-2xl shadow-2"
                width="335"
                height="230"
              />
              <Image
                src={communityCardNote02}
                alt="TODO"
                className="absolute left-[55px] top-[-70px]"
                width="258"
                height="38"
              />
            </div>
            <div className="relative min-h-[230px] min-w-[335px] snap-start">
              <Image
                src={communityCardImage03}
                alt="TODO"
                className="relative rounded-2xl shadow-2"
                width="335"
                height="230"
              />
              <Image
                src={communityCardNote03}
                alt="TODO"
                className="absolute left-[-97px] top-[150px]"
                height="166"
                width="230"
              />
              <Image
                src={communityCardNote04}
                alt="TODO"
                className="absolute left-[120px] top-[-130px]"
                height="175"
                width="184"
              />
            </div>
            <div className="relative min-h-[230px] min-w-[335px] snap-start">
              <Image
                src={communityCardImage04}
                alt="TODO"
                className="relative rounded-2xl shadow-2"
                width="335"
                height="230"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[40px] bg-customisation-turquoise/5 py-40">
        <div className="mx-auto max-w-[1294px] px-5">
          <div className="mx-auto max-w-[702px] gap-4 pb-8 text-center">
            <h2 className="pb-4 text-40 lg:text-64">
              A wonderful chat experience
            </h2>
            <Text size={27}>
              Give your community a unique look that reflects it’s passions and
              values. Or just look cool ✨
            </Text>
          </div>

          <div className="flex justify-center pb-30">
            <Button variant="outline">See messenger features</Button>
          </div>

          <div className="relative flex w-full justify-between">
            {/* <div className="absolute inset-x-0 bottom-0 z-10 h-52 bg-gradient-to-t from-customisation-turquoise/5" /> */}
            <div className="flex flex-col gap-16">
              <Image
                src={featureImage1}
                alt="TODO"
                width={375}
                height={142}
                className="rounded-3xl border-4 border-customisation-turquoise/5"
              />
              <Image
                src={featureImage2}
                alt="TODO"
                width={375}
                height={471}
                className="rounded-3xl border-4 border-customisation-turquoise/5"
              />
            </div>

            <div className="flex flex-col">
              <Image
                src={featureImage3}
                alt="TODO"
                width={375}
                height={812}
                className="rounded-3xl border-4 border-customisation-turquoise/5"
              />
            </div>

            <div className="flex flex-col gap-16">
              <Image
                src={featureImage4}
                alt="TODO"
                width={375}
                height={471}
                className="rounded-3xl border-4 border-customisation-turquoise/5"
              />
              <Image
                src={featureImage5}
                alt="TODO"
                width={375}
                height={142}
                className="rounded-3xl border-4 border-customisation-turquoise/5"
              />
            </div>
          </div>
        </div>
      </div>
    </Content>
  )
}

CommunitiesPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>
}

export default CommunitiesPage
