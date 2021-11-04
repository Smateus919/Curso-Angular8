import { Component, OnInit } from '@angular/core';

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

  cartCounter(){
    this.cartCounterNumber++
    console.log(this.cartCounterNumber)
  }

}
