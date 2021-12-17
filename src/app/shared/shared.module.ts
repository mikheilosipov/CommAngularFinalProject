import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MustMatchDirective } from './directives/must-match.directive';
import { ValidEmailFormatDirective } from './directives/valid-email-format.directive';



@NgModule({
  declarations: [
    MustMatchDirective,
    ValidEmailFormatDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateModule,
    MustMatchDirective,
    ValidEmailFormatDirective
  ]
})
export class SharedModule { }
