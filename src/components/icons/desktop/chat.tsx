import type { IconProps } from '@status-im/icons'

const DesktopSvgChat = (props: IconProps) => {
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
      <path
        clipRule="evenodd"
        d="M22.208 20.222V13A9.208 9.208 0 1 0 13 22.208h7.222c1.097 0 1.986-.889 1.986-1.986ZM13 2.167C7.017 2.167 2.167 7.017 2.167 13c0 5.983 4.85 10.833 10.833 10.833h7.222a3.611 3.611 0 0 0 3.611-3.61V13c0-5.983-4.85-10.833-10.833-10.833Z"
      />
    </svg>
  )
}

export default DesktopSvgChat
