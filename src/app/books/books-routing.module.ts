import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookAddComponent} from './book-add/book-add.component';
import {BookInfoComponent} from './book-info/book-info.component';
import {BookDetailComponent} from './book-detail/book-detail.component';

const routes: Routes = [
  {path: 'add-book', component: BookAddComponent},
  {path: 'book-info', component: BookInfoComponent},
  {path: 'detail/:id', component: BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}
