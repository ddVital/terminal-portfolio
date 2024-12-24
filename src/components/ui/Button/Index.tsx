import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Icon } from '../Icon'
import './button.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  iconPosition?: 'left' | 'right'
  animated?: boolean
  loading?: boolean
  children: ReactNode
}

export function Button({ 
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  animated = false,
  loading = false,
  children,
  className,
  disabled,
  ...props 
}: ButtonProps) {
  const variants = {
    primary: 'bg-accent-primary hover:bg-accent-secondary text-white',
    secondary: 'bg-background-secondary hover:bg-gray-200 dark:hover:bg-gray-700',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    icon: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
  }

  const sizes = {
    xs: 'text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }

  return (
    <button
      className={`
        btn-ripple
        inline-flex items-center justify-center
        gap-2
        rounded-md
        font-medium
        transition-all
        duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${loading && 'opacity-75 cursor-wait'}
        ${disabled && 'opacity-50 cursor-not-allowed'}
        hover:-translate-y-0.5
        hover:shadow-lg
        active:translate-y-0
        active:scale-95
        disabled:active:scale-100
        disabled:hover:translate-y-0
        disabled:hover:shadow-none
        disabled:hover:bg-inherit
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg 
          className="animate-spin h-5 w-5" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : icon && iconPosition === 'left' ? (
        <Icon 
          name={icon} 
          animated={animated}
          size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} 
        />
      ) : null}
      
      <span>{children}</span>

      {icon && iconPosition === 'right' && !loading && (
        <Icon 
          name={icon} 
          animated={animated}
          size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} 
        />
      )}
    </button>
  )
}
