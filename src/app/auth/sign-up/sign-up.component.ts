import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, from } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';

export interface SignUpForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  isSignUpError?: boolean;

  constructor(
    private auth: AuthService, 
    private router: Router,
    private loadingService: LoadingService
    ) { }

  signUp(form: NgForm) {
    
    this.isSignUpError = false;

    if (form.invalid) {
      return;
    }

    this.loadingService.start();

    from(this.auth.signUp(form.value))
      .pipe(finalize(() => this.loadingService.stop()))
      .subscribe({
        next: () => this.router.navigate(['content']),
        error: (error) => {
          console.log(error['code']);
          this.isSignUpError = true;
        }
      });
  }
  
  ngOnInit(): void {
  }

}
