import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from './Card'

import './card.css'

const Body = ({ children }: any) => (
  <div className="wrapper">
    <style
      dangerouslySetInnerHTML={{ __html: `body { margin: 0; }` }}
    />
    {children}
  </div>
)

storiesOf('UI Components | Card', module)
  .add("Simple Card", () => (
    <Body>
      <Card />
    </Body>
  ))
