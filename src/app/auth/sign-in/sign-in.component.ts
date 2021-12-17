import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export interface SignInForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  formGroup!: FormGroup;
  
  constructor(
    private auth: AuthService, 
    private router: Router
    ) { }

  signIn({ email, password }: SignInForm) {
    if (!email || !password) {
      return;
    }

    this.auth.signIn({ email, password })
              .then(() => this.router.navigate(['content']));
  }

  ngOnInit(): void {
  }

}
