import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category, Product } from '../models/models';
import { ApiService } from './api';
import { SettingsService } from './settings.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  headers = new Headers();
  _all_products: Array<Product> = [];
  _products: Array<Product> = [];
  _amountOfProducts: number = 0;
  _categories: Array<Category> = [];
  _product: Product = new Product;
  _menager_product: Product = new Product;
  _chosen_category: Category = new Category();
  _searchProuductInput: string = "";
  _cart_items: Array<Product> = [];
  meneger_modal_title: string = "";

  editModalclose: any
  addModalclose: any

  validate_name: string = ""
  validate_price: string = ""
  validate_description: string = ""
  validate_categoryId: string = ""

  filesToUpload: any
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  imageSrc: string = '';


  constructor(public api: ApiService, public settings: SettingsService, public users: UsersService) {
    this.getNumberOfProducts()

  }

  async getAllProducts() {
    this._all_products = await this.api.createGetService(this.settings.baseUrl + '/products/getAllProducts') as Array<Product>
    this._products = this._all_products
  }

  async getNumberOfProducts() {
    let prod = await this.api.createGetService(this.settings.baseUrl + '/products/getNumberOfProducts') as any
    this._amountOfProducts = prod.count
  }
  async getProductsByCategory() {
    this._products = await this.api.createPostService(this.settings.baseUrl + '/products/getProductsByCategory', this._chosen_category) as Array<Product>
  }

  async getAllCategories() {
    this._categories = await this.api.createGetService(this.settings.baseUrl + '/categories/getAllCategories') as Array<Category>
    this._chosen_category = this._categories[0];
    this.updateCategory(this._chosen_category)
  }

  updateCategory(catChosen: Category) {
    this._chosen_category = catChosen;
    //console.log("this._chosen_category", this._chosen_category)
    this.getProductsByCategory();
  }

  onChangeProductSearch() {
    //console.log("this._searchProuductInput", this._searchProuductInput)
    this._products = this._all_products.filter(product => product.name.toLowerCase().includes(this._searchProuductInput.toLowerCase()))
    //console.log("this._products", this._products)
  }

  editProduct(id: Number) {
    this.meneger_modal_title = "Edit Product"
    let productInCart: Product = this._all_products.find(product => product.id == id) as Product
    this._menager_product = productInCart

  }

  async updateProduct() {
    if (this._menager_product.name != "" && this._menager_product.description != "" && this._menager_product.price != 0 && this._menager_product.categoryId != 0) {
      await this.api.createPostService(this.settings.baseUrl + '/products/editProducts', this._menager_product)
      this.editModalclose.nativeElement.click();
      this.getAllProducts();
      this.getProductsByCategory();
    }
    else {
      this._menager_product.name == "" ? this.validate_name = "is-invalid" : this.validate_name = ""
      this._menager_product.price == 0 ? this.validate_price = "is-invalid" : this.validate_price = ""
      this._menager_product.description == "" ? this.validate_description = "is-invalid" : this.validate_description = ""
      this._menager_product.categoryId == 0 ? this.validate_categoryId = "is-invalid" : this.validate_categoryId = ""
    }
  }

  addProduct() {
    this.meneger_modal_title = "Add Product"
    this._menager_product = new Product();
  }
  /*
this function updates the picture to the server
*/
  async upload() {
    const formData = new FormData();
    const files = this.filesToUpload;
    //if there is more then one picture 
    for (let i = 0; i < files.length; i++) {
      formData.append("uploads[]", files[i]);
    }
    //console.log("formData :", formData)
    let res = await this.api.createPostService(this.settings.baseUrl + '/upload', formData)
    //console.log("UPLOAD :", res)
  }

  onFileChange(event: any) {
    //console.log("event.target.files", event.target.files)
    this.filesToUpload = event.target.files
  }

  async insertProducts() {
    if (this._menager_product.name != "" && this._menager_product.description != "" && this._menager_product.price != 0 && this._menager_product.categoryId != 0) {
      //console.log("this._menager_product.image ::: ", this._menager_product.image)
      this._menager_product.image = "defult.jpg"
      // this.upload()
      await this.api.createPostService(this.settings.baseUrl + '/products/insertProducts', this._menager_product)
      this.addModalclose.nativeElement.click();
      this.getAllProducts();
      this.getProductsByCategory();
    }
    else {
      this._menager_product.name == "" ? this.validate_name = "is-invalid" : this.validate_name = ""
      this._menager_product.price == 0 ? this.validate_price = "is-invalid" : this.validate_price = ""
      this._menager_product.description == "" ? this.validate_description = "is-invalid" : this.validate_description = ""
      this._menager_product.categoryId == 0 ? this.validate_categoryId = "is-invalid" : this.validate_categoryId = ""
    }
  }

  cleanModalinputs() {
    this.validate_name = ""
    this.validate_price = ""
    this.validate_description = ""
    this.validate_categoryId = ""
  }
}
