import {Component, Input, OnInit} from '@angular/core';
import {IBook} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  @Input() book: IBook;
  message: string;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  editBook(bookForm) {
    const id = bookForm.value.id;
    const {title, author, description} = bookForm.value;
    const book = {
      title,
      author,
      description
    };
    this.bookService.edit(id, book).subscribe(() => {
      this.message = 'Successfully updated';
    }, error => {
      this.message = 'Failed when updating book';
    });
  }

}
