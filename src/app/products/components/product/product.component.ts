import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { Product } from '../../../core/models/product.model'

import { CartService } from '../../../core/services/cart/cart.service'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']    
}) 
export class ProductComponent implements OnInit {

    constructor(
        private cartService: CartService
    ) { }

    @Input() product: Product;

    @Output() numId: EventEmitter<any> = new EventEmitter;

    cartCounterNumber: number = 0
    @Output() numProdCart: EventEmitter<any> = new EventEmitter;

    ngOnInit(): void {
    }

    addCart(){
        console.log('Añadido al carrito')
        this.cartService.addCart(this.product)
    }

}