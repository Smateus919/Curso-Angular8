import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { Product } from '../../../product.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']    
}) 
export class ProductComponent implements OnInit {

    constructor() { }

    @Input() product: Product;

    @Output() numId: EventEmitter<any> = new EventEmitter;

    cartCounterNumber: number = 0
    @Output() numProdCart: EventEmitter<any> = new EventEmitter;

    ngOnInit(): void {
    }

    addCart(){
        this.cartCounterNumber++
        console.log('Añadido al carrito')
        this.numId.emit(this.product.id)
        this.numProdCart.emit( this.cartCounterNumber)
    }

}