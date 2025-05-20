// import React from 'react';
// import { motion } from 'framer-motion';
// // import './BentoGrid.css';

// interface BentoItemProps {
//   title: string;
//   description?: string;
//   image?: string;
//   className?: string;
// }

// export const BentoItem: React.FC<BentoItemProps> = ({ title, description, image, className }) => {
//   return (
//     <div className={`bento-item ${className || ''}`}>
//       {image && <img src={image} alt={title} className="bento-item-image" />}
//       <div className="bento-item-content">
//         <h3>{title}</h3>
//         {description && <p>{description}</p>}
//       </div>
//     </div>
//   );
// };

// interface BentoGridProps {
//   items: BentoItemProps[];
// }

// export const BentoGrid: React.FC<BentoGridProps> = ({ items }) => {
//   return (
//     <div className="bento-grid w-full h-full md:max-h-[600px]">
//       <div className="grid grid-cols-3 md:grid-cols-6 grid-rows-3 md:grid-rows-3 gap-2 md:gap-2 m-4">
//         <div className="hidden md:block md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-3 bg-background-secondary rounded-md p-10 text-text-primary">
//           <h1 className='text-4xl font-acumin font-bold mb-4'>ABout me</h1>
//           <p className='font-poppins text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur non odio cum magni quam, reiciendis sed nesciunt nobis, quas, adipisci exercitationem ad doloribus inventore. Nobis ex earum odit natus. Nam.</p>
//           <p className='font-poppins text-sm my-2'>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur non odio cum magni quam, reiciendis sed nesciunt nobis, quas, adipisci exercitationem ad doloribus inventore. Nobis ex earum odit natus. Nam.
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur non odio cum magni quam, reiciendis sed nesciunt nobis, quas, adipisci exercitationem ad doloribus inventore. Nobis ex earum odit natus. Nam.
//           </p>
//           <p className='font-poppins text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur non odio cum magni quam, reiciendis sed nesciunt nobis, quas, adipisci exercitationem ad doloribus inventore. Nobis ex earum odit natus. Nam.</p>
//         </div>
//         <motion.div 
//           className="hidden md:flex items-center justify-center md:col-start-3 md:row-start-3 md:col-span-3 md:row-span-1 bg-background-secondary rounded-md p-4 text-text-primary"
//           whileHover="hover"
//           initial="initial"
//         >
//           <motion.h1 
//             className='text-5xl font-acumin font-bold'
//             variants={{
//               initial: { scale: 1 },
//               hover: {
//                 scale: 1.05,
//                 background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
//                 backgroundClip: "text",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 transition: {
//                   duration: 0.3,
//                   ease: "easeOut"
//                 }
//               }
//             }}
//           >
//             +7 years of experience
//           </motion.h1>
//         </motion.div>

//         <motion.div 
//             className="hidden md:flex items-center justify-between md:col-start-4 md:row-start-1 md:col-span-2 md:row-span-1 bg-background-secondary rounded-md p-10 text-text-primary overflow-hidden relative"
//             whileHover="hover"
//             initial="initial"
//           >
//             {/* Static binary background with hover animation */}
//             <motion.div
//               className="absolute inset-0"
//               initial={{ opacity: 0.3 }}
//             >
//               {[...Array(30)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="absolute text-base font-mono font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
//                   initial={{ 
//                     top: `${Math.random() * 100}%`,
//                     left: `${Math.random() * 100}%`,
//                     opacity: 1,
//                     backgroundSize: '200% 200%'
//                   }}
//                   variants={{
//                     hover: {
//                       top: ['0%', '100%'],
//                       opacity: [0.9, 0.8, 1.3],
//                       backgroundPosition: ['0% 50%', '100% 50%'],
//                       transition: {
//                         duration: 2,
//                         repeat: Infinity,
//                         delay: i * 0.1,
//                         ease: "linear"
//                       }
//                     }
//                   }}
//                 >
//                   {Math.random() > 0.5 ? '1' : '0'}
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Content with hover animations */}
//             <motion.h6 
//               className='font-poppins font-semibold text-3xl max-w-[200px] z-10'
//               variants={{
//                 initial: { x: 0 },
//                 hover: { x: -10 }
//               }}
//             >
//               My Current Obsession
//             </motion.h6>

//             <motion.h1 
//               className='text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 z-10'
//               variants={{
//                 initial: { scale: 1 },
//                 hover: { 
//                   scale: 1.2,
//                   transition: { type: "spring", stiffness: 400 }
//                 }
//               }}
//             >
//               AI
//             </motion.h1>
//           </motion.div>

//         <div className="hidden md:block md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-1 bg-background-secondary rounded-md p-4 text-text-primary">
//           <span className='uppecase text-xs font-poppins text-text-secondary'>EST</span>
//           <h4 className='font-poppins font-semibold text-6xl'>2003</h4>

