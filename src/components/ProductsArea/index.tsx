import { ProductCard } from "./components/ProductCard";
import { ProductArea, ProductGridContainer } from "./styles";

export function ProductsArea(){
  return (
    <ProductArea>
      <ProductGridContainer>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </ProductGridContainer>
    </ProductArea>
  )
}