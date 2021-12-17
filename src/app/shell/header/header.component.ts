import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  get isLoggedIn(): boolean {
    return this.auth.isLoggedIn;
  }
  
  get isEn(): boolean {
    return this.isCurrentLanguage('en');
  }

  get isKa(): boolean {
    return this.isCurrentLanguage('ka');
  }

  // locale = Locale;
  // selectedLocale: Locale | null = null;

  constructor(
    private router: Router,
    private translateService: TranslateService,
    private auth: AuthService
    ) {
      //this.selectedLocale = this.translateService.defaultLang as Locale;
    }

  ngOnInit(): void {
  }

  toSignIn() {
    this.router.navigate(['sign-in']);
  }

  toSignUp() {
    this.router.navigate(['sign-up']);
  }

  signOut() {
    this.auth.signOut().then(() => {
      this.router.navigate(['sign-in'])
    });
  }

  toEn() {
    this.translateService.setDefaultLang('en');
  }

  toKa() {
    this.translateService.setDefaultLang('ka');
  }

  // public onLocaleSelected() {
  //   this.translateService.setDefaultLang(this.selectedLocale as string);
  //   //console.log(this.selectedLocale);
  // }

  private isCurrentLanguage(lang: string): boolean {
    const defaultLang = this.translateService.defaultLang;
    const currentLang = this.translateService.currentLang;

    return currentLang ? currentLang === lang : defaultLang === lang;
  }
}

// enum Locale {
//   En = 'en',
//   Ka = 'ka'
// }