import { useTranslation } from "react-i18next";
import { menuItems } from "./menuItems"

export function DesktopMenu({ activeSection }: { activeSection: string }) {

  const { t, i18n } = useTranslation();

  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-center space-x-6 md:space-x-10">
        {menuItems.map((item) => (
          <a 
            key={item.name}
            href={item.href}
            className={`
              text-sm font-archivo font-bold transition-all duration-500
              ${activeSection === item.sectionId 
                ? 'text-text-primary font-extrabold drop-shadow-md shadow-black' 
                : 'text-text-secondary hover:text-text-primary'
              }
            `}
          >
            {t(item.name)}
          </a>
        ))}
      </div>
    </div>
  )
}
