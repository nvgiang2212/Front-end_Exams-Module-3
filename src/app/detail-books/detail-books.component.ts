import { Component, OnInit } from '@angular/core';
import {IBooks} from '../books';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-detail-books',
  templateUrl: './detail-books.component.html',
  styleUrls: ['./detail-books.component.scss']
})
export class DetailBooksComponent implements OnInit {

  book: IBooks;
  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(
      next => (this.book = next),
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }

}
