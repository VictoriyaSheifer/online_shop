import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/models';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/product.service';
import { SettingsService } from 'src/app/services/settings.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  constructor(
    public settingsService: SettingsService,
    public cartService: CartService,
    public productsService: ProductsService,
    public orders: OrdersService,
    public user: UsersService
  ) { }

  @ViewChild('ordermodal') ordermodal: any;
  @ViewChild('orderDonemodal') orderDonemodal: any;


  ngOnInit(): void {
    this.settingsService.currentPage = 4;

  }

  getQnyTotale() {
    let sum = 0;
    this.cartService._cart_items.map(p => sum += p.qnt)
    return sum
  }

  insertOrders() {
    this.orders.ordermodal = this.ordermodal
    this.orders.orderDonemodal = this.orderDonemodal
    this.orders.insertOrders();
  }


}
