import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor() { }

  orders = [
    {
      id: '1',
      product: 'Camisa',
      cant: 15,
      totalValue: 1200000
    },
    {
      id: '2',
      product: 'Mug',
      cant: 8,
      totalValue: 1200000
    },
    {
      id: '3',
      product: 'sticker',
      cant: 60,
      totalValue: 5000000
    },
    {
      id: '4',
      product: 'Camisa',
      cant: 72,
      totalValue: 1200000
    },
    {
      id: '5',
      product: 'Mug',
      cant: 65,
      totalValue: 1200000
    },
    {
      id: '6',
      product: 'sticker',
      cant: 90,
      totalValue: 5000000
    }
  ]
  displayedColumns = ['id', 'product', 'cant', 'totalValue'];

  ngOnInit(): void {
    
  }

}
