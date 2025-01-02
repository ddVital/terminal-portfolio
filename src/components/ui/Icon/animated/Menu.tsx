interface HamburgerProps {
  isOpen: boolean
}

export function Hamburger({ isOpen }: HamburgerProps) {
  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center z-[100]">
      <span className={`
        block w-6 h-0.5 bg-text-secondary
        transition-all duration-300 ease-out
        ${isOpen 
          ? 'rotate-45 translate-y-0.5' 
          : '-translate-y-1'
        }
      `} />
      <span className={`
        block w-6 h-0.5 bg-text-secondary
        transition-all duration-300 ease-out
        ${isOpen 
          ? '-rotate-45 -translate-y-0' 
          : 'translate-y-1'
        }
      `} />
    </div>
  )
}
