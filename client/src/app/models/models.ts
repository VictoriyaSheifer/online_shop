import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface"
import { ProductsService } from "../services/product.service"

export class User {
  id: number = 0
  name: string = ""
  first_name: string = ""
  last_name: string = ""
  email: string = ""
  password: string = ""
  role: number = 0
  city: string = ""
  street: string = ""

  constructor(id?: number, first_name?: string, last_name?: string, email?: string, password?: string, role?: number, city?: string, street?: string) {
    this.id = id || 0;
    this.first_name = first_name || "";
    this.last_name = last_name || "";
    this.email = email || "";
    this.password = password || "";
    this.role = role || 0;
    this.city = city || "";
    this.street = street || "";
  }
}

export class Product {
  id: number = 0
  name: string = ""
  price: number = 0
  image: string = ""
  description: string = ""
  categoryId: number = 0
  discount_price: number = 0

  constructor(id?: number, name?: string, description?: string, price?: number, discount_price?: number, image?: string, categoryId?: number) {
    this.id = id || 0;
    this.price = price || 0;
    this.discount_price = discount_price || 0;
    this.name = name || "";
    this.description = description || "";
    this.image = image || "";
    this.categoryId = categoryId || 0;
  }
}

export class Category {
  id: number = 0
  name: string = ""

  constructor(id?: number, name?: string) {
    this.id = id || 0;
    this.name = name || "";
  }
}


export class CartItem {
  id: Number = 0
  total_price: number = 0
  qnt: number = 0
  productId: number = 0
  shoppingCartId: number = 0
  product: Product = new Product();

  constructor(id?: number, total_price?: number, qnt?: number, productId?: number, shoppingCartId?: number, product?: Product) {
    this.id = id || 0;
    this.total_price = total_price || 0;
    this.qnt = qnt || 0;
    this.shoppingCartId = shoppingCartId || 0;
    this.productId = productId || 0;
    this.product = product || new Product();
  }
}


export class ShoppingCart {
  id: number = 0
  userId: number = 0
  status: string = ""
  createdAt: string = ""
  constructor(id?: number, userId?: number, status?: string, createdAt?: string) {
    this.id = id || 0;
    this.userId = userId || 0;
    this.status = status || "";
    this.createdAt = createdAt || "";
  }
}

export class Order {
  id: number = 0
  total_price: number = 0
  city: string = ""
  street: string = ""
  shippment_date: string = ""
  card_number: string = ""
  shoppingCartId: number = 0
  userId: number = 0
  createdAt: string = ""

  constructor(id?: number, total_price?: number, city?: string, street?: string, shippment_date?: string, createdAt?: string, card_number?: string, shoppingCartId?: number, userId?: number) {
    this.id = id || 0;
    this.total_price = total_price || 0;
    this.city = city || "";
    this.street = street || "";
    this.shippment_date = shippment_date || "";
    this.card_number = card_number || "";
    this.shoppingCartId = shoppingCartId || 0;
    this.userId = userId || 0;
    this.createdAt = createdAt || "";
  }
}