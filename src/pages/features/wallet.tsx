import heroImage1 from '@assets/wallet/hero-01.png'
import heroImage2 from '@assets/wallet/hero-02.png'
import heroImage3 from '@assets/wallet/hero-03.png'
import heroImage4 from '@assets/wallet/hero-04.png'
import sectionImage1 from '@assets/wallet/section-01.png'
import sectionImage2 from '@assets/wallet/section-02.png'
import sectionImage3 from '@assets/wallet/section-03.png'
import sectionImage4 from '@assets/wallet/section-04.png'
import sectionImage5 from '@assets/wallet/section-05.png'
import { Text } from '@status-im/components'

import { Section } from '@/components/cards'
import { Hero } from '@/components/hero'
import { ParalaxCircle } from '@/components/parallax-circle'
import { VideoSection } from '@/components/video-section'
import { ComparisionSection, HandsSection } from '@/components/wallet'
import { AppLayout, Content } from '@/layouts/app-layout'

import type { Page } from 'next'

const WalletPage: Page = () => {
  return (
    <Content>
      <div className="overflow-hidden">
        <Hero
          type="wallet"
          title="The future is multi-chain"
          description="L2s made simple - send and manage your crypto easily and safely across multiple networks."
          images={[heroImage1, heroImage2, heroImage3, heroImage4]}
          maxWidth={570}
        />
        <VideoSection
          title=" Fully
          Decentralized
          Networks"
          description="Status supports blockchain networks that are fully committed to decentralization."
          secondaryDescription="Currently supported networks"
          videoMp4="/assets/wallet/vitalik-wallet.mp4"
          videoWebm="/assets/wallet/vitalik-wallet.webm"
          poster="/assets/wallet/vitalik-wallet-preview.png"
        />

        <div className="pb-12 lg:pb-20">
          <ParalaxCircle
            color="bg-customisation-yellow-50"
            right={-100}
            top={-100}
          />
          <Section
            icon="multichain"
            color="yellow"
            title="True multi-chain experience"
            description="All networks, all the time. See all your assets and NFTs in one place, even if spread across multiple blockchains."
            image={sectionImage1}
            imageAlt="wallet-2"
            secondaryDescription="You can treat it like other wallets by selecting individual chains manually. But once you’ve tried the Status ‘all chains, always’ way of doing things, you won’t want to go back."
            secondaryTitle="Can be used as ‘single chain at a time’ wallet"
            explanation="This has some information so it will show the icon to open the dialog"
          />
          <Section
            icon="paperPlaneTokens"
            color="yellow"
            title="Simple token sending"
            description=" Select token, amount and press “Send”. Need to bridge between blockchains? Status does this automatically."
            video={{
              webm: '/assets/video-fast-sending.webm',
              mp4: '/assets/video-fast-sending.mp4',
              poster: sectionImage2.src,
            }}
            imageAlt="wallet-5"
            secondaryDescription="Status automatically calculates the cheapest way of moving tokens from A to B, considering: gas prices, chains your tokens are on, chains the recipient uses, and bridge costs. All in real time."
            secondaryTitle="Cost efficient"
            reverse
          />
          <Section
            icon="cog"
            color="yellow"
            title="Full control for power users"
            description="Select exact amounts to send from each blockchain, and precisely set the chains the recipient will receive funds on."
            video={{
              webm: '/assets/video-long-send.webm',
              mp4: '/assets/video-long-send.mp4',
              poster: sectionImage3.src,
            }}
            imageAlt="wallet-6"
            secondaryDescription="Gas limit, max base fee, max priority fee, input data and nounce value for every transaction in each transaction bundle. If you really want to..."
            secondaryTitle="Pro user? You can edit:"
          />
          <ParalaxCircle
            color="bg-customisation-yellow-50"
            right={-200}
            top={-300}
          />
        </div>

        <ComparisionSection />

        <div className="relative z-10 rounded-t-[48px] border-t border-neutral-10 bg-white-100 mix-blend-normal shadow-[0_-2px_20px_0px_rgba(9,16,28,0.04)] lg:pt-20">
          <Section
            icon="mailbox"
            color="yellow"
            title="New address format"
            description="A way for wallets to automatically signal which chains they can receive funds on. So you don’t have to."
            explanation="TODO"
            video={{
              webm: '/assets/video-share-accounts.webm',
              mp4: '/assets/video-share-accounts.mp4',
              poster: sectionImage4.src,
            }}
            imageAlt="wallet-7"
            reverse
            secondaryDescription="Status is working with other wallets to ensure EIP-3770 with multiple chain shortName prefixes becomes the new ethereum address standard."
            secondaryTitle="On the path to adoption"
            secondarySlot={
              <div className="relative rounded-2xl border border-neutral-80/5 px-4 py-3">
                <Text size={15} color="$neutral-50">
                  EIP-3770 format:
                </Text>
                <p className="text-[19px] leading-[28px] text-neutral-100">
                  <span className="text-networks-ethereum">eth:</span>
                  <span className="text-networks-optimism">opt:</span>
                  <span className="text-networks-arbitrum">artb:</span>
                  0xAbc123...xyz789
                </p>
              </div>
            }
          />
          <Section
            icon="chart"
            color="yellow"
            title="Total balance graphs"
            description="Who doesn’t want to see how their ‘crypto portfolio number’ has gone up or down over time?"
            video={{
              webm: '/assets/video-graph-modal.webm',
              mp4: '/assets/video-graph-modal.mp4',
              poster: sectionImage5.src,
            }}
            imageAlt="wallet-8"
            secondaryDescription="Everything is taken into account: fluctuations in fiat exchange rates, daily valuation updates of every crypto asset you hodl, and how your balance changes when tokens are sent/received"
            secondaryTitle="Graphs that do maths"
            secondaryExplanation="TODO"
          />
        </div>
        <div className="relative z-20 bg-white-100">
          <HandsSection />
        </div>
      </div>
    </Content>
  )
}

WalletPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>
}

export default WalletPage
