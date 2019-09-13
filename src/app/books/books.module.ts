import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BookEditComponent } from './book-edit/book-edit.component';


@NgModule({
  declarations: [BookListComponent, BookAddComponent, BookDetailComponent, BookEditComponent],
  exports: [
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class BooksModule { }
