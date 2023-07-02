import type { IconProps } from '@status-im/icons'

const DesktopSvgMobile = (props: IconProps) => {
  return (
    <svg
      {...props}
      width={props.width}
      height={props.height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable={false}
      aria-hidden={true}
    >
      <path d="M13 20.042a1.625 1.625 0 1 0 0-3.25 1.625 1.625 0 0 0 0 3.25Z" />
      <path
        clipRule="evenodd"
        d="M5.417 6.5A4.333 4.333 0 0 1 9.75 2.167h6.5A4.333 4.333 0 0 1 20.583 6.5v13a4.333 4.333 0 0 1-4.333 4.333h-6.5A4.333 4.333 0 0 1 5.417 19.5v-13Zm1.625 0A2.708 2.708 0 0 1 9.75 3.792h6.5A2.708 2.708 0 0 1 18.958 6.5v13a2.708 2.708 0 0 1-2.708 2.708h-6.5A2.708 2.708 0 0 1 7.042 19.5v-13Z"
      />
    </svg>
  )
}

export default DesktopSvgMobile
