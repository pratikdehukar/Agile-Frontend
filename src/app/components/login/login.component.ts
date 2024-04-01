import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/auth-services/auth-services/auth.service';
import { StorageService } from 'src/app/storage-service/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;
  errorMessage: string | null = null;

  constructor(private service: AuthService, private fb: FormBuilder , private router: Router) {}

  async ngOnInit() {
    this.loginForm = this.fb.group({
      _email: [null, [Validators.required , Validators.email]],
      get email() {
        return this._email;
      },
      set email(value) {
        this._email = value;
      },
      password: [null, Validators.required],
    });
  }
  
  get formControls() {
    return this.loginForm.controls;
  }


  submitForm() {
    // this.submitted = true;
    // this.errorMessage = null;

    // if (this.loginForm.invalid) {
    //   return;
    // }

    

    this.service.login(this.loginForm.value).subscribe((res) => {
      console.log(res);
      if (res.userId != null) {
        const user = {
          id: res.userId,
          role: res.userRole,
        };
        console.log(user);
        StorageService.saveToken(res.jwt);
        StorageService.saveUser(user);
        this.router.navigate(['/projectSelection']);
        
      } else {
        console.log('Wrong credentials');
        this.errorMessage = "Incorrect email or password. Please try again."
      }
    });
  }
}
