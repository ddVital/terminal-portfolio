import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { ImageGrid } from "../../ImageGrid";
import SocialLink from "../../SocialLinks/Index";
import { forwardRef } from "react";
import { Icon } from "../../ui/Icon";
import LazyShow from "../../LazyShow/LazyShow";
import { Social } from "../../../constants/social";

const Contact = forwardRef<HTMLElement>((props, ref) => {
  const { t } = useTranslation();

  return (
    <section 
      ref={ref}
      id="contact" 
      className="bg-background-primary min-h-screen flex items-center overflow-hidden relative"
    >
      <div
        className="px-4 md:px-0 md:flex md:justify-between md:items-center relative max-w-screen-lg w-full mx-auto"
      >
        <div className="max-w-[650px]">
          <LazyShow y={60} duration={.8}>
            <h6 className="font-semibold md:text-lg flex items-center gap-2">{t("contact.subtitle")} <Icon name="smile" size="28"/> </h6>
            <h1 className="text-5xl font-bold font-archivo my-7 md:text-8xl">{t("contact.title")}</h1>
            <p className="font-poppins text-xs md:text-base max-w-[400px] md:max-w-[550px]">{t("contact.description")}</p>

            <div className="my-8">
              <span className="uppercase block text-xs font-medium text-text-secondary">{t("contact.startAConversation")}</span>
              <a 
                href="mailto:ddvital0@gmail.com"
                className="bg-gradient-primary bg-clip-text text-transparent mt-4 inline-block font-archivo font-semibold md:text-lg"
                data-tooltip={t('contact.email')}
                data-tooltip-position="right"
              >
                ddvital0@gmail.com
              </a>
            </div>
          </LazyShow>
        </div>

        <div 
          className="flex gap-8 md:gap-12 flex-col"
        >
          {Social.map((social, index) => (
            <LazyShow key={social.id} y={index * 20} duration={index * 0.4}>
              <SocialLink
                key={social.id}
                href={social.url}
                label={social.name}
              />
            </LazyShow>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Contact;
