import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

import { FormsModule } from '@angular/forms';
import { BibliomaniaBooksComponent } from './bibliomania-books/bibliomania-books.component';
import { BibliomaniaAboutComponent } from './bibliomania-about/bibliomania-about.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BibliomaniaBooksComponent,
    BibliomaniaAboutComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
