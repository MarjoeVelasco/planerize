import React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider>
      <p>Test</p>
        <ul>
          <ol>1</ol>
          <ol>1</ol>
          <ol>1</ol>
        </ul>
    </ChakraProvider>
  );
}

export default App;
