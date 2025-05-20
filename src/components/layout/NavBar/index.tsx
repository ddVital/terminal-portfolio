import { useState, useEffect } from 'react'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'
import { Icon } from '../../ui/Icon'
import { Hamburger } from '../../ui/Icon/animated'
import { Button } from '../../ui/Button/Index'
import { Logo } from '../../Logo'
import { useTerminalStore } from '../../../store/terminal'
import { menuItems } from './menuItems'
import LanguageSwitcher from '../../LanguageSwitcher'
import { ThemeSwitcher } from '../../ThemeSwitcher'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [activeSection, setActiveSection] = useState('')

  const toggleTerminal = useTerminalStore((state) => state.toggleTerminal)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setIsScrolled(currentScrollPos > 20)
      setPrevScrollPos(currentScrollPos)

      const sections = menuItems.map(item => document.getElementById(item.sectionId))
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        if (!section) return
        
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id)
          console.log(section.id);
          
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <>
      <nav className={`
        fixed top-0 left-1 right-1 md:left-32 md:right-32 rounded-full transition-all duration-300 transform z-[111]
        ${isOpen ? 'border-none shadow-none' : ''}
        ${isVisible ? 'translate-y-4' : '-translate-y-full'}
        ${isScrolled ? 'bg-background-blurred shadow-md backdrop-blur-md md:left-60 md:right-60' : 'bg-transparent border-none'}
      `}>
        <div className="py-1 px-3">
          <div className="flex items-center justify-between h-12">
            <div className="flex-shrink-0">
              <Logo variant='minimal' className={`${isOpen ? 'hidden' : ''} fill-text-primary`} />
            </div>
            
            <DesktopMenu activeSection={activeSection} />

            <div className="flex items-center gap-6">
              <div className={`${isOpen ? 'hidden' : 'flex items-center'}`}>
                <LanguageSwitcher />
              </div>

              <Button
                className={`hidden md:flex ${isOpen ? 'md:hidden' : ''}`}
                variant='primary'
                size='sm'
                onClick={toggleTerminal}
                animated
              >
                Open Terminal
              </Button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-text-primary hover:text-accent-primary p-2 relative md:hidden"
                aria-label="Toggle menu"
              >
                <Hamburger isOpen={isOpen} />
              </button>
            </div>

          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} activeSection={activeSection} />
    </>
  )
}
