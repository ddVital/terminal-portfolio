import { menuItems } from "./menuItems"

export function DesktopMenu() {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-center space-x-6 md:space-x-10">
        {menuItems.map((item) => (
          <a 
            key={item.name}
            href={item.href}
            className="text-text-secondary text-sm hover:text-accent-primary transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  )
}
