import { Component, Input, OnInit } from '@angular/core';
import { CartItem, Product } from 'src/app/models/models';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/product.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() d: CartItem = new CartItem();
  constructor(
    public productsService: ProductsService,
    public cartService: CartService,
    public userService: UsersService
  ) { }

  productInCart: Product = new Product();

  ngOnInit(): void {
  }


}
