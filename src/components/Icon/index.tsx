import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  path: string
  size?: number
}

export function Icon({ path, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d={path} />
    </svg>
  )
}
