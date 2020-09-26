import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms'

export const passwordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
	let passwordControl = control.get('password');
	let confirmPasswordControl = control.get('confirmPassword');

	let isError = passwordControl.value && confirmPasswordControl.value && passwordControl.value !== confirmPasswordControl.value;

	return isError ? { invalidPassword: true } : null;
}
