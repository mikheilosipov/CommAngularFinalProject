import { FormGroup, ValidationErrors } from '@angular/forms';

// custom validator to check that two fields match
export function mustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup): ValidationErrors | null => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    // return null if controls haven't initialised yet
    if (!control || !matchingControl) {
      return null;
    }

    // return null if another validator has already found an error on the matchingControl
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return null;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }

    return null;
  };
}

// custom validator to check that entered email format is valid
export function validEmailFormat(controlName: string) {
  return (formGroup: FormGroup): ValidationErrors | null => {
    const control = formGroup.controls[controlName];

    // return null if control is not initialised yet
    if (!control) {
      return null;
    }

    // return null if another validator has already found an error on the control
    if (control.errors && !control.errors.isInvalidEmailFormat) {
      return null;
    }

    const isValidEmailFormat = String(control.value)
                                .toLowerCase()
                                .match(
                                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                );
    
    // set error on control if validation fails
    if (!isValidEmailFormat) {
      control.setErrors({ isInvalidEmailFormat: true });
    } else {
      control.setErrors(null);
    }

    return null;
  };
}