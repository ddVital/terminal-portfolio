import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'system'
    }
    return 'system'
  })

  const handleThemeChange = (newTheme: Theme) => {
    const root = window.document.documentElement
    const isDark = newTheme === 'dark' || 
      (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

    // Add transition class before changing theme
    // root.classList.add('transition-colors', 'duration-300')
    root.classList.remove('light', 'dark')
    root.classList.add(isDark ? 'dark' : 'light')
    root.setAttribute('data-theme', isDark ? 'dark' : 'light')

    setTheme(newTheme)
    if (newTheme === 'system') {
      localStorage.removeItem('theme')
    } else {
      localStorage.setItem('theme', newTheme)
    }

    // Remove transition class after animation
    setTimeout(() => {
      // root.classList.remove('transition-colors', 'duration-300')
    }, 300)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        handleThemeChange('system')
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    handleThemeChange(theme)

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [theme])

  return { theme, setTheme: handleThemeChange }
}
