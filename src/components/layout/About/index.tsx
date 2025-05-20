import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { ImageGrid } from "../../ImageGrid";
import { BentoGrid } from "../../ui/BentoGrid/BentoGrid";
import ScrollVideo from "../../ui/ScrollVideo/Index";
import me from '../../../assets/images/explore.mp4'

export default function About() {
  const { t } = useTranslation();

  return (
    <section 
      id="about" 
      className="relative bg-background-primary py-20"
    >
      <div
        className="px-4 md:flex md:justify-between md:items-center relative w-full mx-auto md:px-0"
      >
        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Enhanced ScrollVideo component with proper scroll height */}
          <ScrollVideo 
            src={me}
            className="w-full h-[100dvh]" 
            threshold={0.1}
            scrollHeight="200vh" // Adjust this value to control how fast the video plays
          />

          <div className="md:mt-[100vh] md:px-8">
            <h1 className='text-6xl font-archivo font-bold mb-4 max-w-[400px]'>
              {t('about.title')} <span className='text-text-secondary'>{t('about.subtitle')}</span>
            </h1>
            <p className='font-poppins text-base'>
              {t('about.desc_1')}
            </p>
            <p className='font-poppins text-base my-3'>
              {t('about.desc_1')}
            </p>
            <p className='font-poppins text-base'>
              {t('about.desc_2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
