import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'

import './Card.css'

const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x: number, y: number, scale: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${scale})`

function Card() {
  //setup hook for drag card feature
  const [{ x, y }, setDrag] = useSpring(() => ({ x: 0, y: 0 }))
  // Defining the gesture to be used to drag the card
  const bind = useDrag(({ down, movement: [mx, my] }) => setDrag({ x: down ? mx : 0, my: down ? y : 0 }))

  //setup hook for mouseMove effect
  const [props, setMouseMove] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => setMouseMove({ xys: calc(x, y) })}
      onMouseLeave={() => setMouseMove({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) , ...(x && { x, y }) }}
      {...bind()}
    />
  )
}

export default Card
