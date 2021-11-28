import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { ProductsService } from '../../../core/services/product/products.service'

import { myValidators } from '../../../utils/validators'

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
      this.buildForm()
    }

  ngOnInit(): void {
  }

  saveForm(){
    const newForm = this.form.value
    this.productsService.createProduct(newForm)
    .subscribe(newProduct => {
      console.log(newProduct)
      this.router.navigate(['./admin/products'])
    })
    
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, myValidators.isPriceValid]],
      image: '',
      description: ['', [Validators.required]]
    })
  }
}
