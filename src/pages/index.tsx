import communitiesImage1 from '@assets/homepage/communities-01.png'
import communitiesImage2 from '@assets/homepage/communities-02.png'
import communitiesImage3 from '@assets/homepage/communities-03.png'
import communitiesImage4 from '@assets/homepage/communities-04.png'
import accordionSectionImage1 from '@assets/homepage/home-accordion-01.png'
import accordionSectionImage2 from '@assets/homepage/home-accordion-02.png'
import accordionSectionImage3 from '@assets/homepage/home-accordion-03.png'
import accordionSectionImage4 from '@assets/homepage/home-accordion-04.png'
import messengerImage1 from '@assets/homepage/messenger-01.png'
import messengerImage2 from '@assets/homepage/messenger-02.png'
import messengerImage3 from '@assets/homepage/messenger-03.png'
import messengerImage4 from '@assets/homepage/messenger-04.png'
// TODO: import sectionImage1 from '@assets/homepage/section-01.png'
import walletImage1 from '@assets/homepage/wallet-01.png'
import walletImage2 from '@assets/homepage/wallet-02.png'
import walletImage3 from '@assets/homepage/wallet-03.png'
import walletImage4 from '@assets/homepage/wallet-04.png'
import { Tag, Text } from '@status-im/components'
import { ChevronRightIcon } from '@status-im/icons'
import { cx } from 'class-variance-authority'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

import { AccordionTitlesSection, Video } from '@/components'
import { CTAButton } from '@/components/cta-button'
import { Link } from '@/components/link'
import { ParalaxCircle } from '@/components/parallax-circle'
import { illustrations } from '@/config/illustrations'
import { ROUTES } from '@/config/routes'
import { stickers } from '@/config/stickers'
import { useFeatureTheme } from '@/hooks/use-feature-theme'
import { AppLayout, Content } from '@/layouts/app-layout'

import type { FeatureType } from '@/hooks/use-feature-theme'
import type { Page } from 'next'
import type { StaticImageData } from 'next/image'
import type { LinkProps } from 'next/link'

