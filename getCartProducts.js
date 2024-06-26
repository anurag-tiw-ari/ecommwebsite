import { updateCartValue } from "./updatecartvalue";

export function getCartProductFromLS()
{
    let cartProducts=localStorage.getItem("cartProductLS")
    if(cartProducts==null)
        {
            return [];
        }

       cartProducts=JSON.parse(cartProducts) ;
       updateCartValue(cartProducts)
       return cartProducts;
}