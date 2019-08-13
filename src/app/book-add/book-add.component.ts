import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BooksService} from '../books.service';
import {IBooks} from '../books';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {
  bookList: IBooks[] = [];
  bookForm: FormGroup;
  constructor(
    private bookService: BooksService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      author: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
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

}
