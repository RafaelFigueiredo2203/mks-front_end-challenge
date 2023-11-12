
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'

import { ChakraProvider } from '@chakra-ui/react'
import { Footer } from './components/Footer'
import { ProductsArea } from './components/ProductsArea'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

export function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}> 
       <GlobalStyle/>
       <ChakraProvider>
       <Header/>
       <ProductsArea/>
       <Footer/>
       </ChakraProvider>
    </ThemeProvider>
  )
}

