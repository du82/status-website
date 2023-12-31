import type { IconProps } from '@status-im/icons'

const DesktopSvgNotification = (props: IconProps) => {
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
        d="M16.554 20.583c-.364 0-.626.356-.592.718.011.117.017.239.017.366 0 1.504-1.307 2.979-2.98 2.979-1.671 0-2.978-1.475-2.978-2.98 0-.126.006-.248.017-.365.034-.362-.228-.718-.593-.718H5.981c-1.88 0-2.868-2.232-1.603-3.624l1.275-1.402a4.333 4.333 0 0 0 1.063-2.173l1.208-6.948a5.152 5.152 0 0 1 10.152 0l1.208 6.948c.141.81.51 1.564 1.063 2.173l1.275 1.402c1.265 1.392.278 3.624-1.603 3.624h-3.465Zm-4.602.031-.002.001.009-.009.003-.002c0-.002.002-.002.002-.003l-.002.003a.065.065 0 0 1 .046-.02h1.984c.017 0 .034.007.046.02l.022.027c.024.033.066.093.109.18.086.172.185.454.185.856 0 .662-.633 1.354-1.354 1.354-.721 0-1.354-.692-1.354-1.354 0-.402.1-.684.185-.856a1.192 1.192 0 0 1 .13-.207l-.002.002-.002.002-.003.004-.002.002ZM5.58 18.052l1.275-1.402a5.958 5.958 0 0 0 1.462-2.987l1.208-6.949a3.527 3.527 0 0 1 6.95 0l1.208 6.949c.194 1.114.7 2.15 1.462 2.987l1.274 1.402a.542.542 0 0 1-.4.906H5.98a.542.542 0 0 1-.4-.906Z"
      />
    </svg>
  )
}

export default DesktopSvgNotification
