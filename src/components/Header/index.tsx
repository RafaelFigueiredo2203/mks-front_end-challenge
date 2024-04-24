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
import { useState } from 'react';
import { toast } from "react-toastify";


import { useCart } from "../../context/utils/useCart";
import { ResumeProduct } from './components/ResumeProduct';
import { ButtonCart, FinalyBuyButton, HeaderContainer, Span, TotalDiv } from "./styles";

export function Header(){

  const { productsBuy, setProductsBuy } = useCart();
  const [stateQtd,setStateQtd] = useState(2);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const notify = () => toast.success("Compra efetuada com sucesso!");

 
   function handleIncreaseQuantity(id:number){
  
    const newProduct =  productsBuy.map(product => product.id === id ? {
      ...product,
      price: product.newPrice * product.amount,
      amount: product.amount + 1,
    } : product);
    setProductsBuy(newProduct);
    localStorage.setItem('productsInCart', JSON.stringify(newProduct));
    setStateQtd(stateQtd + 1)
  }
  

   function handleDecreaseQuantity(id:number){ 
    if(stateQtd > 2){
      setStateQtd(stateQtd -1)
    }else{
      return null;
    }
      
    const  newProduct =  productsBuy.map(product => product.id === id ? {
      ...product,
      price: product.price - product.newPrice,
      amount: product.amount - 1,
    } : product
    );
    
    setProductsBuy(newProduct);
    localStorage.setItem('productsInCart', JSON.stringify(newProduct));
  
  }

  function handleProductRemove(id: number) {
    const filterProducts = productsBuy.filter(product => product.id !== id);

    setProductsBuy(filterProducts);
  
    localStorage.setItem('productsInCart', JSON.stringify(filterProducts));
  }

  function handleFinallyBuy(){
    notify()
    setTimeout(function() {
      window.location.reload();
    }, 2000);
  }
    
  const total = productsBuy.map((product) => product.price).reduce((total, price) =>{
  return total + price},0);
 

  return(
    <HeaderContainer>
      <div>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </div>

      <ButtonCart onClick={onOpen}>
      <ShoppingCart size={19} />
      <span>{productsBuy.length}</span>
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
            {productsBuy.map(product => {
              return (
              <ResumeProduct
              key={product.id}
              name={product.name}
              photo={product.photo}
              price={product.price}
              amount={product.amount - 1}
              onIncreaseQuantity={() => handleIncreaseQuantity(product.id)}
              onDecreaseQuantity={() => handleDecreaseQuantity(product.id)}
              onRemoveproduct={() => handleProductRemove(product.id)}
              />)
                })}
            
           
          </DrawerBody>

          <DrawerFooter flexDirection='column' backgroundColor="#0F52BA">
          
            <TotalDiv>
              <span>Total</span>  
               <span>R${total}</span>         
            </TotalDiv>
          
          {
            productsBuy.length <= 0 ?
            <FinalyBuyButton disabled >
            <span>Finalizar Compra</span>
          </FinalyBuyButton>
          :
          <FinalyBuyButton  onClick={handleFinallyBuy}>
          <span>Finalizar Compra</span>
          </FinalyBuyButton>
          
          }
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </HeaderContainer>
  )
}