//           <div>
//             <span className='uppercase text-xs font-poppins text-text-secondary'>Currently living in</span>
//             <p className='text font-poppins font-semibold'>São Paulo, Brazil</p>
//           </div>
//         </div>
//         <div className="hidden md:block md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-1 bg-background-secondary rounded-md p-10 text-text-primary">4</div>
//         <motion.div 
//           className="hidden md:block md:col-start-4 md:row-start-2 md:col-span-1 md:row-span-1 rounded-md overflow-hidden relative"
//           whileHover="hover"
//           initial="initial"
//         >
//           <motion.div
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//             style={{ 
//               backgroundImage: `url('https://s2-ge.glbimg.com/Q5r-18rEfKYvggpQM96jiPQ2jGs=/0x0:4096x2951/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/Z/r/bSF1YARTiZhBEmZj81Xg/fumy0pgwaamohfn.jpg')`
//             }}
//             variants={{
//               initial: { scale: 1 },
//               hover: { 
//                 scale: 1.2,
//                 transition: { duration: 0.3 }
//               }
//             }}
//           />
//         </motion.div>
//         <motion.div 
//           className="hidden md:block md:col-start-5 md:row-start-2 md:col-span-1 md:row-span-1 bg-background-secondary rounded-md p-4 text-text-primary overflow-hidden relative"
//           whileHover="hover"
//           initial="initial"
//           animate="animate"
//         >
//           <h6 className="font-poppins text-lg font-semibold uppercase z-20 block">
//             Currently
//             Reading
//           </h6>

//           <motion.img 
//             src="https://lh6.googleusercontent.com/proxy/Rk8KVD6ohyB-0WM23-p01pUyqTDRhtt_v9eYQEqkKW-G507kX1N6ybb8mGNuntLdyXOK_4kqwFmaGs-O8v7jZ7g" 
//             alt="Currently reading book" 
//             className="absolute w-32 h-32 object-cover z-10"
//             variants={{
//               initial: { bottom: "-20%", right: "-20%" },
//               hover: { 
//                 bottom: 0,
//                 right: 0,
//                 transition: {
//                   type: "spring",
//                   stiffness: 400,
//                   damping: 10
//                 }
//               },
//               animate: {
//                 transition: {
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }
//               }
//             }}
//           />
//         </motion.div>
//         <div className="hidden md:block md:col-start-6 md:row-start-1 md:col-span-1 md:row-span-2 bg-background-secondary rounded-md p-10 text-text-primary">8</div>
//         <motion.div 
//   className="hidden md:block md:col-start-6 md:row-start-3 md:col-span-1 md:row-span-1 bg-background-secondary rounded-md p-4 text-text-primary overflow-hidden relative"
//   whileHover="hover"
//   initial="initial"
// >
//   {/* Floating stars background */}
//   {[...Array(15)].map((_, i) => (
//     <motion.div
//       key={i}
//       className="absolute text-yellow-400 text-lg"
//       initial={{ 
//         top: `${Math.random() * 100}%`,
//         left: `${Math.random() * 100}%`,
//         opacity: 0
//       }}
//       variants={{
//         hover: {
//           opacity: [0, 1, 0],
//           scale: [0.5, 1.5, 0.5],
//           y: [-20, 20],
//           transition: {
//             duration: 1.5,
//             repeat: Infinity,
//             delay: i * 0.1
//           }
//         }
//       }}
//     >
//       ⭐
//     </motion.div>
//   ))}

//   <motion.div
//     className="relative z-10"
//     variants={{
//       hover: {
//         y: -5,
//         transition: {
//           duration: 0.2
//         }
//       }
//     }}
//   >
//     <span className="text-sm text-text-secondary font-poppins">Achievement</span>
//     <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_100%]"
//       style={{
//         backgroundSize: '200% 100%',
//         animation: 'shimmer 4s linear infinite'
//       }}
//     >
//       +300 stars on github.
//     </h1>
//   </motion.div>
// </motion.div>


        
//       </div>
//     </div>
//   );
// };
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../Button/Index';
import meetingSlot from '../../../assets/images/calendly/slot.png'
import { Menubar } from './Menubar';
import { Gallery } from './Gallery';
import { galleryItems } from '../../../constants/gallery';
import { CurrentlyLearning } from './MediumStories';
import { t } from 'i18next';
// import './BentoGrid.css';

interface BentoItemProps {
  title: string;
  description?: string;
  image?: string;
  className?: string;
}

