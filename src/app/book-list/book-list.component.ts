import { Component } from '@angular/core';
import { Book } from './book';
import { BookCartService } from '../book-cart.service';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {


  books: Book []= [];
  
  constructor(
    private cart: BookCartService,
    private booksDataService: BookDataService){
    
  }

  ngOnInit(): void {
    this.booksDataService.getAll()
    .subscribe((books: Book[]) => this.books = books);
  }

  addToCart(book: Book): void{
    this.cart.addToCart(book);
    book.stock -= book.quantity;
    book.quantity = 0;
  }

  maxReached(m: string){
    console.log(m);
  }
}
