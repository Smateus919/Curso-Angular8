import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { AuthService } from '../../../core/services/auth/auth.service'

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
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm()
   }

  ngOnInit(): void {
  }

  registerUser(event: Event){
    event.preventDefault()
    if(this.formRegister.valid){
      const value = this.formRegister.value
      this.authService.createUser(value.email, value.password)
      .then(()=>{
        this.router.navigate(['/admin/login'])
      })
    }
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
