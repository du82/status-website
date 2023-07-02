import type { IconProps } from '@status-im/icons'

const DesktopSvgEdit = (props: IconProps) => {
  return (
    <svg
      {...props}
      width={props.width}
      height={props.height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable={false}
      aria-hidden={true}
    >
      <path
        clipRule="evenodd"
        d="M13.49 2.705a2.691 2.691 0 0 1 3.805 3.806l-9.793 9.793a2.962 2.962 0 0 1-1.281.753L2.715 18.06a.626.626 0 0 1-.774-.774l1.001-3.506c.139-.484.398-.925.754-1.281l9.793-9.793Zm2.92.885a1.439 1.439 0 0 0-2.035 0l-9.793 9.793a1.71 1.71 0 0 0-.436.74 1.4 1.4 0 0 0 1.731 1.73c.28-.08.534-.23.74-.435l9.793-9.793a1.439 1.439 0 0 0 0-2.035Z"
      />
    </svg>
  )
}

export default DesktopSvgEdit
