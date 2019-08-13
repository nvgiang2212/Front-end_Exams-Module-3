import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailBooksComponent } from './detail-books/detail-books.component';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { BookComponent } from './book/book.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BookAddComponent } from './book-add/book-add.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailBooksComponent,
    EditBooksComponent,
    BookComponent,
    BookAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
