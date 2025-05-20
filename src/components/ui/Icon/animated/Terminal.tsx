import { SVGProps } from 'react'

export function Terminal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className="w-8 h-8 md:w-6 md:h-6 group"
      fill="none" 
      stroke="currentColor"
      {...props}
    > 
      {/* Command Prompt */}
      <path 
        className="transition-all duration-300 group-hover:translate-x-0.5" 
        d="M6 8l4 4-4 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="stroke"
          values="currentColor;#3b82f6;currentColor"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>

      {/* Blinking Cursor */}
      <path 
        d="M12 16h6"
        strokeLinecap="round"
      >
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.4s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}
