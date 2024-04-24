import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

 interface Product {
  id:number;
  photo:string;
  name:string;
  description:string;
  price:number;
  amount:number;
  newPrice:number;
}

interface CartContextType {
  productsBuy: Product[];
  setProductsBuy: Dispatch<SetStateAction<Product[]>>;
}



export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [productsBuy, setProductsBuy] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={{ productsBuy, setProductsBuy }}>
      {children}
    </CartContext.Provider>
  );

}
