import { homeQuantityToggle } from "./homeQuantityToggle";
import { addToCart } from "./addToCart";
import { getCartProductFromLS } from "./getCartProducts";

let productContainer=document.querySelector("#productContainer");
let productTemplate=document.querySelector("#productTemplate");


export function showProductcontainer(products)

{
    if(products.length===0)
        {
            return false;
        }
    products.forEach((cp)=> 
    {
         let {id,name,category,brand,price,stock,description,image,actualPrice}=cp;

         let productClone=document.importNode(productTemplate.content,true);

         productClone.querySelector("#cardValue").setAttribute('id',`card${id}`);
         productClone.querySelector(".productName").innerText=name;
         productClone.querySelector(".productImage").src=image;
         productClone.querySelector(".productImage").alt=name;
         productClone.querySelector(".productDescription").innerText=description;
         productClone.querySelector(".productPrice").innerText=`₹${price}`;
         productClone.querySelector(".productActualPrice").innerText=`₹${actualPrice}`;
         productClone.querySelector(".productStock").innerText=stock;
         productClone.querySelector(".category").innerText=category;

         productClone.querySelector(".stockElement").addEventListener("click",(e)=>
        {
                homeQuantityToggle(e,id,stock);
        })

        productClone.querySelector(".add-to-cart-button")
        .addEventListener("click",(e)=>{
             addToCart(e,id,stock)
        })

         productContainer.append(productClone);
    });

     getCartProductFromLS();
}

