import { Component } from '@angular/core';

@Component({
	selector: 'app-forms',
	template: `
		<app-info [listOfImplementations]="implementations"></app-info>
		<ul class="nav nav-tabs my-5"
				id="tabs"
				role="tablist">
			<li class="nav-item" role="presentation">
				<a class="nav-link"
					data-toggle="tab"	
					role="tab"
					aria-controls="template-form-tab"
					routerLink="pipe-template-form"
					routerLinkActive="active">Template Form</a>
			</li>
			<li class="nav-item" role="presentation">
				<a class="nav-link"
					data-toggle="tab"
					role="tab"
					aria-controls="profile"
					routerLink="signup-reactive-form"
					routerLinkActive="active">Reactive Form</a>
			</li>
		</ul>
		<div class="tab-content" id="tabConent">
			<router-outlet></router-outlet>
		</div>`
})

export class FormsSectionComponent {
	implementations = [
		'Create Reactive and template driven forms',
		'Create custom validations for forms (passwordValidator)',
		'Create unit test cases for custom validations',
		'How to use ngDocheck (passwordValidator)',
		'Create custom Pipe which should phone No in US format',
		'Create a directive Which should display red border on excedding 10 characters',
	]
}
