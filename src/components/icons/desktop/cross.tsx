import type { IconProps } from '@status-im/icons'

const DesktopSvgCross = (props: IconProps) => {
  return (
    <svg
      {...props}
      fill="none"
      width={props.width}
      height={props.height}
      viewBox="0 0 26 26"
      xmlns="http://www.w3.org/2000/svg"
      focusable={false}
      aria-hidden={true}
    >
      <path
        clipRule="evenodd"
        d="m13 13.859 6.043 6.103.914-.924-6.042-6.103 5.913-5.973-.915-.924L13 12.011 7.086 6.038l-.914.924 5.913 5.973-6.042 6.103.914.924L13 13.859Z"
      />
    </svg>
  )
}

export default DesktopSvgCross
