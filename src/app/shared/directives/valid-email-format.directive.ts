import { Directive, Input } from '@angular/core';
import { 
  NG_VALIDATORS,
  Validator,
  ValidationErrors,
  FormGroup, 
} from '@angular/forms';

import { validEmailFormat } from '../utils/validators.fn';

@Directive({
  selector: '[validEmailFormat]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidEmailFormatDirective, multi: true },
  ],
})
export class ValidEmailFormatDirective implements Validator {
  @Input('validEmailFormat') validEmailFormat: string = '';
  
  constructor() { }

  validate(formGroup: FormGroup): ValidationErrors | null {
    return validEmailFormat(this.validEmailFormat)(formGroup);
  }
}
