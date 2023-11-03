import { Component } from '@angular/core';
import {map, Observable} from "rxjs";
import {OrderService} from "../services/order.service";
import {Order} from "../models/order";
import {OrderedBook} from "../models/orderedBook";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent {
  public orders: Observable<Order[]>  = new Observable<Order[]>();
  public orderPrice: number;

  constructor(private orderService: OrderService) {
    this.orderPrice = 0;
  }

  public getOrders() {
      this.orders = this.orderService.getOrders();
  }

  /*private countOrderPrice(id: number): Observable<number> {
    return this.orderService.getPrice(id).pipe(
      map((data) => data)
    );
  }*/

  /*public getOrderPrice(id: number): Observable<number> {
    return this.countOrderPrice(id).pipe(
      map(() => this.orderPrice)
    );
  }*/
  ngOnInit(): void {
    this.getOrders();
  }

  getOrderBookTitle(orderBooks: OrderedBook[]): string {
    let titles: string = "";
    for(let i = 0; i < orderBooks.length - 1; i++){
      titles += orderBooks.at(i)!.book.title + "(" + orderBooks.at(i)!.count + " db); ";
    }
    titles += orderBooks.at(orderBooks.length-1)!.book.title + "(" + orderBooks.at(orderBooks.length-1)!.count + " db)"
    return titles
  }
}
