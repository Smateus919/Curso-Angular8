import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { ProductsService } from '../../../core/services/product/products.service'

import { myValidators } from '../../../utils/validators'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup
  id: string
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
      this.buildForm()
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.id = params.id
      this.productsService.getProduct(this.id)
      .subscribe(product => {
        this.form.patchValue(product)
      })
    })
  }

  saveForm(){
    const newForm = this.form.value
    this.productsService.updateProduct(this.id, newForm)
    .subscribe(newProduct => {
      console.log(newProduct)
      this.router.navigate(['./admin/products'])
    })
    
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, myValidators.isPriceValid]],
      image: '',
      description: ['', [Validators.required]]
    })
  }

}
