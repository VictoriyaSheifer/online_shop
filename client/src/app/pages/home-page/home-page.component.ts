import { Component, Input, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/product.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    public settingsService: SettingsService,
    public productsService: ProductsService,
    public ordersService: OrdersService,
  ) { }

  @Input() student: string = "";

  ngOnInit(): void {
    this.settingsService.currentPage = 0;
  }

}
