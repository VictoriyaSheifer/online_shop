import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem, Product, ShoppingCart, User } from '../models/models';
import { ApiService } from './api';
import { ProductsService } from './product.service';
import { SettingsService } from './settings.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  headers = new Headers();
  _shopping_cart: ShoppingCart = new ShoppingCart();
  _cart_items: Array<CartItem> = [];
  _total_price: any = 0;

  constructor(
    public api: ApiService,
    public settings: SettingsService,
    public users: UsersService,
    public products: ProductsService,
    private router: Router
  ) {
  }

  async logOut(cart_items: Number) {
    //console.log("cart.", this._shopping_cart)
    if (cart_items > 0) {
      // TO DO : ask about the cart , save = this._shopping_cart.status == "in prosses" , discars = this._shopping_cart.status = "done"
      if (confirm("Do you want to save your cart to the next time?") == true) {
        this._shopping_cart.status = "in process"
      } else {
        this._shopping_cart.status = "cancelled"
      }
      //save cart changes 
      let result = await this.api.createPostService(this.settings.baseUrl + '/cartItems/editShoppingCart', this._shopping_cart) as ShoppingCart
      //console.log(" ShoppingCart updated  : ", result)
      this._shopping_cart = new ShoppingCart();
    }
    else {
      //deleate empty shopping cart from db
      let result = await this.api.createPostService(this.settings.baseUrl + '/cartItems/deleteShoppingCart', this._shopping_cart) as ShoppingCart
      //console.log("deleteShoppingCart  : ", result)
    }
    //restert the user crids
    this.users._loged_in_user = new User();
    this._cart_items = [];
    //update the users crids in local storage and navigete back to the home page 
    localStorage.setItem("user", JSON.stringify(this.users._loged_in_user))
    localStorage.setItem("role", JSON.stringify(0))
    this.users._user_loged_in_page_number = 0;
    this.router.navigate(['/']);
  }

  async logIn() {
    this.users._loged_in_user = new User();
    this.users._is_a_menager = false;
    //console.log(" _log_in_email _log_in_pass", this.users._log_in_email, this.users._log_in_pass)
    //create ob with the info
    let user_cridentials = {
      email: this.users._log_in_email,
      password: this.users._log_in_pass,
    }
    // //console.log("_log_in_email :::::", user_cridentials)
    //check if there is a user
    let user = await this.api.createGetService(this.settings.baseUrl + '/users/CheckIfExist?email=' + this.users._log_in_email) as User
    // //console.log("check if exists : ", user)
    if (user === null) {//wrong email
      // //console.log("no user with this email,no log in for you !")
      this.users.email_validation_class = "form-control is-invalid"
    }
    else {
      this.users.email_validation_class = "form-control is-valid"
      if (user.password == user_cridentials.password) {
        this.users.pass_validation_class = "form-control is-valid"
        this.users._loged_in_user = user;
        //save in locallhost 
        localStorage.setItem("user", JSON.stringify(this.users._loged_in_user))
        localStorage.setItem("role", JSON.stringify(this.users._loged_in_user.role))

        //check if this is the menager
        if (this.users._loged_in_user.role)
          this.users._is_a_menager = true;
        else this.users._is_a_menager = false;
        //empty inputs 
        this.users._log_in_email = ""
        this.users._log_in_pass = ""
        //go to loged in page
        this.users.closebutton.nativeElement.click();
        this.users.email_validation_class = "form-control"
        this.users.pass_validation_class = "form-control"
        this.router.navigate(['/loged-in']);
        this.getLastShoppingCart(1);
      }
      else {
        this.users.pass_validation_class = "form-control is-invalid"
        //console.log("password not rigth,no log in for you !")
      }
    }
  }

  async getLastShoppingCart(flag_log_in: Number) {
    let _shopping_cart = await this.api.createPostService(this.settings.baseUrl + '/cartItems/getLastShoppingCart', this.users._loged_in_user) as Array<ShoppingCart>
    this._shopping_cart = _shopping_cart[0];
    //console.log("_shopping_cart_shopping_cart", this._shopping_cart)
    this.getAllCartItemsOfShoppingCart(flag_log_in)
  }

  async getAllCartItemsOfShoppingCart(flag_log_in: Number) {
    this._cart_items = []
    this._cart_items = await this.api.createPostService(this.settings.baseUrl + '/cartItems/getAllCartItemsOfShoppingCart', this._shopping_cart) as Array<CartItem>
    this._total_price = 0;
    if (this._cart_items.length > 0) {
      this._cart_items.map(item => this._total_price += item.total_price)
      this._total_price = this._total_price.toFixed(2);
      if (flag_log_in) {
        ////console.log("full cart in log in cart")
        if (confirm("Do you want to use your cart from last time?") == true) {
          //console.log("stay with products")
        } else {
          //console.log("clear products from cart")
          await this.api.createPostService(this.settings.baseUrl + '/cartItems/deleteAllCartItemFromShoppingCart', this._shopping_cart) as Array<CartItem>
          this._cart_items = []
          this._total_price = 0
        }
      }
    }
    else {
      //console.log("empty cart")
    }
    //console.log("cart items :", this._cart_items)
  }

  async deleteAllCartItemFromShoppingCart() {
    if(this._cart_items.length>0){
      if (confirm("Are you sure you want to clear your cart ?") == true) {
        await this.api.createPostService(this.settings.baseUrl + '/cartItems/deleteAllCartItemFromShoppingCart', this._shopping_cart) as Array<CartItem>
        this._cart_items = []
        this._total_price = 0
      }
    }
  }

  async addCartItem(qnt: Number, productId: Number) {
    let product = this.products._all_products.filter(product => product.id == productId)
    //console.log("product : ", product[0].price)
    //console.log("product : ", product[0].price)
    let cart_item = {
      "qnt": qnt,
      "shoppingCartId": this._shopping_cart.id,
      "productId": productId,
      "product": product[0]
    }
    let result = await this.api.createPostService(this.settings.baseUrl + '/cartItems/addCartItem', cart_item) as Array<CartItem>
    //console.log("result", result)
    this.getAllCartItemsOfShoppingCart(0);
  }

  async updateShoppingCartToDone() {
    await this.api.createPostService(this.settings.baseUrl + '/cartItems/updateShoppingCartToDone', this._shopping_cart) as Array<CartItem>
  }

  async updateQnt(cartItemId: Number, math: number) {
    let cart = this._cart_items.filter(cart_item => cart_item.id == cartItemId)
    let qnt = cart[0].qnt + math == 0 ? cart[0].qnt : cart[0].qnt + math;
    let price = this.products._all_products.filter(product => product.id == cart[0].productId)
    let cart_item = {
      "id": cartItemId,
      "qnt": qnt,
      "total_price": price[0].price * qnt
    }
    if (cart_item.qnt >= 1) {
      let result = await this.api.createPostService(this.settings.baseUrl + '/cartItems/updateQnt', cart_item) as Array<CartItem>
      //console.log("result", result)
      this.getAllCartItemsOfShoppingCart(0);
    }
  }

  async deleteCartItem(cart_item_id: Number) {
    let cart_item = {
      id: cart_item_id
    }
    await this.api.createPostService(this.settings.baseUrl + '/cartItems/deleteCartItem', cart_item) as Array<CartItem>
    this.getAllCartItemsOfShoppingCart(0);
  }

}
