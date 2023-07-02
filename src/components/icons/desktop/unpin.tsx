import type { IconProps } from '@status-im/icons'

const DesktopSvgUnpin = (props: IconProps) => {
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
        d="M2.809 1.642a.625.625 0 1 0-.884.884l3.013 3.008c.098.098.14.24.119.377a5.002 5.002 0 0 0 3.955 5.658.443.443 0 0 1 .363.427V17.5a.625.625 0 1 0 1.25 0v-5.504c0-.13.06-.248.156-.328.109-.09.262-.038.362.062l5.785 5.776a.625.625 0 0 0 .883-.884l-5.517-5.51v-.004l-.942-.94c0-.001-.002-.002-.003-.001h-.003l-4.847-4.84-.001-.004V5.32l-.943-.941h-.004L2.809 1.643Zm6.252 8.01c.27.269.068.683-.292.558a3.76 3.76 0 0 1-2.31-2.307c-.126-.36.288-.562.558-.293L9.06 9.652Z"
      />
      <path d="M13.75 6.667c0 .891-.311 1.71-.83 2.354a.455.455 0 0 0 .015.607l.294.294a.391.391 0 0 0 .576-.011A5 5 0 0 0 6.75 2.867a.391.391 0 0 0-.01.575l.294.294c.164.164.428.16.607.015a3.75 3.75 0 0 1 6.109 2.915Z" />
      <path d="M12.413 6.07c0-.69-.54-1.396-1.206-1.576-.667-.181-1.207.232-1.207.923 0 .69.54 1.396 1.207 1.577.666.18 1.206-.233 1.206-.924Z" />
    </svg>
  )
}

export default DesktopSvgUnpin
