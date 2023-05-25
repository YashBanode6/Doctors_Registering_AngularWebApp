import { AbstractControl } from '@angular/forms';

export function passwordValid(password: string, conform_password: string) {
  return function (form: AbstractControl) {
    const passwordValue = form.get(password)?.value;
    const conformpasswordValue = form.get(conform_password)?.value;

    if (passwordValue === conformpasswordValue) {
      return null;
    }
    return { passwordMisMatchError: true };
  };
}
