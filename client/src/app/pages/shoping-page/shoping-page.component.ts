import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  ) { }

  @Input() student: string = "";

  ngOnInit(): void {
    this.settingsService.currentPage = 3;
    this.productsService.getAllProducts();
    this.productsService.getAllCategories();
  }

}
