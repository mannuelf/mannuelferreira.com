import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './components/Buttont.ts';

export default {
  title: 'Read More Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Read More</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    Read More
  </Button>
);
