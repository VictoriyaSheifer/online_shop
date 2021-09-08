import { Injectable } from '@angular/core';
import { CartItem, Category, Order, Product } from '../models/models';
import { ApiService } from './api';
import { CartService } from './cart.service';
import { ProductsService } from './product.service';
import { SettingsService } from './settings.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  headers = new Headers();
  _all_orders: Array<Order> = [];
  _amountOfOrders: Number = 0;
  _order_ditails: Order = new Order();
  _searchInList: string = ""
  _orderitemsearchedfor: CartItem = new CartItem();
  order_modal_title: string = ""
  order_modal_message: string = ""
  download_pdf: string = ""
  ordermodal: any
  orderDonemodal: any

  constructor(public api: ApiService, public settings: SettingsService, public users: UsersService, public cart: CartService, public products: ProductsService) {
    this.getAllUsersOrders()
    this.getNumOfOrders()
  }

  async getAllUsersOrders() {
    this._all_orders = await this.api.createPostService(this.settings.baseUrl + '/orders/getAllUsersOrders', this.users._loged_in_user) as Array<Order>
    this._order_ditails.shoppingCartId = this.cart._shopping_cart.id
    this._order_ditails.userId = this.users._loged_in_user.id
    this._order_ditails.city = this.users._loged_in_user.city
    this._order_ditails.street = this.users._loged_in_user.street
  }

  async getNumOfOrders() {
    let or = await this.api.createGetService(this.settings.baseUrl + '/orders/getNumOfOrders') as any
    this._amountOfOrders = or.count
  }

  async insertOrders() {
    //console.log("order ::::: ", this._order_ditails)
    if (this._order_ditails.city != "" && this._order_ditails.street != "" && this._order_ditails.shippment_date != "") {
      let checkDate: any = await this.api.createPostService(this.settings.baseUrl + '/orders/checkDate', this._order_ditails)
      if (checkDate.message == "full.") {
        // alert("this date if full , please pick another one");
        this.order_modal_title = "Date issue";
        this.order_modal_message = "this date if full , please pick another one";
        this.download_pdf = "";
        this.ordermodal.nativeElement.click();
      }
      else {
        if (this.validate_creditcardnumber()) {
          this._order_ditails.total_price = this.cart._total_price
          let result = await this.api.createPostService(this.settings.baseUrl + '/orders/insertOrders', this._order_ditails)
          this.cart.updateShoppingCartToDone()
          this.orderDonemodal.nativeElement.click();
        }
      }
    }
    else {
      this.order_modal_title = "Missing Fileds";
      this.order_modal_message = "Please fill the missing filds of the form.";
      this.download_pdf = "";
      this.ordermodal.nativeElement.click();
    }
  }

  validate_creditcardnumber() {
    var re16digit = /^\d{16}$/
    if (this._order_ditails.card_number.search(re16digit) == -1) {
      this.order_modal_title = "Wrong Credit Card";
      this.order_modal_message = "Please enter your 16 digit credit card numbers.";
      this.download_pdf = "";
      this.ordermodal.nativeElement.click();
      return false;
    }
    return true;
  }

  backToShopping() {
    this.cart.getLastShoppingCart(0);
    this.users._user_loged_in_page_number = 0;
    this._order_ditails = new Order();
  }
  onChangesearchInList() {
    //console.log("this._searchInList", this._searchInList)
    this._orderitemsearchedfor = this.cart._cart_items.find(item => item.product.name.toLowerCase().includes(this._searchInList.toLowerCase())) as CartItem
    //console.log("this._orderitemsearchedfor", this._orderitemsearchedfor)
  }
}
