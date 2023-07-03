import { useState } from 'react'

// import featureImage1 from '@assets/messenger/feature-01.png'
// import featureImage2 from '@assets/messenger/feature-02.png'
import featureImage3 from '@assets/messenger/feature-03.png'
import featureImage4 from '@assets/messenger/feature-04.png'
import featureImage5 from '@assets/messenger/feature-05.png'
import featureImage6 from '@assets/messenger/feature-06.png'
import featureImage7 from '@assets/messenger/feature-07.png'
import featureImage8 from '@assets/messenger/feature-08.png'
import featureImage9 from '@assets/messenger/feature-09.png'
import heroImage1 from '@assets/messenger/hero-01.png'
import heroImage2 from '@assets/messenger/hero-02.png'
import heroImage3 from '@assets/messenger/hero-03.png'
import heroImage4 from '@assets/messenger/hero-04.png'
import identityNote from '@assets/messenger/identity-note.png'
import sectionImage1 from '@assets/messenger/section-01.png'
import sectionImage2 from '@assets/messenger/section-02.png'
import { Text } from '@status-im/components'
import { CheckIcon } from '@status-im/icons'
import { cx } from 'class-variance-authority'
import Image from 'next/image'

import { Section } from '@/components/cards'
import { Hero } from '@/components/hero'
import {
  IdentityShowcase,
  identityVariants,
} from '@/components/identity-showcase'
import { SectionDesktopScreenshot } from '@/components/section-desktop-screenshot'
import { SectionLarge } from '@/components/section-large'
import { VideoSection } from '@/components/video-section'
import { AppLayout, Content } from '@/layouts/app-layout'

import type { IdentityVariant } from '@/components/identity-showcase'
import type { Page } from 'next'

const borderColor = {
  army: 'border-customisation-army/20',
  blue: 'border-customisation-blue/20',
  camel: 'border-customisation-camel/20',
  cooper: 'border-customisation-cooper/20',
  magenta: 'border-customisation-magenta/20',
  orange: 'border-customisation-orange/20',
  pink: 'border-customisation-pink/20',
  purple: 'border-customisation-purple/20',
  sky: 'border-customisation-sky/20',
  turquoise: 'border-customisation-turquoise/20',
  yellow: 'border-customisation-yellow/20',
  yin: 'border-customisation-yin/20',
}

const afterBorderColor = {
  army: 'after:border-customisation-army/20',
  blue: 'after:border-customisation-blue/20',
  camel: 'after:border-customisation-camel/20',
  cooper: 'after:border-customisation-cooper/20',
  magenta: 'after:border-customisation-magenta/20',
  orange: 'after:border-customisation-orange/20',
  pink: 'after:border-customisation-pink/20',
  purple: 'after:border-customisation-purple/20',
  sky: 'after:border-customisation-sky/20',
  turquoise: 'after:border-customisation-turquoise/20',
  yellow: 'after:border-customisation-yellow/20',
  yin: 'after:border-customisation-yin/20',
}

