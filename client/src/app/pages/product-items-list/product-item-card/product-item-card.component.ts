import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/models';

@Component({
  selector: 'app-product-item-card',
  templateUrl: './product-item-card.component.html',
  styleUrls: ['./product-item-card.component.scss']
})
export class ProductItemCardComponent implements OnInit {

  @Input() p: Product = new Product();

  constructor() { }

  ngOnInit(): void {
  }

}
