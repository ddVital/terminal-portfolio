import Terminal from 'react-console-emulator'
import Draggable from 'react-draggable'
import { useState, useRef } from 'react'
import { useTerminalStore } from '../../store/terminal'

export function Console() {
  const { isVisible, isMinimized, setMinimized } = useTerminalStore()
  const [isMaximized, setIsMaximized] = useState(false)
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const [isDragging, setIsDragging] = useState(false)
  const dragBounds = useRef<HTMLDivElement>(null)

  const handleMaximize = () => {
    if (!isMaximized) {
      // Store current position before maximizing
      setPosition({ x: dragBounds.current?.getBoundingClientRect().left || 50, y: dragBounds.current?.getBoundingClientRect().top || 50 })
    }
    setIsMaximized(prev => !prev)
  }

  const handleClose = () => {
    const terminal = dragBounds.current
    if (terminal) {
      terminal.style.transform = 'scale(0.95) translateY(10px)'
      terminal.style.opacity = '0'
    }
  }

  const handleMinimize = () => {
    const terminal = dragBounds.current
    if (terminal) {
      terminal.style.transform = 'scale(0.8) translateY(100%)'
      terminal.style.opacity = '0'
      setTimeout(() => setMinimized(true), 150)
    }
  }

  const commands = {
    exit: {
      description: 'Close the terminal',
      usage: 'exit',
      fn: () => {
        return 'Terminal closed'
      }
    }
  }

  if (!isVisible) return null

  return (
    <div
      ref={dragBounds}
      className={`
        fixed inset-0 
        pointer-events-none 
        transition-all duration-150
        z-[99999]
        ${isMinimized ? 'invisible' : 'visible'}
      `}
    >
      <Draggable 
        handle=".terminal-header" 
        disabled={isMaximized}
        bounds="parent"
        position={isMaximized ? { x: 0, y: 0 } : position}
        onStart={() => setIsDragging(true)}
        onStop={(_, data) => {
          setIsDragging(false)
          if (!isMaximized) {
            setPosition({ x: data.x, y: data.y })
          }
        }}     
      >
        <div className={`
          pointer-events-auto
          absolute
          origin-top-left
          ${isMaximized ? 'w-full h-full scale-100' : 'w-[600px] h-[400px]'}
          ${isMinimized ? 'h-8' : isMaximized ? 'h-screen' : 'h-[400px]'}
          bg-background-primary 
          rounded-lg 
          shadow-xl 
          overflow-hidden
          border border-gray-200 
          dark:border-gray-700
          ${!isDragging ? 'transition-[width,height,opacity,transform] duration-300' : ''}
        `}>
          {/* Terminal Header */}
          <div className="terminal-header h-8 bg-gray-100 dark:bg-gray-800 flex items-center px-4 gap-2 cursor-move" onDoubleClick={handleMaximize}>
            <div className="flex gap-2">
              <button
                className="w-3 h-3 rounded-full bg-red-500"
                onClick={() => handleClose()}
              />
              <button 
                className="w-3 h-3 rounded-full bg-yellow-500"
                onClick={() => handleMinimize()}
              />
              <button
                className="w-3 h-3 rounded-full bg-green-500"
                onClick={() => setIsMaximized(prev => !prev)}
              />
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 flex-1 text-center">
              Terminal
            </span>
          </div>

          {/* Terminal Content */}
          {!isMinimized && (
            <Terminal
              commands={commands}
              welcomeMessage="Welcome to my portfolio terminal! Type 'help' for available commands."
              promptLabel="➜"
              style={{
                height: isMaximized ? 'calc(100vh - 32px)' : '368px',
                backgroundColor: 'bg-primary',
                overflow: 'auto',
              }}
              className="p-4"
            />
          )}

        </div>
      </Draggable>
    </div>
  )
}
