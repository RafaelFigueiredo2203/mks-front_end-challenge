import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure
} from '@chakra-ui/react';
import { ShoppingCart } from "phosphor-react";
import { ResumeProduct } from './components/ResumeProduct';
import { ButtonCart, FinalyBuyButton, HeaderContainer, Span } from "./styles";

export function Header(){

  const { isOpen, onOpen, onClose } = useDisclosure()
 

  return(
    <HeaderContainer>
      <div>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </div>

      <ButtonCart onClick={onOpen}>
      <ShoppingCart size={19} />
      <span>0</span>
      </ButtonCart>

      <Drawer
        
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
       
      >
        <DrawerOverlay  />
        <DrawerContent  backgroundColor="#0F52BA">
          <DrawerCloseButton
          marginTop={5} 
          rounded={100} 
          color="#fff" 
          backgroundColor="#000"/>
          <DrawerHeader><Span>Carrinho de compras</Span></DrawerHeader>

          <DrawerBody padding={2}   backgroundColor="#0F52BA">
            <ResumeProduct/>
            <ResumeProduct/>
            <ResumeProduct/>
          </DrawerBody>

          <DrawerFooter  backgroundColor="#000">
            <FinalyBuyButton>
              <span>Finalizar Compra</span>
            </FinalyBuyButton>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </HeaderContainer>
  )
}