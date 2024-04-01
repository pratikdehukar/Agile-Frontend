import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth-services/auth-services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  validateForm!: FormGroup;
  
  constructor(private service: AuthService,private fb: FormBuilder , private router: Router){}
  
  ngOnInit(){
    this.validateForm = this.fb.group({
      firstName:["", Validators.required],
      lastName:["", Validators.required],
      email:["", Validators.required],
      password:["", Validators.required],
      contactNumber:["", Validators.required],
      companyName:["", Validators.required],
      countryCode:["", Validators.required],
    });

  }

  register(){
    console.log(this.validateForm.value);
    this.service.signup(this.validateForm.value).subscribe((res) =>{
      console.log(res);
    })
    this.router.navigate(['/login']);
  }
  

  

}
