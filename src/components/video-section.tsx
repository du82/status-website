import { Text } from '@status-im/components'
import { cx } from 'class-variance-authority'

import { Video } from './video'

type Props = {
  title: string
  description: string
  secondaryDescription?: string
  poster: string
  videoWebm: string
  videoMp4: string
  dark?: boolean
  hideToRight?: boolean
}

const VideoSection = (props: Props) => {
  const {
    title,
    description,
    poster,
    dark,
    videoMp4,
    videoWebm,
    secondaryDescription,
    hideToRight,
  } = props

  return (
    <div className="container relative pb-48 pt-60 md:flex">
      <div className="relative z-[1] flex flex-col">
        <div className="flex max-w-[480px] flex-col gap-4">
          <h2 className={cx('text-40 lg:text-64', dark && 'text-white-100')}>
            {title}
          </h2>
          <Text size={27} color={dark ? '$white-100' : ''}>
            {description}
          </Text>
          {secondaryDescription && (
            <div className="pt-8">
              <Text size={13} color="$neutral-50" weight="medium">
                {secondaryDescription}
              </Text>
            </div>
          )}
        </div>
      </div>
      <Video
        className={cx(
          'relative right-0 top-0 flex justify-center md:absolute',
          hideToRight && 'right-[-100px] max-w-[780px]'
        )}
        poster={poster}
        videoMp4={videoMp4}
        videoWebm={videoWebm}
      />
    </div>
  )
}

export { VideoSection }
