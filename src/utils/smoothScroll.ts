import Lenis from '@studio-freight/lenis'

export const initSmoothScroll = () => {
  const lenis = new Lenis({
    duration: 2.8,           // Increased from 1.2 for smoother transitions
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,       // Enable smooth wheel scrolling
    wheelMultiplier: 0.8,    // Reduced for more controlled wheel scrolling
    smoothTouch: true,       // Enable smooth touch scrolling for mobile
    touchMultiplier: 1.5,    // Adjusted from 2 for better touch control
    infinite: false,         // Keep standard scrolling boundaries
    lerp: 0.1                // Linear interpolation factor - lower = smoother
  })

  // Sync lenis scroll with RAF
  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  // Start the animation frame
  requestAnimationFrame(raf)

  // Add scroll listener for components that need scroll position
  lenis.on('scroll', ({ scroll, limit, progress, velocity }) => {
    window.dispatchEvent(new CustomEvent('scrollUpdate', { 
      detail: { scroll, limit, progress, velocity } 
    }))
  })

  return {
    lenis,
    destroy: () => {
      if (lenis) lenis.destroy()
    }
  }
}
