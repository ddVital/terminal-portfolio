import { useEffect, useState } from 'react'
import { Icon } from '../Icon'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    setIsLeaving(true)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setTimeout(() => {
      setIsLeaving(false)
      setIsVisible(false)
    }, 500)
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed
        bottom-8
        right-8
        p-3
        rounded-xl
        bg-background-secondary
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:bg-accent-secondary
        hover:shadow-xl
        active:scale-95
        group
        overflow-hidden
        ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-0'}
      `}
      aria-label="Scroll to top"
    >
      <Icon 
        name="ArrowUp"
        className={`
          group-hover:animate-bounce
          ${isLeaving ? 'leave-top' : ''}`
        }
      />
    </button>
  )
}
