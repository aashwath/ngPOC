import { SignupFormComponent } from './signup-form.component';

describe('SignUpFormComponent', () => {
	it('should be valid', () => {
		let component = new SignupFormComponent();
		component.name.setValue('foo');
		component.email.setValue('baz@tre.com');
		component.password.setValue('bar');
		component.confirmPassword.setValue('bar');
		expect(component.signUpForm.valid).toBeTruthy();
	})
})
