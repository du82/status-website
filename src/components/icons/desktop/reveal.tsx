import type { IconProps } from '@status-im/icons'

const DesktopSvgReveal = (props: IconProps) => {
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
        d="M13 5.2c5.85 0 9.1 6.5 9.1 7.8 0 1.3-3.25 7.8-9.1 7.8S3.9 14.3 3.9 13c0-1.3 3.25-7.8 9.1-7.8Z"
        stroke={props.color}
        strokeWidth={1.69}
      />
      <circle
        cx={13}
        cy={13}
        r={3.25}
        stroke={props.color}
        strokeWidth={1.69}
      />
    </svg>
  )
}

export default DesktopSvgReveal
