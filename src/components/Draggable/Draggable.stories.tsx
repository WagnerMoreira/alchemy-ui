import React from 'react'
import { storiesOf } from '@storybook/react'
import Draggable from './Draggable'

import './Draggable.css'

const Body = ({ children }: any) => (
  <div className="wrapper">
    <style
      dangerouslySetInnerHTML={{ __html: `body { margin: 0; }` }}
    />
    {children}
  </div>
)

storiesOf('UI Components | Draggable', module)
  .add("Simple Draggable element", () => (
    <Body>
      <Draggable />
    </Body>
  ))
