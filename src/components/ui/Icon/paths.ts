export const iconPaths = {
  ArrowUp: "M12 19V5m0 0l-7 7m7-7l7 7",
  arrowRight: "M5 12h14M12 5l7 7-7 7",
  sun: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42",
  moon: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
  monitor: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3M8 21h8M12 3v18"
} as const

export type IconName = keyof typeof iconPaths
