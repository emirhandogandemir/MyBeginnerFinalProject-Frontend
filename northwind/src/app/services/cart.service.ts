import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  addToCart(product:Product){
    let item = CartItems.find(c=>c.product.productId===product.productId);// sepette var mı yok mu onun kontrolünü sağlıyoruz

    if(item){
    item.quantity+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.product=product;
      cartItem.quantity=1;
        CartItems.push(cartItem)
    }
  }

  removeCart(product:Product){
    let item:CartItem = CartItems.find(c=>c.product.productId===product.productId);
    CartItems.splice(CartItems.indexOf(item),1)// indexi neresiyse oradan itibaren 1 tane sil demek
  }

  list():CartItem[]{
    return CartItems;
  }
}
