import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'

import './Draggable.css'

const Draggable: React.FunctionComponent = () => {
  const [props, set] = useSpring(() => ({ x: 0, y: 0, scale: 1 }))
  const bind = useDrag(({ down, movement: [x, y] }) => {
    set({ x: down ? x : 0, y: down ? y : 0, scale: down ? 1.2 : 1 })
  })

  return <animated.div {...bind()} style={props} />
}

export default Draggable;
