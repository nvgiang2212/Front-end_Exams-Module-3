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
  bookForm: FormGroup;

  constructor(
    private bookService: BooksService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      author: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
    this.bookService
      .getBooks()
      .subscribe(next => (this.bookList = next), error => (this.bookList = []));
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const {value} = this.bookForm;
      this.bookService.createBook(value)
        .subscribe(next => {
          this.bookList.unshift(next);
          this.bookForm.reset({
            title: '',
            author: '',
            description: ''
          });
        }, error => console.log(error));
    }
  }

  deleteBook(i) {
    const book = this.bookList[i];
    this.bookService.deleteBook(book.id).subscribe(() => {
      this.bookList = this.bookList.filter(t => t.id !== book.id);
    });
  }


}
