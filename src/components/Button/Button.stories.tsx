import React from 'react'
import { storiesOf } from '@storybook/react';

import Button from "./Button";

storiesOf("UI Components | Button", module)
  .add("with text", () => (
    <Button>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button>
      <span role="img" aria-label="Grinning Face">😀</span>
      <span role="img" aria-label="Smiling Face With Sunglasses">😎</span>
      <span role="img" aria-label="Thumbs Up">👍</span>
    </Button>
  ));
