import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})

export class MyTableComponent implements OnInit {
  public product: any[] = [];
  public  productsList: any[] = [
  { id: 1, name : 'product 1', price : 100 },
  { id: 2, name : 'product 2', price : 200 },
  { id: 3, name : 'product 3', price : 300 },
  { id: 4, name : 'product 4', price : 400 },
  { id: 5, name : 'product 5', price : 500 },
  { id: 6, name : 'product 6', price : 600 },
  { id: 7, name : 'product 7', price : 700 },
  { id: 8, name : 'product 8', price : 800 },
  { id: 9, name : 'product 9', price : 900 },
  { id: 10, name : 'product 10', price : 1000 }
];

  constructor() {

  }

  public deleteProduct(product: any): void  {
    this.productsList = this.productsList.filter(p => p.id !== product.id);
    console.log([product.id]);
  }


  ngOnInit(): void {
  }


}
