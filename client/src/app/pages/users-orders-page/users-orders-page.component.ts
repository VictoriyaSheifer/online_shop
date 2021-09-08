import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/product.service';
import { SettingsService } from 'src/app/services/settings.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-orders-page',
  templateUrl: './users-orders-page.component.html',
  styleUrls: ['./users-orders-page.component.scss']
})
export class UsersOrdersPageComponent implements OnInit {

  constructor(
    public settingsService: SettingsService,
    public cartService: CartService,
    public productsService: ProductsService,
    public orders: OrdersService,
    public user: UsersService
  ) { }

  ngOnInit(): void {
  }

}
