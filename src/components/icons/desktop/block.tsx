import type { IconProps } from '@status-im/icons'

const DesktopSvgBlock = (props: IconProps) => {
  return (
    <svg
      {...props}
      width={props.width}
      height={props.height}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable={false}
      aria-hidden={true}
    >
      <path
        clipRule="evenodd"
        d="M13.667 26.667c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13Zm-7.971-6.408a.62.62 0 0 1-.94-.057 11 11 0 0 1-2.14-6.535c0-6.103 4.948-11.05 11.05-11.05a11 11 0 0 1 6.536 2.139.62.62 0 0 1 .057.94L5.696 20.259Zm1.379 1.378a.62.62 0 0 0 .056.94 11 11 0 0 0 6.536 2.14c6.102 0 11.05-4.948 11.05-11.05a11 11 0 0 0-2.14-6.536.62.62 0 0 0-.94-.056L7.075 21.638Z"
      />
    </svg>
  )
}

export default DesktopSvgBlock