const HomePage: Page = () => {
  return (
    <>
      <Content>
        <div className="relative flex w-full justify-center overflow-hidden border-b border-dashed border-neutral-30 bg-white-100">
          <div className="relative w-full items-center justify-center">
            <ParalaxCircle
              color="bg-customisation-blue-50"
              top={0}
              left={-106}
            />
            <div className="container relative pb-12 pt-28 lg:py-40">
              <div className="grid max-w-[582px] gap-6">
                <div className="pointer-events-none inline-flex w-fit items-center gap-2 rounded-[56px] border border-neutral-80/10 px-[6px] py-1">
                  <div
                    style={{
                      background:
                        'linear-gradient(89deg, #F6B03C 25.05%, #FF33A3 84.36%)',
                    }}
                    className="flex h-[24px] w-[47px] items-center justify-center rounded-xl text-[13px] uppercase text-white-100"
                  >
                    <span className="font-semibold">New</span>
                  </div>
                  <Text size={15} color="$neutral-100" weight="medium">
                    Check our new website
                  </Text>
                  <ChevronRightIcon size={16} color="$neutral-80-opa-40" />
                </div>
                <h1 className="text-88">
                  Make the
                  <br />
                  jump to web3
                </h1>

                <Text size={27}>
                  Use the open source, decentralized crypto communication super
                  app.
                </Text>
              </div>

              <div className="mt-8 flex max-w-[460px] items-center gap-5 rounded-l-2xl rounded-r-[20px] border border-dashed border-neutral-80/20 p-2 pl-3">
                <Text size={13}>
                  Betas for Mac, Windows, Linux
                  <br />
                  Alphas for iOS & Android
                </Text>

                <CTAButton />
              </div>

              <Video
                poster="/assets/homepage/homepage-hero-preview.png"
                videoMp4="/assets/homepage/homepage-hero.mp4"
                videoWebm="/assets/homepage/homepage-hero.webm"
                className="pointer-events-none absolute right-[-160px] top-[50px] z-10 "
              />
            </div>
            {/* COMMUNITIES */}
            <div className="relative bg-white-100">
              <FeatureSection
                type="communities"
                title="Discover your community"
                description="Find your tribe in the metaverse of truly free Status communities"
                files={[
                  {
                    src: communitiesImage1,
                    alt: '',
                    label: 'Explore the universe of self-sovereign communities',
                    align: 'bottom',
                    width: 380,
                  },
                  {
                    src: communitiesImage2,
                    alt: '',
                    label: 'Decentralized and permissionless',
                    align: 'top',
                    half: true,
                    width: 413,
                    noBorder: true,
                  },
                  {
                    src: communitiesImage3,
                    alt: '',
                    label:
                      'Access token gated channels. Become eligible for airdrops.',
                    align: 'top',
                    half: true,
                    width: 334,
                  },
                  {
                    srcVideo: {
                      poster: communitiesImage4.src,
                      mp4: '/assets/video-home-to-channel.mp4',
                      webm: '/assets/video-home-to-channel.webm',
                    },
                    alt: '',
                    width: 334,
                  },
                ]}
              >
                <ParalaxCircle
                  color="bg-customisation-turquoise-50"
                  right={90}
                  top={-110}
                />
              </FeatureSection>
            </div>
          </div>
        </div>
      </Content>

      {/* DARK SECTION */}
      <div className="relative z-0 flex h-[388px] flex-col items-center justify-center  bg-neutral-100 py-20">
        {/* <Tag size={32} label="Create community" color="$turquoise-50-opa-20" /> */}
        <Video
          poster="/assets/homepage/control-left-preview.png"
          videoMp4="/assets/homepage/control-left.mp4"
          videoWebm="/assets/homepage/control-left.webm"
          className="absolute left-[-60px] h-[436px]"
        />
        <Video
          poster="/assets/homepage/liberty-right-preview.png"
          videoMp4="/assets/homepage/liberty-right.mp4"
          videoWebm="/assets/homepage/liberty-right.webm"
          className="absolute bottom-[-20px] right-[-120px] h-[436px]"
        />
        <div className="mb-8 text-center">
          <h2 className="text-40 text-white-100 lg:text-64">
            Take back control!
          </h2>
          <Text size={19} color="$white-100">
            Don’t give Discord or Telegram power over your community.
          </Text>
        </div>
        <ButtonLink dark href="/features/create-community">
          Set your community free
        </ButtonLink>
      </div>

      <Content>
        {/* MESSENGER */}
        <FeatureSection
          type="messenger"
          title="Chat privately with friends"
          description="Protect your right to free speech with e2e encryption and metadata privacy."
          files={[
            // { src: messengerImage1, alt: '', label: '' },
            {
              src: messengerImage1,
              alt: '',
              label: 'Create and join unstopable group chats',
              width: 413,
              align: 'bottom',
              half: true,
              noBorder: true,
            },
            {
              src: messengerImage2,
              alt: '',
              label:
                'It’s the internet. Verify your contacts. Tools to manage trust.',
              width: 334,
              align: 'top',
              half: true,
            },
            {
              src: messengerImage3,
              alt: '',
              align: 'top',
              label: 'Send crypto to your friends directly from the chat',
              width: 380,
            },
            {
              srcVideo: {
                poster: messengerImage4.src,
                mp4: '/assets/video-messages.mp4',
                webm: '/assets/video-messages.webm',
              },
              alt: '',
              width: 334,
            },
          ]}
        >
          <Image
            {...stickers.smudgeCat}
            alt=""
            className="absolute bottom-[512px] left-[10px]"
          />
          <Image
            {...stickers.pizza}
            alt=""
            className="absolute bottom-[112px] left-[457px]"
          />
          <Image
            {...stickers.grumpyCat}
            alt=""
            className="absolute right-[351px] top-[485px]"
          />
          <ParalaxCircle
            color="bg-customisation-purple-50"
            bottom={-32}
            left={0}
          />
          <ParalaxCircle
            color="bg-customisation-purple-50"
            right={140}
            top={-338}
          />
        </FeatureSection>

        {/* WALLET */}
        <FeatureSection
          type="wallet"
          title="The future is multi-chain"
          description="L2s made simple - send and manage your crypto easily and safely across multiple networks."
          files={[
            { src: walletImage1, alt: '', width: 334 },
            {
              src: walletImage2,
              alt: '',
              label:
                'Fully self-custodial. Nobody can stop you using your tokens.',
              align: 'bottom',
              width: 372,
              half: true,
              noBorder: true,
            },
            {
              src: walletImage3,
              alt: '',
              label: 'See how your total balances change over time, in fiat.',
              align: 'bottom',
              width: 334,
              half: true,
            },
            {
              srcVideo: {
                poster: walletImage4.src,
                mp4: '/assets/video-fast-sending.mp4',
                webm: '/assets/video-fast-sending.webm',
              },
              alt: '',
              width: 334,
            },
          ]}
        >
          <ParalaxCircle
            color="bg-customisation-yellow-50"
            top={-338}
            right={338}
          />
        </FeatureSection>

        {/* DAPP BROWSER */}
        <FeatureSection
          type="browser"
          title="Explore dApps"
          description="Interact trustlessly with Web3 dApps, DAOs, NFTs, DeFi and much more"
          files={[
            { src: walletImage1, alt: '', width: 334 },
            // {src:walletImage2, alt: '', label:""},
            {
              // src:
              alt: '',
              label: 'Be free from tracking and data collection',
              align: 'bottom',
              width: 334,
            },
            {
              // src: null,
              alt: '',
              label:
                'Omnichain dApp connections. So you don’t have to pick chains.',
              align: 'bottom',
              width: 380,
            },
          ]}
        >
          <ParalaxCircle
            color="bg-customisation-magenta-50"
            right={750}
            top={-338}
          />
          <ParalaxCircle
            color="bg-customisation-magenta-50"
            top={-338}
            right={-338}
          />
        </FeatureSection>

        <Parallax
          translateY={[-10, 30]}
          className="whitespace-nowrap font-sans text-[240px] font-700 leading-[212px] text-neutral-80/5"
        >
          open source, decentralized crypto communication super app
        </Parallax>

        <div className="relative z-10 rounded-t-[48px] border-t border-neutral-10 bg-white-100 mix-blend-normal shadow-[0_-2px_20px_0px_rgba(9,16,28,0.04)] lg:pt-40">
          <div className="pb-30">
            <AccordionTitlesSection
              items={[
                {
                  title: 'Jump between tasks',
                  description:
                    'Like an operating system, whatever you’ve recently been doing is just a few taps away. Go from chatting with a friend to a wallet account without having to navigate your way back.',
                  backgroundColor: 'turquoise',
                  image: accordionSectionImage1,
                  icon: illustrations.frog.src,
                },
                {
                  title: 'Track your notifications',
                  description:
                    "With communities, 1on1 chats, wallet accounts and dApps, there is a lot going on! Stay in control with a global notification centre that lets you see at a glance everything that's happening in your Web3 world.",
                  backgroundColor: 'orange',
                  image: accordionSectionImage2,
                  icon: illustrations.bell.src,
                },
                {
                  title: 'Make it your own',
                  description:
                    'Customise your Status! Pick an avatar and colour to represent yourself, choose from light or dark mode, pick emoji to represent your accounts, and see the app will take on the character of the communities you join.',
                  backgroundColor: 'purple',
                  image: accordionSectionImage3,
                  icon: illustrations.wand.src,
                },
                {
                  title: 'Use multiple profiles',
                  description:
                    'Different online identities? Or sharing a device with family or friends? Not a problem, Status fully supports switching between multiple fully independent identities.',
                  backgroundColor: 'yellow',
                  image: accordionSectionImage4,
                  icon: illustrations.monopoly.src,
                },
              ]}
            />
          </div>

          <div className="relative grid grid-cols-2 items-center gap-[140px]">
            <Video
              poster="/assets/homepage/keycard-preview.png"
              videoMp4="/assets/homepage/keycard.mp4"
              videoWebm="/assets/homepage/keycard.webm"
            />
            <div className="flex max-w-[462px] flex-col items-start gap-8">
              <div className="flex flex-col gap-5">
                <h2 className="text-64">Status is better with Keycard</h2>
                <Text size={19}>A secure contactless hardware wallet</Text>
              </div>
              <ButtonLink href="/keycard">Learn More</ButtonLink>
            </div>

            <ParalaxCircle
              color="bg-customisation-army-50"
              left={501}
              top={300}
            />
          </div>
        </div>

        <div className="relative z-10 border-t border-dashed border-neutral-30 bg-white-100">
          <div className="relative mx-auto max-w-[1264px]">
            <Image
              {...stickers.doge}
              alt={stickers.doge.alt}
              className="absolute right-[-41px] top-[-87px]"
            />
            <Image
              {...stickers.snt}
              alt={stickers.snt.alt}
              className="absolute left-[37%] top-0"
            />

            <div className="flex justify-center divide-x divide-dashed divide-neutral-30">
              {PREFOOTER_LIST.map(({ title, description, link }) => (
                <div key={title} className="px-10 py-40">
                  <div className="mb-6 gap-1">
                    <h3>
                      <Text size={27} weight="semibold">
                        {title}
                      </Text>
                    </h3>
                    <Text size={15}>{description}</Text>
                  </div>
                  <div className="flex">
                    <ButtonLink href={link.href}>{link.label}</ButtonLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Content>
    </>
  )
}

const PREFOOTER_LIST = [
  {
    title: 'Decentralising the future',
    description:
      'Building apps to uphold human rights, protect free speech & defend privacy.',
    link: {
      label: 'Our Mission',
      href: ROUTES.Organization.find(link => link.name === 'Mission')!.href,
    },
  },
  {
    title: 'A token by and for Status',
    description:
      'Participate in Status’ governance and help guide development with SNT.',
    link: {
      label: 'About SNT',
      href: ROUTES.SNT.find(link => link.name === 'Token')!.href,
    },
  },
  {
    title: 'Stay up to date',
    description:
      'Follow development progress as we build a truly decentralized super app.',
    link: {
      label: 'Read the blog',
      href: ROUTES.Collaborate.find(link => link.name === 'Blog')!.href,
    },
  },
]

const ButtonLink = (
  props: LinkProps & { children: string; dark?: boolean }
) => {
  const { dark = false, children, ...linkProps } = props
  return (
    <Link
      {...linkProps}
      className={cx(
        'inline-flex h-10 items-center rounded-xl border px-4 transition-all',
        dark === false &&
          'border-neutral-80/10 text-neutral-100 hover:border-neutral-40 active:border-neutral-50',
        dark === true &&
          'border-neutral-70 text-white-100 hover:border-neutral-60 active:border-neutral-50'
      )}
    >
      <Text
        size={15}
        weight="medium"
        color={dark ? '$white-100' : '$neutral-100'}
      >
        {children}
      </Text>
    </Link>
  )
}

type FeatureImageOrVideo = {
  src?: StaticImageData
  srcVideo?: {
    mp4: string
    webm: string
    poster: string
  }
  alt: string
  label?: string
  align?: 'top' | 'bottom'
  half?: boolean
  width: number
  noBorder?: boolean
}

type SectionProps = {
  type: FeatureType
  title: string
  description: string
  files: FeatureImageOrVideo[]
  children?: React.ReactNode
}

const FeatureSection = (props: SectionProps) => {
  const { type, title, description, files, children } = props

  const theme = useFeatureTheme(type)!

  const backgroundColor = {
    'create-community': ' bg-customisation-turquoise/10',
    communities: ' bg-customisation-turquoise/10',
    messenger: ' bg-customisation-purple/10',
    wallet: ' bg-customisation-orange/10',
    browser: ' bg-customisation-army/10',
  } as const

  return (
    <div className="overflow-hidden">
      <section className="container relative grid max-w-[1504px] gap-20 py-40 lg:px-10">
        {children}
        <div className="flex max-w-[500px] flex-col items-start justify-start">
          <div className="mb-8 flex flex-col items-start gap-4">
            <Tag
              size={32}
              label={theme.label}
              color={theme.token}
              icon={theme.Icon}
            />
            <h2 className="flex-1 whitespace-pre-line text-40 lg:text-64">
              {title}
            </h2>
            <Text size={27}>{description}</Text>
          </div>

          <div className="flex">
            <ButtonLink href={theme.route.href}>Learn more</ButtonLink>
          </div>
        </div>

        {/* FEATURE GRID */}
        <div className="grid h-[820px] grid-flow-col grid-cols-3 grid-rows-2 gap-5">
          {files.map((file, index) => (
            <div
              key={index}
              className={cx(
                'grid rounded-[32px] border border-neutral-80/5',
                'content-center justify-center',
                file.srcVideo && backgroundColor[type],

                {
                  'row-span-1': file.half === true,
                  'row-span-2': file.half !== true,
                  'content-start': file.align === 'top',
                  'content-end': file.align === 'bottom',
                  'justify-items-end': file.align === 'bottom',
                }
              )}
            >
              <div
                className={cx('flex flex-col items-center', {
                  'flex-col': file.align === 'bottom',
                  'flex-col-reverse': file.align === 'top',
                })}
              >
                {file.label && (
                  <div className="p-6 text-center">
                    <Text size={27} weight="semibold">
                      {file.label}
                    </Text>
                  </div>
                )}
                {file.srcVideo ? (
                  <Video
                    poster={file.srcVideo.poster}
                    videoMp4={file.srcVideo.mp4}
                    videoWebm={file.srcVideo.webm}
                    width={file.width}
                    className={cx(
                      'rounded-3xl border-4 border-customisation-turquoise/5',

                      {
                        'rounded-t-none border-t-0': file.align === 'top',
                        'rounded-b-none border-b-0': file.align === 'bottom',
                      }
                    )}
                  />
                ) : (
                  <Image
                    src={file.src || ''}
                    alt={file.alt}
                    width={file.width}
                    className={cx(
                      'rounded-3xl border-4 border-customisation-turquoise/5',
                      {
                        'rounded-t-none border-t-0': file.align === 'top',
                        'rounded-b-none border-b-0': file.align === 'bottom',
                      }
                    )}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

HomePage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>
}

export default HomePage
