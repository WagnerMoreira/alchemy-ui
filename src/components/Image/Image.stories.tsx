import React from 'react'
import { storiesOf } from '@storybook/react'

import Image from './Image'

storiesOf('UI Components | Image', module)
  .add('Basic Usage', () => (
    <Image src="https://i.pinimg.com/564x/11/d1/e2/11d1e27a21d359ffb23d207c6d05c059.jpg" />
  ))
