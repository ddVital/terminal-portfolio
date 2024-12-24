import { Icon } from '../ui/Icon'
import { useTheme } from '../../hooks/useTheme'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        p-2
        rounded-md
        border border-gray-200
        dark:border-gray-700
        transform
        hover:scale-110
        active:scale-95
        hover:bg-gray-100
        dark:hover:bg-gray-800
      `}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <Icon 
        name={theme === 'dark' ? 'sun' : 'moon'} 
        className="w-5 h-5 transition-transform duration-300" 
      />
    </button>
  )
}
