import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Icon } from '../Icon'
import './button.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon'
  size?: 'xs' | 'sm' | 'md' | 'lg'
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
    primary: 'bg-text-primary hover:bg-white text-background-primary btn-ripple',
    secondary: 'border border-text-primary btn-ripple',
    ghost: 'bg-gradient-primary text-transparent bg-clip-text hover:text-underline',
    icon: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 btn-ripple',
  }

  const sizes = {
    xs: 'text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <button
      className={`
        inline-flex items-center justify-center
        gap-2
        rounded-full
        font-bold
        transition-all
        duration-400
        ${variants[variant]}
        ${sizes[size]}
        ${loading && 'opacity-75 cursor-wait'}
        ${disabled && 'opacity-50 cursor-not-allowed'}
        hover:shadow-lg
        active:translate-y-0
        active:scale-95
        font-acumin
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
