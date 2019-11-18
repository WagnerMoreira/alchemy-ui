import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from './Card'

const Body = ({ children }: any) => (
  <div className="container">
    {children}
  </div>
)

storiesOf('UI Components | Card', module)
  .add('Simple 3D Card', () => (
    <Body>
      <Card />
    </Body>
  ))
