import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { ShoppingCart } from "phosphor-react";
import { ButtonCart, HeaderContainer } from "./styles";

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
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </HeaderContainer>
  )
}