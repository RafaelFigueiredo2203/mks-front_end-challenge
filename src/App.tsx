
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ProductsArea } from './components/ProductsArea'
import { CartProvider } from './context/cart-context'
import { queryClient } from './lib/react-query'
import { GlobalStyle } from './styles/global'
import './styles/styles.css'
import { defaultTheme } from './styles/themes/defaultTheme'




export function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}> 
    
      <QueryClientProvider client={queryClient}>
      <CartProvider>
       <GlobalStyle/>
       <ChakraProvider>
       <Header/>
       <ProductsArea/>
       <Footer/>
       </ChakraProvider>

       <ToastContainer />
       </CartProvider>
       </QueryClientProvider>
      
    </ThemeProvider>
  )
}

