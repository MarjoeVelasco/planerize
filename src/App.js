import React from 'react';
import { ChakraProvider} from '@chakra-ui/react';
import { ColorModeSwitcher } from './Components/colorswitcher/ColorModeSwitcher';
import RouterProvider from './Routes/RouterProvider';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <ColorModeSwitcher initialColorMode="dark" ></ColorModeSwitcher>
      <RouterProvider/>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
