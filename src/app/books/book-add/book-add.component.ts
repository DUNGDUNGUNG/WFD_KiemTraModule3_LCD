import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {
  message: string;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  addBook(bookForm) {
    console.log(bookForm.value);

    this.bookService.add(bookForm.value).subscribe( () => {
      this.message = 'Successfully added!';
    }, error => {
      this.message = 'Error when adding book!';
    });
  }

}
