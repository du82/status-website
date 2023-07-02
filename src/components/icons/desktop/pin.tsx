import type { IconProps } from '@status-im/icons'

const DesktopSvgPin = (props: IconProps) => {
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
      <path d="M12.413 6.07c0-.69-.54-1.396-1.207-1.576-.666-.181-1.206.232-1.206.923 0 .69.54 1.396 1.207 1.577.666.18 1.206-.233 1.206-.924Z" />
      <path
        clipRule="evenodd"
        d="M10 1.667a5 5 0 0 0-.988 9.902.443.443 0 0 1 .363.427V17.5a.625.625 0 1 0 1.25 0v-5.504c0-.21.157-.386.363-.427A5.002 5.002 0 0 0 10 1.667Zm-3.75 5a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0Z"
      />
    </svg>
  )
}

export default DesktopSvgPin
