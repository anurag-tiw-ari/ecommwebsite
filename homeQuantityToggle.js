export function homeQuantityToggle(e,id,stock)
{
  const CurrCardElem=document.querySelector(`#card${id}`);
  //console.log(CurrCrdElem)
  const productQuantity=CurrCardElem.querySelector(".productQuantity")
  console.log(productQuantity);
  //let quantity=productQuantity.innerText
  if(e.target.classList.contains("cartIncrement"))
    {
        if(Number(productQuantity.innerText)<stock)
        productQuantity.innerText=Number(productQuantity.innerText)+1
    }
    if(e.target.classList.contains("cartDecrement"))
        if(Number(productQuantity.innerText)>1)
        {
            productQuantity.innerText=Number(productQuantity.innerText)-1
        }
    
}