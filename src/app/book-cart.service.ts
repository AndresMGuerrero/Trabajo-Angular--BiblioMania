import { Injectable } from '@angular/core';
import { Book } from './book-list/book';
import { BehaviorSubject } from 'rxjs';

/**
 * Maneja la lógica del carrito
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class BookCartService {
  
  private _cartList: Book[]= [];
  cartList: BehaviorSubject<Book[]> = new BehaviorSubject(this._cartList);

  constructor() { };

  addToCart(book: Book) {
    let item: Book | undefined = this._cartList.find((v1) => v1.title == book.title);
    if(!item){
      this._cartList.push({ ... book});
    } else {
      item.quantity += book.quantity;
    }

    this.cartList.next(this._cartList); //equivalente al emitt de eventos
    
  }

  
}
