import { useEffect, useState, useRef } from 'react'
import { motion, useTransform } from 'framer-motion'
import { Icon } from '../Icon'

interface CursorProps {
  size?: number
  color?: string
  mixBlendMode?: string
  label?: string
  icon?: string
}

export const Cursor = ({
  size = 10,
  color = '#ffffff',
  mixBlendMode = 'difference',
  label = 'View Project',
  icon = 'arrowTopRight'
}: CursorProps) => {
  // Use refs for direct DOM manipulation for smoother cursor movement
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorBlendRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  
  const [tooltip, setTooltip] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState<string>('top')
  const [isHoveringClickable, setIsHoveringClickable] = useState(false)
  const [isHoveringProject, setIsHoveringProject] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Store the current scale for performance
  const scaleRef = useRef(1)
  const visibilityRef = useRef(1)
  
  const getTooltipStyles = (position: string) => {
    const positions = {
      'top': 'absolute -top-14 -right-14',
      'bottom': 'absolute top-14 -right-14',
      'left': 'absolute top-0 right-8',
      'right': 'absolute top-0 left-8'
    }
    return `${positions[position as keyof typeof positions] || positions.top}`
  }

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 
                 ('ontouchstart' in window) || 
                 (navigator.maxTouchPoints > 0))
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    if (isMobile) return

    let rafId: number
    let lastX = 0
    let lastY = 0
    let targetX = 0
    let targetY = 0

    // Use RAF for smoother animation
    const updateCursorPosition = () => {
      // Apply easing for smoother movement
      const ease = 0.15
      
      // Calculate the distance to move
      const dx = targetX - lastX
      const dy = targetY - lastY
      
      // Update position with easing
      lastX += dx * ease
      lastY += dy * ease
      
      // Calculate scale based on current state
      const scale = scaleRef.current * visibilityRef.current
      
      // Apply transform directly to DOM for better performance
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${lastX}px, ${lastY}px, 0)`
        cursorRef.current.style.opacity = `${visibilityRef.current}`
      }
      
      if (cursorBlendRef.current) {
        cursorBlendRef.current.style.transform = `translate3d(${lastX}px, ${lastY}px, 0) scale(${scale})`
        cursorBlendRef.current.style.opacity = `${visibilityRef.current}`
      }
      
      if (tooltipRef.current) {
        tooltipRef.current.style.transform = `translate3d(${lastX}px, ${lastY}px, 0)`
        tooltipRef.current.style.opacity = `${visibilityRef.current}`
      }
      
      // Continue animation loop
      rafId = requestAnimationFrame(updateCursorPosition)
    }
    
    // Start animation loop
    rafId = requestAnimationFrame(updateCursorPosition)

    const handleMouseMove = (e: MouseEvent) => {
      // Update target position (center cursor on mouse)
      targetX = e.clientX - (size / 2)
      targetY = e.clientY - (size / 2)
    }

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const computedStyle = window.getComputedStyle(target)
      
      const tooltipElement = target.closest('[data-tooltip]')
      const tooltipText = tooltipElement?.getAttribute('data-tooltip') || null
      const tooltipPos = tooltipElement?.getAttribute('data-tooltip-position') || 'top'
      
      setTooltip(tooltipText)
      setTooltipPosition(tooltipPos)

      const isProject = target.closest('.project-card') !== null
      const isClickable = target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        computedStyle.cursor === 'pointer' ||
        target.closest('button') ||
        target.closest('a')

      // Update scale reference for performance
      scaleRef.current = isProject ? 8 : isClickable ? 2 : 1
      
      setIsHoveringProject(isProject)
      setIsHoveringClickable(isClickable)
    }

    // Handle mouse enter/leave for the document
    const handleMouseEnter = () => {
      setIsVisible(true)
      visibilityRef.current = 1
    }
    
    const handleMouseLeave = () => {
      setIsVisible(false)
      visibilityRef.current = 0
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseover', handleHover)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleHover)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isMobile, size])

  // Don't render cursor on mobile devices
  if (isMobile) return null

  return (
    <>
      {/* Tooltip Container - Separated from cursor scaling */}
      <div 
        ref={tooltipRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ 
          transform: `translate3d(0px, 0px, 0)`,
          willChange: 'transform, opacity'
        }}
      >
        {tooltip && (
          <div className={getTooltipStyles(tooltipPosition)}>
            <motion.div 
              initial={{ 
                scale: 0,
                originX: tooltipPosition === 'left' ? 1 : tooltipPosition === 'right' ? 0 : 0.5,
                originY: tooltipPosition === 'top' ? 1 : tooltipPosition === 'bottom' ? 0 : 0.5
              }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 font-medium bg-background-secondary px-3 py-1 rounded-full whitespace-nowrap scale-100"
            >
              <span className='!text-[14px]'>{tooltip}</span>
            </motion.div>
          </div>
        )}
      </div>

      {/* Empty div for cursor positioning without scaling */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ 
          transform: `translate3d(0px, 0px, 0)`,
          willChange: 'transform, opacity'
        }}
      />

      {/* Cursor Circle with mix-blend-difference */}
      <div
        ref={cursorBlendRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ 
          transform: `translate3d(0px, 0px, 0) scale(1)`,
          transformOrigin: 'center center',
          mixBlendMode,
          willChange: 'transform, opacity'
        }}
      >
        <div 
          className="flex items-center justify-center"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            borderRadius: '50%',
          }}
        >
          {isHoveringProject && (
            <div className="flex flex-col items-center justify-center">
              <span className='!text-[4px] block text-background-primary text-center'>{label}</span>
              <Icon name={icon} size={4} className='text-background-primary' />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
