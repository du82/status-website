import type { IconProps } from '@status-im/icons'

const DesktopSvgEmojis = (props: IconProps) => {
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
        d="M10.833 20.042a9.208 9.208 0 1 0 0-18.417 9.208 9.208 0 0 0 0 18.417Zm0 1.625c5.983 0 10.834-4.85 10.834-10.834C21.667 4.85 16.817 0 10.833 0 4.85 0 0 4.85 0 10.833c0 5.983 4.85 10.834 10.833 10.834Z"
      />
      <path d="M8.2 14.272c-.369-.257-.88-.264-1.197.054-.317.317-.32.836.035 1.11a6.202 6.202 0 0 0 3.795 1.289c1.428 0 2.744-.48 3.795-1.29.355-.273.352-.792.035-1.11-.317-.317-.828-.31-1.196-.053a4.583 4.583 0 0 1-2.634.828c-.98 0-1.887-.306-2.634-.828ZM16.25 9.208a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0ZM8.667 9.208a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0Z" />
    </svg>
  )
}

export default DesktopSvgEmojis
