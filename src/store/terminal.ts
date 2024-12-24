import { create } from 'zustand'

interface TerminalStore {
  isVisible: boolean
  isMinimized: boolean
  toggleTerminal: () => void
  setMinimized: (value: boolean) => void
}

export const useTerminalStore = create<TerminalStore>((set) => ({
  isVisible: false,
  isMinimized: false,
  toggleTerminal: () => set((state) => ({ 
    isVisible: !state.isVisible,
    isMinimized: false 
  })),
  setMinimized: (value) => set({ isMinimized: value })
}))
