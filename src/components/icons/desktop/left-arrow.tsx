import type { IconProps } from '@status-im/icons'

const DesktopSvgLeftArrow = (props: IconProps) => {
  return (
    <svg
      {...props}
      width={props.width}
      height={props.height}
      viewBox="0 0 26 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable={false}
      aria-hidden={true}
    >
      <path d="M10.816 2.874a1.114 1.114 0 0 0-1.575-1.576L.326 10.212a1.114 1.114 0 0 0 0 1.576l8.915 8.914a1.114 1.114 0 1 0 1.575-1.576l-5.743-5.744a.743.743 0 0 1 .525-1.268h19.288a1.114 1.114 0 0 0 0-2.228H5.598a.743.743 0 0 1-.525-1.268l5.743-5.744Z" />
    </svg>
  )
}

export default DesktopSvgLeftArrow
