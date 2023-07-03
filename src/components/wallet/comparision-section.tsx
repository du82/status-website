import { Button, Counter, Tag, Text } from '@status-im/components'
import { Parallax } from 'react-scroll-parallax'

import { ParalaxCircle } from '../parallax-circle'

const ComparisionSection = () => {
  return (
    <div className="relative border-t border-dashed border-neutral-80/20">
      <div className="mx-auto max-w-[1504px] px-10">
        <div className="relative grid grid-cols-4 bg-white-100 mix-blend-normal">
          <div className="col-span-2 border-r border-dashed border-neutral-80/20 pb-20 pt-[160px]">
            <div className="flex h-full flex-col justify-between">
              <div className="inline-flex max-w-[646px] flex-col gap-4">
                <div className="inline-flex">
                  <Tag label="Use case" size={24} />
                </div>
                <h2 className="text-40 font-regular">
                  Alice has 50 DAI on both Ethereum Mainnet and Optimism and
                  wants to send 100 DAI to Bob on Arbitrum.
                </h2>
              </div>

              <div className="mt-16 flex w-full max-w-[350px] flex-col gap-1 rounded-[20px] border border-dashed border-neutral-80/20 p-4">
                <Text size={19} weight="semibold">
                  Finally! Multi-chain done right!
                </Text>
                <div className="mb-4 flex">
                  <Text size={15}>
                    Interested in how Status’s send with auto routing and
                    bridging works and helps users?{' '}
                  </Text>
                </div>
                <div className="inline-flex">
                  <Button variant="outline">Read more</Button>
                </div>
              </div>
            </div>
          </div>

          <List
            title="Other Wallets"
            items={OTHER_WALLETS_LIST}
            lastItem={{
              emoji: '😮‍💨',
              label: 'Is that it?',
              description: 'Did I use cheapest route and bridges?',
            }}
          />
          <List
            title="Status Wallet"
            items={STATUS_WALLET_LIST}
            lastItem={{
              emoji: '🎉',
              label: 'That’s it!',
              description: 'Lowest possible cost!',
            }}
          />

          <ParalaxCircle color="bg-customisation-yellow-50" top={-600} />
        </div>
      </div>

      <div className="relative h-[280px]">
        <Parallax
          translateY={[-10, 30]}
          className="absolute bottom-0 left-0 whitespace-nowrap font-sans text-[240px] font-bold leading-[212px] text-neutral-80/5"
        >
          eth:opt:arb:0xAgafhja
        </Parallax>
      </div>
    </div>
  )
}

export { ComparisionSection }

const OTHER_WALLETS_LIST = [
  'Open dApp Browser',
  'Visit Bridge dApp',
  'Bridge DAI from Mainnet to Arbitrum',
  'Send DAI on Arbitrum',
  'Open dApp Browser',
  'Visit Bridge dApp',
  'Bridge DAI from Optimism to Arbitrum',
  'Send DAI on Arbitrum',
]

const STATUS_WALLET_LIST = ['Select the token', 'Select the amount', 'Send']

type ListProps = {
  title: string
  items: string[]
  lastItem: {
    label: string
    description: string
    emoji: string
  }
}

const List = (props: ListProps) => {
  const { title, items, lastItem } = props

  return (
    <div className="border-r border-dashed border-neutral-80/20 px-10 pb-20 pt-40">
      <Text size={19} weight="semibold">
        {title}
      </Text>
      <div className="flex flex-col pt-3">
        <div className="flex flex-col divide-y divide-dashed divide-neutral-30">
          {items.map((item, index) => (
            <div key={item} className="flex py-3">
              <Counter value={index + 1} type="outline" />
              <div className="flex flex-col pl-[10px]">
                <Text size={19}>{item}</Text>
              </div>
            </div>
          ))}
        </div>

        <div className="flex py-3">
          <Text size={19}>{lastItem.emoji}</Text>
          <div className="flex flex-col pl-[10px]">
            <Text size={19} weight="semibold">
              {lastItem.label}
            </Text>
            <Text size={19} weight="regular">
              {lastItem.description}
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}
