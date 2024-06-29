import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {


  books: Book []= [
    {
      title: "Biología",
      author: "Curtis",
      price: 24000,
      stock: 21,
      image: "assets/img/biologia-Curtis.png",
      clearance: false,
      quantity: 0,
    },
    {
      title: "Crónicas marcianas",
      author: "Ray Bradbury",
      price: 14000,
      stock: 7,
      image: "assets/img/cronicas-marcianas.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      price: 20000,
      stock: 12,
      image: "assets/img/dune.jpg",
      clearance: true,
      quantity: 0,
    },
    {
      title: "Historias de la Prehistoria",
      author: "David Benito del Olmo",
      price: 10000,
      stock: 5,
      image: "assets/img/historias-de-la-prehistoria.jpg",
      clearance: true,
      quantity: 0,
    },
    {
      title: "Mujeres tenían que ser",
      author: "Felipe Pigna",
      price: 13000,
      stock: 11,
      image: "assets/img/mujeres-tenian-que-ser.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      title: "The Biology Book",
      author: "DK",
      price: 34000,
      stock: 0,
      image: "assets/img/the-biology-book.jpg",
      clearance: false,
      quantity: 0,
    }
  ];

  maxReached(m: string){
    console.log(m);
  }
}
