import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingCart } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api';
import { CartService } from 'src/app/services/cart.service';
import { SettingsService } from 'src/app/services/settings.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(
    public userService: UsersService,
    public settingsService: SettingsService,
    public settingsApi: ApiService,
    public cart: CartService
  ) { }

  @ViewChild('closebutton') closebutton: any;

  ngOnInit(): void {

  }

  public logIn() {
    this.userService.closebutton = this.closebutton
    this.cart.logIn()
  }

  public logOut() {
    this.cart.logOut(this.cart._cart_items.length)
  }
}
