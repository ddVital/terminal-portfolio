import { useState, useEffect } from 'react'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'
import { Icon } from '../../ui/Icon'
import { Hamburger } from '../../ui/Icon/animated'
import { Button } from '../../ui/Button/Index'
import { ThemeSwitcher } from '../../ThemeSwitcher'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setIsScrolled(currentScrollPos > 20)
      setPrevScrollPos(currentScrollPos)
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
              <span className="text-2xl font-bold text-accent-primary">DD</span>
            </div>
            
            <DesktopMenu />

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
                icon='Terminal'
                iconPosition='right' 
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

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