const MessengerPage: Page = () => {
  const [selectedIdentity, setSelectedIdentity] = useState<IdentityVariant>(
    'bg-customisation-army-50'
  )

  return (
    <>
      <Content>
        <Hero
          type="messenger"
          title="Chat privately with friends"
          description="Protect your right to free speech. 1:1 and group chats with e2e encryption, perfect forward secrecy and metadata privacy."
          images={[heroImage1, heroImage2, heroImage3, heroImage4]}
          maxWidth={581}
        />
        <div className="lg:pb-20">
          <VideoSection
            title="Fully Decentralized Messaging"
            description="Status’ Waku p2p messaging network is powered by people running Status Desktop - true decentralisation."
            poster="/assets/messenger/notifications-preview.png"
            videoMp4="/assets/create-community/notifications.mp4"
            videoWebm="/assets/create-community/notifications.webm"
          />

          <Section
            icon="ghost"
            color="purple"
            title="Private 1:1 messaging"
            description="E2E encrypted with perfect forward secrecy and metadata privacy."
            video={{
              mp4: '/assets/video-messages-1-to-1-01.mp4',
              webm: '/assets/video-messages-1-to-1-01.webm',
              poster: sectionImage1.src,
            }}
            imageAlt="wallet-2"
            secondaryTitle="Communicate pseudonymously"
            secondaryDescription="No identifying information required to use Status. We don’t force you to divulge for your phone number, email, bank card, google or facebook account (or anything else)."
          />
          <Section
            icon="bubble"
            color="purple"
            title="Unstoppable group chats"
            description="Chat with friends safely, knowing the conversation doesn’t leave the group"
            video={{
              mp4: '/assets/video-messages-1-to-1-02.mp4',
              webm: '/assets/video-messages-1-to-1-02.webm',
              poster: sectionImage2.src,
            }}
            imageAlt="wallet-5"
            secondaryTitle="With up to 20 people in each group chat"
            secondaryDescription="Some other platforms like Discord only let you create group chats with a maximum of 10 people. Status lets you create 20 person chats today and potentially even larger group chats tomorrow!"
            reverse
          />
        </div>
      </Content>

      <div className="bg-[url('/assets/messenger/illustration-security-01.png')] bg-[length:100%] bg-[center_top_-5rem] bg-no-repeat lg:bg-cover lg:bg-[center_top_-10rem]">
        <div className="bg-[url('/assets/messenger/illustration-security-02.png')] bg-cover bg-[center_bottom_-5rem] bg-no-repeat lg:bg-[center_bottom_-10rem]">
          <div className="m-auto max-w-[700px] px-16 pb-40 pt-44 text-center md:pb-[352px] md:pt-[524px]">
            <h2 className="pb-3 text-40 text-white-100 md:text-64">
              Keep who your friends are private
            </h2>
            <Text size={19} color="$white-100">
              End to end encryption is important, but it doesn’t stop an
              eavesdropper knowing who is talking to who. Status’ metadata
              privacy fixes this - it means that even who you message with can’t
              be surveilled.
            </Text>
          </div>
        </div>
      </div>

      <Content>
        <div className="border-dashed-default border-b pb-40">
          <SectionLarge
            title="A wonderful chat experience"
            description="No need to choose between a user experience you love, and being open source, decentralised and private. ✨"
          >
            <div className="mx-auto flex w-full max-w-[1504px] justify-center gap-5 px-10">
              <div className="flex flex-1 flex-col gap-5">
                <FeatureImage
                  label="Photos"
                  imageSrc={featureImage3}
                  imageWidth={381}
                  imageHeight={732}
                />
                <FeatureImage
                  label="GIFs & Stickers"
                  imageSrc={featureImage4}
                  imageWidth={334}
                  imageHeight={312}
                />
              </div>

              <div className="flex flex-1 flex-col gap-5">
                <FeatureImage
                  label="Code snippets"
                  imageSrc={featureImage5}
                  imageWidth={334}
                  imageHeight={312}
                />
                <FeatureImage
                  label="Audio messages"
                  imageSrc={featureImage6}
                  imageWidth={334}
                  imageHeight={312}
                />
                <FeatureImage
                  label="Text formatting"
                  imageSrc={featureImage7}
                  imageWidth={334}
                  imageHeight={312}
                />
              </div>

              <div className="flex flex-1 flex-col gap-5">
                <FeatureImage
                  label="Links unrolled"
                  imageSrc={featureImage8}
                  imageWidth={381}
                  imageHeight={522}
                  reverse
                />
                <FeatureImage
                  label="Write long messages"
                  imageSrc={featureImage9}
                  imageWidth={334}
                  imageHeight={522}
                  reverse
                />
              </div>
            </div>
          </SectionLarge>
        </div>

        <div className="container justify-center py-12 pt-40 lg:flex lg:pb-20">
          <div className="relative z-[3]">
            <div
              className={cx(
                'flex flex-col items-center gap-0 lg:flex-row xl:gap-[140px]'
              )}
            >
              <div className="flex w-[360px] flex-1 flex-col justify-start lg:w-full lg:justify-center">
                <div className="flex flex-col">
                  <div className="mb-8 flex flex-col lg:mb-16">
                    <h2 className="mb-6 text-left text-40 lg:text-64">
                      Your assets.
                      <br />
                      Your identity.
                    </h2>
                    <div className="relative flex">
                      <Text size={27}>
                        Showcase some or all of your tokens, memberships and
                        accounts with friends, the world, or keep private.
                      </Text>
                    </div>
                    <Image
                      src={identityNote}
                      alt="Your identity"
                      className="mt-6 hidden lg:block"
                      height="24"
                      width="183"
                    />
                  </div>
                  <Text size={13} color="$neutral-40">
                    Preview examples
                  </Text>
                  <div
                    className={cx(
                      'mb-12 flex flex-row flex-wrap justify-between pt-3 lg:mb-0 lg:w-[462px] lg:flex-nowrap lg:justify-normal'
                    )}
                  >
                    {identityVariants.map(variant => {
                      const selectedVariant = variant
                        .replace('bg-customisation-', '')
                        .replace('-50', '')

                      return (
                        <div
                          key={variant}
                          className={cx(
                            'relative m-1 h-11 w-11 rounded-full border-2 lg:h-7 lg:w-7',
                            "after:pointer-events-none after:absolute after:-top-[2px] after:left-[50%] after:z-0 after:h-[44px] after:w-[22px] after:overflow-hidden after:rounded-r-full after:border-2 after:border-l-0 after:content-[''] lg:after:h-[28px] lg:after:w-[14px]",
                            variant === selectedIdentity &&
                              afterBorderColor[
                                selectedVariant as keyof typeof borderColor
                              ],
                            variant === selectedIdentity
                              ? 'after:visible'
                              : 'after:invisible',
                            variant === selectedIdentity
                              ? borderColor[
                                  selectedVariant as keyof typeof borderColor
                                ]
                              : 'border-white-100'
                          )}
                        >
                          <button
                            className={cx(
                              'z-10 flex h-10 w-10 items-center justify-center rounded-full lg:h-6 lg:w-6',
                              variant
                            )}
                            onClick={() => setSelectedIdentity(variant)}
                          >
                            {variant === selectedIdentity ? (
                              <CheckIcon size={16} color="$white-100" />
                            ) : (
                              ''
                            )}
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              <IdentityShowcase
                alt="Your identity"
                selectedVariant={selectedIdentity}
              />
            </div>
          </div>
        </div>

        <div className="pb-30 pt-20 lg:pt-0">
          <SectionDesktopScreenshot
            title="Share your profile"
            description="Using web URLs that can be posted on Web2 social media. User doesn’t have Status? Open in browser."
            selectedVariant={selectedIdentity}
            icon="businessCards"
          />
        </div>
      </Content>
    </>
  )
}

const FeatureImage = ({
  label,
  imageSrc,
  imageWidth,
  imageHeight,
  imageAlt,
  reverse,
}: any) => {
  return (
    <div
      className={cx([
        'flex w-full max-w-[462px] flex-col items-center rounded-[36px] border border-neutral-80/10 text-center',
        reverse && 'flex-col-reverse',
      ])}
    >
      <Image
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
        quality={80}
        alt={imageAlt}
        className={cx([
          'border-4 border-customisation-purple/5',
          reverse ? 'rounded-t-3xl border-b-0' : 'rounded-b-3xl border-t-0',
        ])}
      />
      <div className="py-6">
        <Text size={27} weight="semibold">
          {label}
        </Text>
      </div>
    </div>
  )
}

MessengerPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>
}

export default MessengerPage
