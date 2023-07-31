import React from 'react';
import { ChakraProvider} from '@chakra-ui/react';
import { ColorModeSwitcher } from './Components/colorswitcher/ColorModeSwitcher';
import RouterProvider from './Routes/RouterProvider';
import { BrowserRouter } from "react-router-dom";
import Nav from './Components/Navigation/Nav';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <RouterProvider/>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
