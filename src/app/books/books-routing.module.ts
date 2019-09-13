import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookAddComponent} from './book-add/book-add.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookListComponent} from './book-list/book-list.component';

const routes: Routes = [
  {path: 'add-book', component: BookAddComponent},
  {path: 'book-list', component: BookListComponent},
  {path: 'detail/:id', component: BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}
