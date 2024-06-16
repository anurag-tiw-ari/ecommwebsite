//import './style.css';

import products from "./api/products.json"; //so products is array of 6 items
import { showProductcontainer } from "./homeproductscards";


//call function to display store products as card

showProductcontainer(products);
