import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../password-validator.directive';

@Component({
	selector: 'app-signup-form',
	templateUrl: './signup-form.component.html',
	styleUrls: ['./signup-form.component.scss']
})

export class SignupFormComponent {

	formSubmitted: boolean;

	signUpForm = new FormGroup({

		name: new FormControl('', [Validators.required]),

		email: new FormControl('', [Validators.email, Validators.required]),

		password: new FormControl('', [Validators.maxLength(8), Validators.required]),

		confirmPassword: new FormControl('', [Validators.maxLength(8), Validators.required]),

		address: new FormControl('')
	}, { validators: passwordValidator });

	get name(): AbstractControl {
		return this.signUpForm.controls.name;
	}

	get email(): AbstractControl {
		return this.signUpForm.controls.email;
	}

	get password(): AbstractControl {
		return this.signUpForm.controls.password;
	}

	get confirmPassword(): AbstractControl {
		return this.signUpForm.controls.confirmPassword
	}

	get address(): AbstractControl {
		return this.signUpForm.controls.address;
	}

	get passwordFieldsTouchedandDirty(): boolean {
		return this.password.touched && this.password.dirty && this.confirmPassword.dirty && this.confirmPassword.touched;
	}

	onSignUp(): void {
		this.formSubmitted = true;
	}

}
