import type { IconProps } from '@status-im/icons'

const DesktopSvgProfile = (props: IconProps) => {
  return (
    <svg
      {...props}
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable={false}
      aria-hidden={true}
    >
      <path
        clipRule="evenodd"
        d="M12 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-1.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path d="M16.447 16.273a.713.713 0 0 1 .019 1.118c-.305.253-.743.209-1.062-.025A5.724 5.724 0 0 0 12 16.25a5.724 5.724 0 0 0-3.404 1.116c-.319.234-.757.277-1.061.025a.712.712 0 0 1 .019-1.118A7.219 7.219 0 0 1 12 14.75c1.676 0 3.219.569 4.447 1.523Z" />
      <path
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
      />
    </svg>
  )
}

export default DesktopSvgProfile
