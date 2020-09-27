import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { passwordValidator } from './password-validator.directive';

describe('passwordValidator', () => {
	it('should validate if passwords are same', () => {
		let form = new FormGroup({
			password: new FormControl('foo'),
			confirmPassword: new FormControl('bar')
		}, { validators: passwordValidator });
		expect(form.errors.invalidPassword).toBeTruthy();
	})
})
