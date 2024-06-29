import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliomaniaBooksComponent } from './bibliomania-books/bibliomania-books.component';
import { BibliomaniaAboutComponent } from './bibliomania-about/bibliomania-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: BibliomaniaBooksComponent
  },
  {
    path: 'about',
    component: BibliomaniaAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
