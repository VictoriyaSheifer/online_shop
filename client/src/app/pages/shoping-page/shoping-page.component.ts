import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/product.service';
import { SettingsService } from 'src/app/services/settings.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-shoping-page',
  templateUrl: './shoping-page.component.html',
  styleUrls: ['./shoping-page.component.scss']
})
export class ShopingPageComponent implements OnInit {

  constructor(
    public settingsService: SettingsService,
    public productsService: ProductsService,
    public userService: UsersService,
    public cartService: CartService
  ) { }

  @ViewChild('addModalclose') addModalclose: any;

  ngOnInit(): void {
    this.settingsService.currentPage = 3;
    this.productsService.getAllProducts();
    this.productsService.getAllCategories();
  }

  insertProducts() {
    this.productsService.addModalclose = this.addModalclose;
    this.productsService.insertProducts();
  }


}
