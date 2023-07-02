import type { IconProps } from '@status-im/icons'

const DesktopSvgMember = (props: IconProps) => {
  return (
    <svg
      {...props}
      width={props.width}
      height={props.height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable={false}
      aria-hidden={true}
    >
      <path
        clipRule="evenodd"
        d="M10.946 13.944a6.79 6.79 0 1 0 0-13.58 6.79 6.79 0 0 0 0 13.58Zm0-2.037a4.753 4.753 0 1 0 0-9.506 4.753 4.753 0 0 0 0 9.506Z"
      />
      <path d="M12.215 19.082c-.047.567-.55.981-1.12.974l-.15-.001a11.515 11.515 0 0 0-8.668 3.921c-.411.467-1.139.53-1.579.09-.354-.354-.396-.917-.07-1.297a13.55 13.55 0 0 1 10.67-4.747c.556.015.963.507.917 1.06ZM24.079 14.4a1.018 1.018 0 1 0-1.822-.912l-3.02 6.042a.68.68 0 0 1-1.088.176l-1.05-1.05a1.019 1.019 0 0 0-1.441 1.44l2.05 2.05c.819.82 2.2.595 2.718-.441l3.653-7.306Z" />
    </svg>
  )
}

export default DesktopSvgMember
