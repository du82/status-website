import type { IconProps } from '@status-im/icons'

const DesktopSvgUnblock = (props: IconProps) => {
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
      <path d="M18.2 13.975a.975.975 0 1 0 0-1.95H7.8a.975.975 0 1 0 0 1.95h10.4Z" />
      <path
        clipRule="evenodd"
        d="M26 13c0 7.18-5.82 13-13 13S0 20.18 0 13 5.82 0 13 0s13 5.82 13 13Zm-1.95 0c0 6.103-4.947 11.05-11.05 11.05-6.103 0-11.05-4.947-11.05-11.05C1.95 6.897 6.897 1.95 13 1.95c6.103 0 11.05 4.947 11.05 11.05Z"
      />
    </svg>
  )
}

export default DesktopSvgUnblock
