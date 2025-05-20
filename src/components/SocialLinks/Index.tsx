import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Icon } from "../ui/Icon";

interface SocialLinkProps {
  href: string;
  label: string;
}

export default function SocialLink({ href, label }: SocialLinkProps) {
  const { t } = useTranslation();

  return (
    <a 
      href={href}
      target="_blank"
      className="text-text-primary flex items-end text-4xl md:text-5xl font-semibold group relative"
    >
      <span className="relative after:absolute after:bg-text-primary after:bottom-0 after:left-0 after:h-[2px] md:after:h-[4px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out group-hover:after:scale-x-100">
        {label}
      </span>
      <div className="transform transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">
        <Icon name="arrowTopRight" size={34} className="ml-4" />
      </div>
    </a>
  );
}
