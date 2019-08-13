import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBooks} from './books';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly API_URL = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }
  getBooks(count = 10): Observable<IBooks[]> {
    return this.http.get<IBooks[]>(this.API_URL).pipe(
      map(response => response.filter((post, i) => i < count))
    );
  }
  getBookById(id: number): Observable<IBooks> {
    return this.http.get<IBooks>(`${this.API_URL}/${id}`);
  }
  createBook(book: Partial<IBooks>): Observable<IBooks> {
    return this.http.post<IBooks>(this.API_URL, book);
  }
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
  updateBook(book: IBooks): Observable<IBooks> {
    return this.http.put<IBooks>(`${this.API_URL}/${book.id}`, book);
  }
}
