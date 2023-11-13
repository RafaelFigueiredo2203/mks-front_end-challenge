
import { ShoppingBagOpen } from 'phosphor-react';
import { BuyButton, PriceDiv, ProductCardContainer, SubtitleProduct, TitleProduct } from "./styles";

interface ProductCardProps {
  imageProduct:string;
  name:string;
  description:string;
  price:string;
  onBuyProduct:() => void;
}

export function ProductCard({imageProduct, name, description, price, onBuyProduct}: ProductCardProps){
  
  return(
    <ProductCardContainer>
      <div>
      <img src={imageProduct} alt="" />
      </div>

      <TitleProduct>
        <h1>
        {name}
        </h1>

        <PriceDiv>
          <span>R${price}</span>
        </PriceDiv>
        </TitleProduct>
      <SubtitleProduct>
        <span>
        {description}
        </span>
        </SubtitleProduct>

     
        <BuyButton onClick={onBuyProduct}>
        <ShoppingBagOpen color='#fff' size={16} />


          <span>Comprar</span>
        </BuyButton>
       
    </ProductCardContainer>
  )
}