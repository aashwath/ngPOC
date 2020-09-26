import { Component } from '@angular/core';
import { AccessManagement } from '../access-management/access-managment.base';
import { AccessService } from '../access-management/access.service';

@Component({
	selector: 'app-home',
	template: `
		<app-info [listOfImplementations]="implementations"></app-info>
		<div class="my-5 text-center">
			<ng-template [ngIf]="!accessGranted" [ngIfElse]="accessedView">
				<h1 class="display-4 my-3">Click on the button to grant yourself access.</h1>
				<button class="btn btn-lg btn-dark"
								(click)="grantAccessToUser()">Enter
				</button>
			</ng-template>
			<ng-template #accessedView>
				<h1 class="display-4 my-3">Alright, you can now browser through each section of the POC!</h1>
				<p>If you want access revoked, click on the "Exit" button in the navbar</p>
			</ng-template>
		</div>`
})

export class HomeComponent extends AccessManagement {

	implementations = [
		'Create different type of observable like subject (Nav and Home components)',
		'Explore RXJS liberary (in AuthGuard)',
		'Create routing configuration for navigation (AppRoutingModule)',
		'Route Gurads with all parameters functionality',
		'Create child routes (AppRoutingModule)',
		'Lazy load modules (AppRoutingModule)',
		'Write Unit test cases for component (SignupFormComponent)'
	]

	constructor(access: AccessService) {
		super(access)
	}
}
