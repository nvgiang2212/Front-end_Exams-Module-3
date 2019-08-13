import {Component, OnInit} from '@angular/core';
import {IBooks} from '../books';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  bookList: IBooks[] = [];

  constructor(
    private bookService: BooksService,
  ) {
  }

  ngOnInit() {
    this.bookService
      .getBooks()
      .subscribe(next => (this.bookList = next), error => (this.bookList = []));
  }

  deleteBook(i) {
    const book = this.bookList[i];
    this.bookService.deleteBook(book.id).subscribe(() => {
      this.bookList = this.bookList.filter(t => t.id !== book.id);
    });
  }


}
