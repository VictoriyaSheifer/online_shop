
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
  
  constructor(id?: number,first_name?: string,last_name?: string,email?: string,password?: string,role?: number,city?: string,street?: string) {
    this.id = id || 0;
    this.first_name = first_name || "";
    this.last_name = last_name || "";
    this.email = email || "";
    this.password = password || "";
    this.role = role || 0 ;
    this.city = city || "";
    this.street = street || "";
  }
}

export class Product {
  id: number = 0
  name: string = ""
  price: number = 0
  image: string = ""
  categoryId: number = 0

  constructor(id?: number, name?: string, price?: number, image?: string, categoryId?: number) {
    this.id = id || 0;
    this.price = price || 0;
    this.name = name || "";
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