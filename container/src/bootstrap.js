import { mount as mountProduct } from 'products/ProductIndex';
import { mount as mountCart } from 'cart/CartIndex';

mountProduct(document.querySelector('#products-container'));
mountCart(document.querySelector('#cart-container'));