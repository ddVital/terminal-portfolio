// import { ReactNode, useEffect } from 'react'
// import { initSmoothScroll } from '../../utils/smoothScroll'

// interface ScrollContainerProps {
//   children: ReactNode
// }

// export function ScrollContainer({ children }: ScrollContainerProps) {
//   useEffect(() => {
//     const scroll = initSmoothScroll()

//     return () => {
//       if (scroll) {
//         scroll.destroy()
//       }
//     }
//   }, [])

//   return <div data-scroll-container>{children}</div>
// }

import { ReactNode, useEffect } from 'react'
import { initSmoothScroll } from '../../utils/smoothScroll'

interface ScrollContainerProps {
  children: ReactNode
}

export const ScrollContainer = ({ children }: ScrollContainerProps) => {
  useEffect(() => {
    const { destroy } = initSmoothScroll()
    return () => destroy()
  }, [])

  return (
    <div>
      {children}
    </div>
  )
}
