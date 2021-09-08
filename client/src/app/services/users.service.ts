import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem, ShoppingCart, User } from '../models/models';
import { ApiService } from './api';
import { CartService } from './cart.service';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  headers = new Headers();
  _user: User = new User();
  _loged_in_user: User = new User();
  _is_a_menager: boolean = false;
  _confirmPass: string = "";


  _log_in_email: string = ""
  _log_in_pass: string = ""

  first_step_register: string = "display-block"
  second_step_register: string = "display-none"

  email_validation_class: string = "form-control"
  pass_validation_class: string = "form-control"

  _user_loged_in_page_number: Number = 0
  _user_loged_in_pages: Array<any> = [
    {
      number: 1,
      page_name: "Shop",
    },
    {
      number: 2,
      page_name: "My Orders",
    },
  ]
  closebutton: any


  constructor(
    public api: ApiService,
    public settings: SettingsService,
    private router: Router,
  ) {
    // get login information from previous session
    let user = localStorage.getItem("user")
    let role = localStorage.getItem("role")

    // //console.log("userId Log-in: ", user)
    // //console.log("role Log-in: ", role)
    // update the general varubles
    this._loged_in_user = user ? JSON.parse(user) : new User();
    if (role == "1")
      this._is_a_menager = true;
    else
      this._is_a_menager = false;
    //console.log("this._loged_in_user :::::: ", this._loged_in_user)
    //console.log("role :::::: ", role)
    //console.log("is manegar :::::: ", this._is_a_menager)
  }

  async onSubmitFirstStep() {
    if (this._user.password !== "" && this._confirmPass !== "" && this._user.email !== "") {
      if (this._user.password === this._confirmPass) {
        // //console.log("_user: ", this._user)
        // //console.log("_confirmPass: ", this._confirmPass)
        let result = await this.api.createGetService(this.settings.baseUrl + '/users/CheckIfExist?email=' + this._user.email) as Array<User>
        if (result === null) {
          // //console.log("free to go : ", result)
          this.first_step_register = "display-none";
          this.second_step_register = "display-block";
        }
        else {
          // //console.log("can not regisret again : ", result)
        }

      }
      else {
        // //console.log("passswords not matching")
      }
    }
    else {
      // //console.log("didnt filed all the inputs")
    }
  }

  async onSubmit() {
    if (this._user.first_name !== "" && this._user.last_name !== "" && this._user.city !== "" && this._user.street !== "") {
      // //console.log("_user: ", this._user)
      let result = await this.api.createPostService(this.settings.baseUrl + '/users/insertUser', this._user) as User
      // //console.log("user registered : ", result)
      this._loged_in_user = result;
      //save in locallhost 
      localStorage.setItem("user", JSON.stringify(this._loged_in_user))
      localStorage.setItem("role", JSON.stringify(this._loged_in_user.role))
      // //console.log("this._loged_in_user : ", this._loged_in_user)
      this.router.navigate(['/loged-in']);

    }
    else {
      // //console.log("didnt filed all the inputs")
    }
  }

}
