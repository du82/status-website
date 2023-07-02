import type { IconProps } from '@status-im/icons'

const DesktopSvgImage = (props: IconProps) => {
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
        d="M20.042 10.292a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Zm-1.625 0a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0Z"
      />
      <path
        clipRule="evenodd"
        d="M6.5 3.25a4.333 4.333 0 0 0-4.333 4.333v10.834A4.333 4.333 0 0 0 6.5 22.75h13a4.333 4.333 0 0 0 4.333-4.333V7.583A4.333 4.333 0 0 0 19.5 3.25h-13Zm13 1.625h-13a2.708 2.708 0 0 0-2.708 2.708v3.502c0 .482.583.724.924.383l1.527-1.526c.74-.74 1.94-.74 2.68 0l10.922 10.92a.485.485 0 0 0 .489.132 2.71 2.71 0 0 0 1.874-2.577V7.583A2.708 2.708 0 0 0 19.5 4.875ZM3.825 14.658a.108.108 0 0 0-.033.076v3.683A2.708 2.708 0 0 0 6.5 21.125h10.002a.542.542 0 0 0 .383-.925l-9.11-9.11a.27.27 0 0 0-.383 0l-3.567 3.568Z"
      />
    </svg>
  )
}

export default DesktopSvgImage
