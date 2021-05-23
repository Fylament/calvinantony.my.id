import { useInView } from "react-intersection-observer"
import * as React from "react"

const AnimateIn = ({ threshold = 0.01, triggerOnce = false, children }) => {
  const [ref, inView] = useInView({ threshold, triggerOnce })

  return (
    <div
      ref={ref}
      style={{
        transition: inView ? "background-color 1000ms ease":"background-color 0ms ease",
        transitionDelay: inView ? "300ms": "0ms",
        backgroundColor: inView ? "#003566":"#000814",
      }}
    >
      {children}
    </div>
    
  )
}


export default AnimateIn
