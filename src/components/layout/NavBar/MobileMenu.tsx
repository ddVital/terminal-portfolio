import { useEffect } from "react"
import { menuItems } from "./menuItems"
import { useTranslation } from "react-i18next"

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  activeSection: string
}

export function MobileMenu({ isOpen, setIsOpen, activeSection }: MobileMenuProps) {

  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <div className={`
        md:hidden
        fixed
        inset-0
        bg-background-secondary
        backdrop-blur-md
        transition-all 
        duration-500 
        ease-in-out
        transform
        px-6
        z-[110]
        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full'}
        flex
        items-center
        justify-left
      `}>
        <div className="flex flex-col items-left space-y-8">
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`
                text-4xl
                font-medium 
                hover:text-accent-primary 
                transition-all
                duration-500
                transform
                ${activeSection === item.sectionId ? 'text-accent-primary' : 'text-text-primary'}
                ${isOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
                }
              `}
              style={{ 
                transitionDelay: isOpen ? `${index * 250}ms` : '0ms'
              }}
              onClick={() => setIsOpen(false)}
            >
             {t(item.name)}
           </a>
          ))}
        </div>
      </div>
    </>
  )
}
