import './App.css';
import Home from './Components/Home';
import { ChakraProvider } from '@chakra-ui/react'
// import { ContextProvider } from './Components/Context';

function App() {
  return (
    <div className="App">
      {/* <ContextProvider> */}
      <ChakraProvider>
        <Home />
      </ChakraProvider>
      {/* </ContextProvider> */}
    </div>
  );
}

export default App;
