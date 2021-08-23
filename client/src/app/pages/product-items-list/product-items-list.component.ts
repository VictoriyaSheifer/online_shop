import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product.service';
import { SettingsService } from 'src/app/services/settings.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-product-items-list',
  templateUrl: './product-items-list.component.html',
  styleUrls: ['./product-items-list.component.scss']
})
export class ProductItemsListComponent implements OnInit {

  constructor(
    public settingsService: SettingsService,
    public productsService: ProductsService,
    public userService: UsersService,
  ) { }

  ngOnInit(): void {
  }

}
