import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, from } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';

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

  isSignInError?: boolean;

  constructor(
    private auth: AuthService, 
    private router: Router,
    private loadingService: LoadingService
    ) { }

  signIn({ email, password }: SignInForm) {

    this.isSignInError = false;

    if (!email || !password) {
      return;
    }

    // this.auth.signIn({ email, password })
    //           .then(() => this.router.navigate(['content']));
    
    this.loadingService.start();

    from(this.auth.signIn({ email, password }))
      .pipe(
        finalize(() => this.loadingService.stop())
        )
      .subscribe({
        next: () => this.router.navigate(['content']),
        error: (error) => {
          console.log(error['code']);
          this.isSignInError = true;
        }
      });
  }

  ngOnInit(): void {
  }

}
