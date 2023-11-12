
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'

import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Footer } from './components/Footer'
import { ProductsArea } from './components/ProductsArea'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'


const queryClient = new QueryClient()

export function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}> 
      <QueryClientProvider client={queryClient}>
       <GlobalStyle/>
       <ChakraProvider>
       <Header/>
       <ProductsArea/>
       <Footer/>
       </ChakraProvider>
       </QueryClientProvider>
    </ThemeProvider>
  )
}

