type Props = {
  videoWebm: string
  videoMp4: string
  poster: string
  className?: string
  width?: number
}

const Video = (props: Props) => {
  const { videoMp4, videoWebm, poster, className, width } = props

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      className={className}
      width={width}
    >
      <source src={videoMp4} type="video/mp4;codecs=hvc1" />
      <source src={videoWebm} type="video/webm" />
    </video>
  )
}

export { Video }
