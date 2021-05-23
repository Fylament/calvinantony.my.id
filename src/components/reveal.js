import { useInView } from "react-intersection-observer"
import * as React from "react"

const AnimateIn = ({ threshold = 0.00001, triggerOnce = false, children }) => {
  const [ref, inView] = useInView({ threshold, triggerOnce })

  return (
    <div
      ref={ref}
      style={{
        transition: inView ? "background-color 1000ms ease":"background-color 0ms ease",
        transitionDelay: inView ? "300ms": "0ms",
        backgroundColor: inView ? "#000814":"#003566",
      }}
    >
      <div style={{
        transition: "transform 600ms ease",
        transform: `translateY(${inView ? 0 : 100}px)`,
      }}>
        {children}
      </div>
    </div>
    
  )
}


export default AnimateIn
