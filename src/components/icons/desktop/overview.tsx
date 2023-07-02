import type { IconProps } from '@status-im/icons'

const DesktopSvgOverview = (props: IconProps) => {
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
        d="M17.333 13a4.333 4.333 0 1 1-8.666 0 4.333 4.333 0 0 1 8.666 0Zm-1.625 0a2.708 2.708 0 1 1-5.416 0 2.708 2.708 0 0 1 5.416 0Z"
      />
      <path
        clipRule="evenodd"
        d="M2.493 13.524c1.12 1.715 5.05 7.06 10.507 7.06s9.386-5.345 10.507-7.06a.95.95 0 0 0 0-1.047c-1.12-1.716-5.05-7.06-10.507-7.06-5.456 0-9.386 5.344-10.507 7.06a.95.95 0 0 0 0 1.047ZM13 18.958c-2.185 0-4.167-1.073-5.82-2.494a17.69 17.69 0 0 1-2.184-2.267 1.897 1.897 0 0 1 0-2.394A17.698 17.698 0 0 1 7.18 9.536c1.653-1.42 3.635-2.494 5.82-2.494 2.185 0 4.167 1.074 5.82 2.494.87.747 1.607 1.555 2.184 2.267.567.7.567 1.694 0 2.394a17.69 17.69 0 0 1-2.184 2.267c-1.653 1.42-3.635 2.494-5.82 2.494Z"
      />
    </svg>
  )
}

export default DesktopSvgOverview
