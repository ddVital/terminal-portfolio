import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Console } from './components/Terminal';
import { useTerminalStore } from './store/terminal';
import { Button } from './components/ui/Button/Index';
import { ScrollToTop } from './components/ui/ScrollTop';
import { Navbar } from './components/layout/NavBar';
import Hero from './components/layout/Hero';
import About from './components/layout/About';
import { Projects } from './components/layout/Project/Index';
import { Canvas } from '@react-three/fiber';
import { Background } from './components/canvas/Background';
import Contact from './components/layout/Contact';
import Quote from './components/layout/Quote/Quote';
import { Cursor } from './components/ui/Cursor/Index';
import { Experience } from './components/layout/Experience/Index';
import { LoadingScreen } from './components/ui/LoadingScreen/LoadingScreen';
import { ScrollContainer } from './components/ScrollContainer/ScrollContainer';
import { useTheme } from './hooks/useTheme';
import { useContactInView } from './hooks/useContactInView';

function App() {
  const toggleTerminal = useTerminalStore((state) => state.toggleTerminal)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  const { theme, setTheme } = useTheme();
  const isContactInView = useContactInView();
  const contactRef = useRef(null);

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Change theme based on contact section visibility
  useEffect(() => {
    if (isContactInView) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [isContactInView, setTheme]);

  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const [backgroundColors, setBackgroundColors] = useState({
    color1: "vec3(0.34, 0.0, 0.66)",
    color2: "vec3(0.24, 0.36, 0.89)", 
    color3: "vec3(0.11, 0.16, 0.73)"
  })

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div className="fixed inset-0 w-screen h-screen">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Background mousePosition={mousePosition} colors={backgroundColors} />
        </Canvas>
      </div>

      <ScrollContainer>
          <Navbar />
          <main className="relative z-10 bg-gradient-to-t from-black/95 via-black/10 to-black/0 text-text-primary">
            <Hero />
          </main>
          <Projects />
          <Quote />
          <Experience />
          <About />
          <Contact ref={contactRef} />
      </ScrollContainer>
      
      {/* <ScrollToTop /> */}
      <Cursor mixBlendMode='difference' />
      <Console />
    </>
  )
}

export default App
