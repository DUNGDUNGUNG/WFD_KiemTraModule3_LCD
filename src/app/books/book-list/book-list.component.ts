import {Component, OnInit } from '@angular/core';
import {IBook} from '../book';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: IBook[];
  message: string;

  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    const updateBooksEvent = this.bookService.getList();

    updateBooksEvent.subscribe(newList => {
      this.books = newList;
    }, error => {
      console.log('Lỗi gì đó!', error);
      this.message = error.message;
    });
  }

  detailBook(id: number) {
    this.router.navigate(['books/detail', id]);
  }

  editBook(id: number) {
    this.router.navigate(['books/edit', id]);
  }

  deleteBook(id: number) {
    this.bookService.delete(id).subscribe(() => {
      this.message = 'Successfully deleted';
      this.getList();
    }, error => {
      this.message = 'Failed when deleting book with id = ' + id;
    });
  }

}
