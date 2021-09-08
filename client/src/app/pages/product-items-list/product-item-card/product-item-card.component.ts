import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/models';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/product.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-product-item-card',
  templateUrl: './product-item-card.component.html',
  styleUrls: ['./product-item-card.component.scss']
})
export class ProductItemCardComponent implements OnInit {

  @Input() p: Product = new Product();
  @ViewChild('editModalclose') editModalclose: any;
  prod_qnt: number = 1;

  constructor(
    public cartService: CartService,
    public userService: UsersService,
    public productsService: ProductsService
  ) { }

  ngOnInit(): void {
  }

  updateProduct() {
    this.productsService.editModalclose = this.editModalclose
    this.productsService.updateProduct();
  }


}
