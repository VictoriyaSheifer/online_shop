import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/models';
import { ApiService } from './api';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  headers = new Headers();

  _users: Array<User> = [];
  _user: User = new User();
  _loged_in_user: User = new User();
  _confirmPass: string = "";
  _log_in_email: string = ""
  _log_in_pass: string = ""
  first_step_register: string = "display-block"
  second_step_register: string = "display-none"
  regular_page: string = "display-block"
  loged_in_page: string = "display-none"

  email_validation_class: string = "form-control"
  constructor(
    public api: ApiService,
    public settings: SettingsService,
    private router: Router
  ) {
    if (this._loged_in_user === null) {
      this.regular_page = "display-block"
      this.loged_in_page = "display-none"
    }
  }

  async getAllUsers() {
    this._users = await this.api.createGetService(this.settings.baseUrl + '/users/getAllUsers') as Array<User>
    console.log("_users: ", this._users)
  }

  async onSubmitFirstStep() {
    if (this._user.password !== "" && this._confirmPass !== "" && this._user.email !== "") {
      if (this._user.password === this._confirmPass) {
        console.log("_user: ", this._user)
        console.log("_confirmPass: ", this._confirmPass)
        let result = await this.api.createGetService(this.settings.baseUrl + '/users/CheckIfExist?email=' + this._user.email) as Array<User>
        if (result === null) {
          console.log("free to go : ", result)
          this.first_step_register = "display-none";
          this.second_step_register = "display-block";
        }
        else {
          console.log("can not regisret again : ", result)
        }

      }
      else {
        console.log("passswords not matching")
      }
    }
    else {
      console.log("didnt filed all the inputs")
    }
  }

  async onSubmit() {
    if (this._user.first_name !== "" && this._user.last_name !== "" && this._user.city !== "" && this._user.street !== "") {
      console.log("_user: ", this._user)
      let result = await this.api.createPostService(this.settings.baseUrl + '/users/insertUser', this._user) as User
      console.log("user registered : ", result)
      this._loged_in_user = result
      console.log("this._loged_in_user : ", this._loged_in_user)
      this.regular_page = "display-none"
      this.loged_in_page = "display-block"
      this.router.navigate(['/loged-in']);
    }
    else {
      console.log("didnt filed all the inputs")
    }
  }

  async logOut() {
    this._loged_in_user = new User();
    this.router.navigate(['/']);

  }

  async logIn() {
    this._loged_in_user = new User();
    console.log("  _log_in_email _log_in_pass", this._log_in_email, this._log_in_pass)
    //create ob with the info
    let user_cridentials = {
      email: this._log_in_email,
      password: this._log_in_pass,
    }
    console.log("_log_in_email :::::", user_cridentials)
    //check if there is a user
    let user = await this.api.createGetService(this.settings.baseUrl + '/users/CheckIfExist?email=' + this._log_in_email) as Array<User>
    console.log("check if exists : ", user)
    if (user === null) {//wrong email
      //console.log("no user with this email")
      this.email_validation_class = "form-control is-invalid"
      //console.log("no log in for you !")
    }
    // else{
    //   let log_in_user = await Api.postRequest("/users/CheckCredentials", user_cridentials)
    //   if(log_in_user.data === "no found"){ //no user
    //       //wrong password
    //       //update style
    //       this.setState({email_validation_class :"form-control is-valid"})
    //       this.setState({password_validation_class :"form-control is-invalid"})
    //       console.log("no log in for you !")
    //   }
    //   else{
    //       //correct crieds
    //       this.setState({email_validation_class :"form-control is-valid"})
    //       this.setState({password_validation_class :"form-control is-valid"})
    //       localStorage.setItem("user", JSON.stringify(log_in_user.data.id))
    //       localStorage.setItem("role", JSON.stringify(log_in_user.data.role))
    //       this.props.updateLogedInUser(log_in_user.data.id);
    //       //check if this is the menager
    //       if(log_in_user.data.role)
    //           this.props.isAManeger(true);
    //       else
    //           this.props.isAManeger(false);

    //       console.log("loged in succssess")
    //       //empty inputs 
    //       this.useremaill.value = ""
    //       this.userpassword.value = ""
    //       this.hideModal()
    //       this.setState({
    //           reg_className : "floating-icons display-none",
    //           log_className : "floating-icons display-none",
    //           email_validation_class :"form-control",
    //           password_validation_class :"form-control",
    //       })
    //       //go to vacations
    //       window.location.replace("http://localhost:3000/vacations");
    //   }
  }

}
