import { SVGProps } from 'react'

export function Terminal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className="w-5 h-5 group"
      fill="none" 
      stroke="currentColor"
      {...props}
    >
      {/* Terminal Window */}
      <rect 
        className="transition-transform duration-300 group-hover:scale-[1.02]" 
        x="2" 
        y="4" 
        width="20" 
        height="16" 
        rx="2"
      />
      
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
          dur="1.8s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}
