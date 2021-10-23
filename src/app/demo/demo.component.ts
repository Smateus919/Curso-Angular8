import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'platzi-store';

  items = ['Pera', 'Manzana', 'Naranja'] 

  

  addItem(){
    this.items.push(this.title)
  }
  rmItem(index: number){
    this.items.splice(index, 1)
  }

}
