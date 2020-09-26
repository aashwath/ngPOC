import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[viewHost]',
})
export class ViewHostDirective {
	constructor(public viewContainerRef: ViewContainerRef) { }
}
