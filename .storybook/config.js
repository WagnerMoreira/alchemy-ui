import { configure } from '@storybook/react';

// this is loading all stories that match the pattern `.stories.tsx`
configure(require.context('../src', true, /\.stories\.tsx$/), module)
