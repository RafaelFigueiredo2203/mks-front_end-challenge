import { Skeleton } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useCart } from "../../context/utils/useCart";
import { ProductCard } from "./components/ProductCard";
import { ProductArea, ProductGridContainer } from "./styles";



export function ProductsArea(){
  const { productsBuy, setProductsBuy } = useCart();
  const notify = () => toast.success("Adicionado ao carrinho!", {position:'top-center'});

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
    
  // Encontrar o produto no conjunto de dados
  const newProductBuy = data.products.find((x: { id: number }) => x.id === id);

  if (newProductBuy) {
    // Verificar se o produto já está no carrinho
    const existingProductIndex = productsBuy.findIndex(product => product.id === id);

    if (existingProductIndex !== -1) {
      // Se o produto já estiver no carrinho, atualizar a quantidade
      const updatedProducts = [...productsBuy];
      updatedProducts[existingProductIndex].amount += 2; // Incrementar a quantidade
      setProductsBuy(updatedProducts);
    } else {
      // Se o produto não estiver no carrinho, adicionar ao carrinho
       newProductBuy.amount = 2;
      newProductBuy.price = parseInt(newProductBuy.price);
      newProductBuy.newPrice = newProductBuy.price;

      setProductsBuy(prevState => [...prevState, newProductBuy]);
    }

    // Atualizar o local storage com o novo estado do carrinho
    localStorage.setItem('productsInCart', JSON.stringify(productsBuy));
    notify();
   }

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