import React from 'react';
import { enableScreens } from 'react-native-screens';
enableScreens();

import Navigation from './scr/presentation/Navigation';

export default function App() {
  return (
    <Navigation />
  );
}