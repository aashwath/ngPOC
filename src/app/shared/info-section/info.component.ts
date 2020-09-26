import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-info',
	template: `
	<div class="text-center my-5" *ngIf="!showJumbotron">
		<span class="d-block d-lg-inline border border-dark  rounded-lg px-3 py-2">click <a href="javascript:void(0)" (click)="showJumbotron = true">here</a> to know what this section implements</span>
	</div>	
	<div class="jumbotron p-3 border border-dark mt-5"  *ngIf="showJumbotron">
		<div class="d-flex justify-content-between">
			<h5>This section implements:</h5>
			<button type="button" class="close" aria-label="Close" (click)="showJumbotron = false">
  			<span aria-hidden="true">&times;</span>
			</button>
		</div>
		<ol>
			<li class="text-left" *ngFor="let item of listOfImplementations">{{item}}</li>
		</ol>
	</div>`,
	// styles: ['@media (max-width: 768px){span.border-dark {border: none !important}}']
})

export class InfoComponent {
	@Input() listOfImplementations: string[];
	showJumbotron: boolean = false;
}
