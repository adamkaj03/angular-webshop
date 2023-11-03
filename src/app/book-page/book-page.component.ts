import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../services/book.service";
import {Observable} from "rxjs";
import {Book} from "../models/book";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
  book!: Book;
  quantity = 1;
  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private cartService: CartService,
              private router: Router) {
  }

  ngOnInit() {
    let title = this.route.snapshot.params['title']
    this.bookService.getBook(decodeURIComponent(title)).subscribe(
      (data: Book) => {
        this.book = data; // Az érték beállítása, amikor megérkezik
      },
      (error) => {
        console.error('Hiba történt:', error);
      }
    );
  }

  isBookImgUrlNotNull(book: Book) {
    return book.imgUrl != null;
  }

  addToCart(book: Book, quantity: any) {
    this.cartService.addBookToCart(book, quantity)
    this.router.navigateByUrl("")
  }
}
