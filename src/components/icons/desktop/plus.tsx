import type { IconProps } from '@status-im/icons'

const DesktopSvgPlus = (props: IconProps) => {
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
      <path d="M13 7.854c.449 0 .812.364.812.813v2.979c0 .299.243.541.542.541h2.98a.812.812 0 1 1 0 1.626h-2.98c-.3 0-.542.242-.542.541v2.98a.813.813 0 0 1-1.625 0v-2.98c0-.299-.242-.541-.541-.541h-2.98a.813.813 0 0 1 0-1.626h2.98c.299 0 .541-.242.541-.541v-2.98c0-.448.364-.812.813-.812Z" />
      <path
        clipRule="evenodd"
        d="M13 23.833c5.983 0 10.833-4.85 10.833-10.833 0-5.983-4.85-10.833-10.833-10.833C7.017 2.167 2.167 7.017 2.167 13c0 5.983 4.85 10.833 10.833 10.833Zm0-1.625a9.208 9.208 0 1 0 0-18.416 9.208 9.208 0 0 0 0 18.416Z"
      />
    </svg>
  )
}

export default DesktopSvgPlus
