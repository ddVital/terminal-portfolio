import { useState, useEffect } from 'react'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'
import { Icon } from '../../ui/Icon'
import { Hamburger } from '../../ui/Icon/animated'
import { Button } from '../../ui/Button/Index'
import { ThemeSwitcher } from '../../ThemeSwitcher'
import { Logo } from '../../Logo'
import { useTerminalStore } from '../../../store/terminal'
import { menuItems } from './menuItems'

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
        fixed top-0 w-full border-b border-b-background-tertiary transition-all duration-300 transform z-[111]
        ${isOpen ? 'border-none shadow-none' : ''}
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${isScrolled ? 'bg-background-primary/80 shadow-md backdrop-blur-md' : 'bg-transparent border-none'}
      `}>
        <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex-shrink-0">
              <Logo variant='default' className={`${isOpen ? 'hidden' : ''}`} />
            </div>
            
            <DesktopMenu activeSection={activeSection} />

            <div className="flex items-center gap-6">
              <div className={`${isOpen ? 'hidden' : 'flex items-center'}`}>
                <ThemeSwitcher />
              </div>

              <Button className={`md:hidden ${isOpen ? 'hidden' : ''}`} variant='icon' size='xs'>
                <Icon name='Terminal' animated/>
              </Button>


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
