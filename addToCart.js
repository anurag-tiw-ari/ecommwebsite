import { getCartProductFromLS } from "./getCartProducts"
import { updateCartValue } from "./updatecartvalue"
export function addToCart(e,id,stock)
{
   let arrLocalStorageProduct=getCartProductFromLS()

    const currProdElem=document.querySelector(`#card${id}`)
    let quantity=currProdElem.querySelector(".productQuantity").innerText
    let orprice=currProdElem.querySelector(".productPrice").innerText
    //console.log(quantity,price)
    orprice=orprice.replace("₹","")
    orprice=Number(orprice);
    quantity=Number(quantity)
    let price=orprice*quantity
   // console.log(quantity,price)

   for(let i=0;i<arrLocalStorageProduct.length;i++)
      {
         if(arrLocalStorageProduct[i].id===id)
            {
               if(quantity>1)
                  {
                     console.log(price,orprice,quantity)
                     arrLocalStorageProduct[i].quantity+=quantity
                     console.log(arrLocalStorageProduct[i].quantity)
                     price=orprice*arrLocalStorageProduct[i].quantity
                     arrLocalStorageProduct[i].price=price
                     localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct))
                  }
              return false;
            }
      }
    
   arrLocalStorageProduct.push({id,price,quantity})
   localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct))

   updateCartValue(arrLocalStorageProduct)
}
