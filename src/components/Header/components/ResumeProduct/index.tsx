import { Minus, Plus } from 'phosphor-react'
import appelimage from '../../../../assets/apple-watch.png'
import { PriceProduct, QtdContainer, QtdControllerButton, QtdSpan, ResumeProductContainer, TitleProduct } from './styles'

export function ResumeProduct(){
  return(
    <ResumeProductContainer>
      <img src={appelimage} alt="" />

      <TitleProduct>Apple Watch Series 4 GPS</TitleProduct>

      <QtdContainer>
        
        <QtdControllerButton>
          <QtdSpan>Qtd</QtdSpan>
        <Minus size={5} />
        </QtdControllerButton>
        <span>1</span>
        <QtdControllerButton>
        <Plus size={5} />
        </QtdControllerButton>
      </QtdContainer>

      <PriceProduct>R$399</PriceProduct>
    </ResumeProductContainer>
  )
}