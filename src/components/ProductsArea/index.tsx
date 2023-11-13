import { Skeleton } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ProductCard } from "./components/ProductCard";
import { ProductArea, ProductGridContainer } from "./styles";

export interface ProductsBuyProps{
  id:number;
  photo:string;
  name:string;
  description:string;
  price:string;
  amount:number;
  newPrice:number;
}


export function ProductsArea(){
  
   const [productsBuy, setProductsBuy] = useState<ProductsBuyProps[]>([])

  

   useEffect(() => {
    localStorage.setItem('productsInCart', JSON.stringify(productsBuy));
    
 
  },[productsBuy]);

  const { isLoading, error, data } = useQuery('productData', () =>
  axios.get(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
  ).then((res) => res.data)
);



if (isLoading) return (
  <ProductGridContainer>
    <Skeleton marginLeft={300}  width='218px' height='285px' />
    <Skeleton  width='218px' height='285px' />
    <Skeleton  width='218px' height='285px' />
    <Skeleton  width='218px' height='285px' />
    
  </ProductGridContainer>
)

if (error) return 'An error has occurred: ' +  console.log(error)


  function BuyProduct(id:number){
    
    const newProductBuy = data.products.find(x => x.id === id )
    if (newProductBuy) {
      newProductBuy.amount = 2,
      newProductBuy.price = parseInt(newProductBuy.price);
      newProductBuy.newPrice = newProductBuy.price;
      
    }
    setProductsBuy(prevState => [...prevState,newProductBuy])
  
   }

  

  return (
    <ProductArea>
      <ProductGridContainer>

     {data.products.map((product: { id: number; photo: string; name: string; description: string; price: string; } ) => {
      return <ProductCard onBuyProduct={() => BuyProduct(product.id)} key={product.id}
        imageProduct={product.photo}
        name={product.name}
        description={product.description}
        price={product.price}
        
        />
     })}
        
        
      </ProductGridContainer>
    </ProductArea>
  )
}