import gentlemanImage from '@assets/wallet/gentleman.png'
import illustartionHandsDesktop from '@assets/wallet/illustration-hands-desktop.png'
import { Text } from '@status-im/components'
import Image from 'next/image'

import { illustrations } from '@/config/illustrations'

const HandsSection = () => {
  return (
    <div className="relative bg-[url('/assets/wallet/background-pattern.png')] bg-[length:100%_100%] bg-no-repeat pb-40 ">
      <div className="relative grid aspect-[1.65] place-content-center">
        <Image src={illustartionHandsDesktop} alt="hands" fill />

        <h2 className="max-w-[600px] py-4 pb-5 text-center text-64">
          Take control
          <br />
          of your crypto
        </h2>
        <span className="max-w-xl text-center font-bold">
          <Text size={27}>
            No one (including Status!) has the power to freeze, lock-out or stop
            a Status user from accessing and transacting their tokens.
          </Text>
        </span>
      </div>

      <div className="relative z-[2] flex justify-center gap-5 pt-20">
        {[
          {
            icon: illustrations.ether,
            title: 'Ethereum based assets',
            description:
              'We support all assets in the Uniswap Labs default tokenlist and those minted by communities using Status.',
          },
          {
            icon: illustrations.nft,
            title: 'NFTs and collectibles',
            description:
              'We will display any NFTs or collectibles listed on OpenSea plus those minted by communities using Status.',
          },
        ].map(item => (
          <div
            key={item.title}
            className="flex max-w-[460px] flex-col items-center px-10"
          >
            <Image
              src={item.icon.src}
              alt={item.icon.alt}
              width={48}
              height={48}
              className="pb-4"
            />
            <div className="flex flex-col items-center gap-1 text-center">
              <Text size={27} weight="semibold">
                Ethereum based assets
              </Text>
              <Text size={19}>
                We support all assets in the Uniswap Labs default tokenlist and
                those minted by communities using Status.
              </Text>
            </div>
          </div>
        ))}
      </div>

      <Image
        src={gentlemanImage}
        alt="gentleman"
        className="absolute bottom-0 left-7"
        width={183}
        height={236}
      />
    </div>
  )
}

export { HandsSection }
