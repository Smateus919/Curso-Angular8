import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup
  hide= true

  constructor(
    private formBuilder: FormBuilder,
    private router: Router 
  ) {
    this.buildForm()
   }

  ngOnInit(): void {
  }

  registerUser(event: Event){
    event.preventDefault()
    console.log(this.formRegister.value)
  }

  private buildForm(){
    this.formRegister = this.formBuilder.group({
      name: ['', [Validators.required]],
      user: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

}
