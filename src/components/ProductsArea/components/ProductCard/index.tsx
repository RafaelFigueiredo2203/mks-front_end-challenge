import { ShoppingBagOpen } from 'phosphor-react';
import imageApple from '../../../../assets/apple-watch.png';
import { BuyButton, ProductCardContainer, SubtitleProduct, TitleProduct } from "./styles";

export function ProductCard(){
  return(
    <ProductCardContainer>
      <div>
      <img src={imageApple} alt="" />
      </div>

      <TitleProduct>
        <span>
        Apple Watch Series 4 GPS
        </span>
        </TitleProduct>
      <SubtitleProduct>
        <span>
        Redesigned from scratch and completely revised.
        </span>
        </SubtitleProduct>

        <BuyButton>
        <ShoppingBagOpen color='#fff' size={16} />


          <span>Comprar</span>
        </BuyButton>
    </ProductCardContainer>
  )
}