import { Minus, Plus, X } from 'phosphor-react';
import { PriceProduct, QtdContainer, QtdControllerButton, QtdSpan, RemoveProductButton, ResumeProductContainer, TitleProduct } from './styles';

interface ResumeProductProps{
  photo:string;
  name: string;
  price:number;
  amount:number;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
  onRemoveproduct: () => void;
}

export function ResumeProduct({photo, name , price,amount, onIncreaseQuantity,onDecreaseQuantity,onRemoveproduct }:ResumeProductProps){
    

  return(
    <ResumeProductContainer>
      <img src={photo} alt="" />

      <TitleProduct>{name}</TitleProduct>

      <QtdContainer>
        
       
       <QtdControllerButton 
       onClick={onDecreaseQuantity}>
          <QtdSpan>Qtd</QtdSpan>
        <Minus size={5} />
        </QtdControllerButton>
        <span defaultValue={2}>{amount}</span>
        <QtdControllerButton onClick={onIncreaseQuantity}>
        <Plus size={5} />
        </QtdControllerButton>
      </QtdContainer>

      <PriceProduct>R${price}</PriceProduct>
      <RemoveProductButton onClick={onRemoveproduct}>
        <X size={12} color='white' />
      </RemoveProductButton>
    </ResumeProductContainer>
  )
}