import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {IBook} from '../book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  book: IBook;
  message: string;

  constructor(private bookService: BookService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.paramMap.subscribe((param: ParamMap) => {
      const id = parseInt(param.get('id'), 10);
      this.bookService.getDetail(id).subscribe(next => {
        this.book = next;
        this.message = 'show detail successfully';
      }, error => {
        this.message = 'error update' + error;
      });
    });
  }

  editBook(bookForm) {
    this.bookService.edit(this.book.id, bookForm.value).subscribe(next => {
      this.message = 'update successfully';
    }, error => {
      this.message = 'error update ';
    });
  }

}
