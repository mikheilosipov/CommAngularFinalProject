import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MustMatchDirective } from './directives/must-match.directive';
import { ValidEmailFormatDirective } from './directives/valid-email-format.directive';
import { LoadingSpinnerComponent } from './loading/loading-spinner/loading-spinner.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    MustMatchDirective,
    ValidEmailFormatDirective,
    LoadingSpinnerComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateModule,
    MustMatchDirective,
    ValidEmailFormatDirective,
    LoadingComponent
  ]
})
export class SharedModule { }
