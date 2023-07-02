import type { IconProps } from '@status-im/icons'

const DesktopSvgMessages = (props: IconProps) => {
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
        d="M20.5 18.667V12a8.5 8.5 0 1 0-8.5 8.5h6.667c1.012 0 1.833-.82 1.833-1.833ZM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10h6.667A3.333 3.333 0 0 0 22 18.667V12c0-5.523-4.477-10-10-10Z"
      />
    </svg>
  )
}

export default DesktopSvgMessages