export const BentoItem: React.FC<BentoItemProps> = ({ title, description, image, className }) => {
  return (
    <div className={`bento-item ${className || ''}`}>
      {image && <img src={image} alt={title} className="bento-item-image" />}
      <div className="bento-item-content">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

interface BentoGridProps {
  items: BentoItemProps[];
}

export const BentoGrid: React.FC<BentoGridProps> = ({ items }) => {
  return (
    <div className="bento-grid w-full h-full lg:max-h-[600px]">
      <div className="flex flex-col lg:grid grid-cols-5 grid-rows-5 gap-4 h-svh lg:max-h-[600px]">
          <div className="col-span-2 row-span-5 rounded-3xl bg-background-secondary p-5 text-text-primary">
            <h1 className='text-4xl font-archivo font-bold mb-4 max-w-[400px]'>
              {t('about.title')} <span className='text-text-secondary'>{t('about.subtitle')}</span>
            </h1>
            <p className='font-poppins text-base'>
              {t('about.desc_1')}
            </p>
            <p className='font-poppins text-base my-3'>
              {t('about.desc_2')}
            </p>
          </div>
          <div className="col-span-2 row-span-2 col-start-3 rounded-3xl bg-background-secondary px-4 py-4 text-text-primary overflow-hidden relative">2
          </div>
          <motion.div 
            className="row-span-2 col-start-3 row-start-3 rounded-3xl bg-background-secondary px-4 py-3 text-text-primary overflow-hidden relative flex flex-col justify-between"
            whileHover="hover"
            initial="initial"
            animate="animate"
          >
            <h6 className="font-archivo text-lg font-bold z-20 block">
              {t('about.meeting.title')} <span className='text-text-secondary'>{t('about.meeting.subtitle')}</span>
            </h6>

            <div className='relative h-40'>
              {[0, 1, 2].map((index) => (
                <motion.img 
                  key={index}
                  src={meetingSlot} 
                  alt={`Meeting slot ${index + 1}`}
                  className="absolute object-cover rounded-lg shadow-md origin-bottom-right"
                  style={{ 
                    width: '90%', 
                    left: '5%',
                    zIndex: 10 - index 
                  }}
                  variants={{
                    initial: { 
                      rotate: index * -2,
                      y: index * 4,
                      x: index * -4,
                      scale: 1 - (index * 0.05)
                    },
                    hover: { 
                      rotate: index * -5,
                      y: index * 10,
                      x: index * -10,
                      scale: 1.05 - (index * 0.05),
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: index * 0.05
                      }
                    },
                    animate: {
                      y: [index * 4, index * 4 + 2, index * 4],
                      transition: {
                        y: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }
                      }
                    }
                  }}
                />
              ))}
            </div>

            <div className='relative z-50'>
              <Button variant='secondary' icon='arrowTopRight' size="sm" className='!gap-0 !p-2' />
            </div>
          </motion.div>
          <div className="col-start-3 row-start-5 rounded-3xl bg-background-secondary p-4 text-text-primary overflow-hidden relative">
            <h4 className='text-xl font-acumin font-bold mb-4'>
              {t('about.languages.title')} <span className='text-text-secondary'>{t('about.languages.subtitle')}</span>
            </h4>
            <span className='text-2xl'>🇧🇷 🇺🇸 🇩🇪</span>
          </div>
          <motion.div 
            className="row-span-2 col-start-4 row-start-4 rounded-3xl bg-background-secondary p-5 text-text-primary overflow-hidden relative"
            whileHover="hover"
            initial="initial"
            animate="animate"
          >
            <h6 className="font-archivo text-xl font-bold z-20 block">
              {t('about.reading.title')} <span className='text-text-secondary'>{t('about.reading.subtitle')}</span>
            </h6>

            <motion.img 
              src="https://miro.medium.com/v2/resize:fit:800/1*NL5eL1fIf7ZixsWj7lEG1A.png" 
              alt="Currently reading book" 
              className="absolute w-44 h-44 object-cover z-10"
              variants={{
                initial: { bottom: "-20%", right: "-20%" },
                hover: { 
                  bottom: "-8%",
                  right: "-10%",
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }
                },
                animate: {
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }
              }}
            />
          </motion.div>
          <div className="col-start-4 row-start-3 rounded-3xl  bg-background-secondary p-4 text-text-primary overflow-hidden relative">
            <h4 className='font-archivo text-text-secondary text-sm font-bold'>{t('about.since.title')}</h4>
            <h1 className="font-archivo text-6xl font-bold">2003</h1>
          </div>
          <div className="row-span-3 col-start-5 row-start-3 rounded-3xl bg-background-secondary relative">
              <Gallery items={galleryItems}/>
          </div>
          <div className="row-span-2 col-start-5 row-start-1 rounded-3xl bg-background-secondary p-4 text-text-primary overflow-hidden relative">
            <h6 className="font-archivo text-lg font-bold z-20 block">
              {t('about.education.title')} <span className='text-text-secondary'>{t('about.education.subtitle')}</span>
            </h6>
            <h1 className='font-archivo font-bold text-6xl text-yellow-400 mt-4'>UTFPR</h1>
            <Button variant='secondary' icon='arrowTopRight' size="sm" className='!gap-0 !p-2 absolute bottom-4 left-4'/>
          </div>
      </div>
    </div>
  );
};