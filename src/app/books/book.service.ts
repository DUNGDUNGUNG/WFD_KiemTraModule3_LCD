import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  getList(): Observable<IBook[]> {
    const url = `${this.apiUrl}/books`;
    return this.httpClient.get<IBook[]>(url);
  }

  getDetail(id: number): Observable<IBook> {
    const url = `${this.apiUrl}/books/${id}`;
    return this.httpClient.get<IBook>(url);
  }

  add(book: IBook) {
    const url = this.apiUrl + '/books';
    return this.httpClient.post(url, book);
  }

  delete(id: number) {
    const url = this.apiUrl + '/books/' + id;
    return this.httpClient.delete(url);
  }

  edit(id: number, book: IBook): Observable<any> {
    const url = this.apiUrl + '/books/' + id;
    return this.httpClient.put(url, book);
  }
}
