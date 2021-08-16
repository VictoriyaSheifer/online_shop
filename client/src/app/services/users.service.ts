import { Injectable } from '@angular/core';
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

  constructor(public api: ApiService, public settings: SettingsService) { }

  async getAllUsers() {
    this._users = await this.api.createGetService(this.settings.baseUrl + '/users/getAllUsers') as Array<User>
    console.log("_users: ", this._users)
  }

}
