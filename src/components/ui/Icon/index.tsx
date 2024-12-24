import { SVGProps } from 'react'
import * as AnimatedIcons from './animated'
import { iconPaths } from './paths'

type StaticIconName = keyof typeof iconPaths
type AnimatedIconName = 'Terminal'

interface IconProps extends SVGProps<SVGSVGElement> {
  name: StaticIconName | AnimatedIconName
  size?: number
  animated?: boolean
}

export function Icon({ name, size = 24, animated = false, ...props }: IconProps) {
  // For animated icons
  if (animated) {
    const AnimatedIcon = AnimatedIcons[name as AnimatedIconName]
    if (!AnimatedIcon) {
      console.warn(`Animated icon "${name}" not found`)
      return null
    }
    return <AnimatedIcon {...props} />
  }

  // For static icons
  const path = iconPaths[name as StaticIconName]
  if (!path) {
    console.warn(`Static icon "${name}" not found`)
    return null
  }

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
