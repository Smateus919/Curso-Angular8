import { Component, OnInit, Output } from '@angular/core';

import { CartService } from '../../../core/services/cart/cart.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total = 0
  constructor(
    private cartService: CartService
  ) {
    this.cartService.cart$.subscribe(product => {
      console.log(product)
      this.total = product.length
    })
  }

  cartCounterNumber: number = 0

  ngOnInit(): void {

  }

  addCart(cant){
    this.cartCounterNumber = cant
    console.log(this.cartCounterNumber)

  }

  seeId(id){
    console.log('Producto numero', id)
  }

}
