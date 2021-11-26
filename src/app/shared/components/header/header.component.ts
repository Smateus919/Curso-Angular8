import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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
