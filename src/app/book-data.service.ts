import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Book } from './book-list/book';

const URL = 'https://6495a597b08e17c9179278c5.mockapi.io/api/v1/libros';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  /**
   * Consume la API de libros y devuelve un Observable como respuesta
   */
  public getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(URL)
            .pipe(tap( (books: Book[]) => books.forEach(book => book.quantity = 0)));
  }
}
