import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookComponent} from './book/book.component';
import {DetailBooksComponent} from './detail-books/detail-books.component';
import {EditBooksComponent} from './edit-books/edit-books.component';


const routes: Routes = [{
  path: 'book',
  component: BookComponent
}, {
  path: 'book/:id',
  component: DetailBooksComponent
}, {
  path: 'book/:id/edit',
  component: EditBooksComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
