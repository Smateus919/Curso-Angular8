import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup
  hide= true

  constructor(
    private formBuilder: FormBuilder,
    private router: Router 
  ) {
    this.buildForm()
   }

  ngOnInit(): void {
  }

  checkLogin(event: Event){
    event.preventDefault()
    const formValidate = this.formLogin
    if(formValidate.get('password').value == 'angular8'){
      this.router.navigate(['./admin'])
      return console.log('Successful')
    }else{
      console.log('Failed')
      return this.formLogin.invalid
    }
  }

  private buildForm(){
    this.formLogin = this.formBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

}
