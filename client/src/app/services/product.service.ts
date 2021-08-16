import { Injectable } from '@angular/core';
import { Product } from '../models/models';
import { ApiService } from './api';
import { SettingsService } from './settings.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  headers = new Headers();

  _products: Array<Product> = [];
  _product: Product = new Product;
  constructor(public api: ApiService, public settings: SettingsService, public users: UsersService) { }

  async getAllProducts() {
    this._products = await this.api.createGetService(this.settings.baseUrl + '/tasks/getAllProducts') as Array<Product>
    console.log("_products : ", this._products)
  }

  // async onSubmit() {
  //   this._task.userId = this.users._user.id;
  //   console.log("this._task", this._task)
  //   let result = await this.api.createPostService(this.settings.baseUrl + "/tasks/insertTask", this._task)
  //   this._task = new Task();
  //   this.getAllTasks();
  //   console.log("Submit : ", result)
  // }

  // async deleateTask(taskId: number) {
  //   console.log("taskId", taskId)
  //   let result = await this.api.createGetService(this.settings.baseUrl + "/tasks/deleteTask?id=" + taskId)
  //   this.getAllTasks();
  //   console.log("Submit : ", result)
  // }

  // async UpdateTask(taskId: number, donestatus: boolean) {
  //   let ob = {
  //     id: taskId,
  //     done: !donestatus
  //   }
  //   let result = await this.api.createPostService(this.settings.baseUrl + "/tasks/UpdateTask", ob)
  //   this.getAllTasks();
  //   console.log("Submit : ", result)
  // }

}
