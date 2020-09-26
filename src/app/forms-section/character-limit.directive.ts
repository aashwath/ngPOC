import { Directive, DoCheck, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appCharLimit]'
})

export class CharacterLimitDirective implements DoCheck {
	constructor(private el: ElementRef, private renderer: Renderer2) { }

	ngDoCheck() {
		let charCount: number = this.el.nativeElement.value.length;

		if (charCount > 40)
			this.renderer.addClass(this.el.nativeElement, 'limit-exceeded')
		else this.renderer.removeClass(this.el.nativeElement, 'limit-exceeded');
	}
}
