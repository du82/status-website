import type { IconProps } from '@status-im/icons'

const DesktopSvgWallet = (props: IconProps) => {
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
      <path d="M6.5 5.688a.813.813 0 0 0 0 1.625h13a.813.813 0 0 0 0-1.625h-13Z" />
      <path
        clipRule="evenodd"
        d="M6.5 2.167A4.333 4.333 0 0 0 2.167 6.5v13A4.333 4.333 0 0 0 6.5 23.833h13a4.333 4.333 0 0 0 4.333-4.333v-13A4.333 4.333 0 0 0 19.5 2.167h-13Zm0 1.625a2.708 2.708 0 1 0 0 5.416h13a2.708 2.708 0 1 0 0-5.416h-13ZM22.208 19.5v-8.489c0-.454-.546-.727-.961-.544a4.32 4.32 0 0 1-1.747.366h-13a4.32 4.32 0 0 1-1.747-.366c-.415-.183-.961.09-.961.544v8.49A2.708 2.708 0 0 0 6.5 22.207h13a2.708 2.708 0 0 0 2.708-2.708Z"
      />
    </svg>
  )
}

export default DesktopSvgWallet
