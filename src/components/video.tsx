type Props = {
  videoWebm: string
  videoMp4: string
  poster: string
  className?: string
}

const Video = (props: Props) => {
  const { videoMp4, videoWebm, poster, className } = props

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      className={className}
    >
      <source src={videoMp4} type="video/mp4;codecs=hvc1" />
      <source src={videoWebm} type="video/webm" />
    </video>
  )
}

export { Video }
