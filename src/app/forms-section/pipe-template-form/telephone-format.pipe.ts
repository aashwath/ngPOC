import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'telephonePipe'
})

export class TelephoneFormatPipe implements PipeTransform {
	transform(value: string): string {
		if (value.length < 10) return;
		let numbers: Array<string> = value.split('');
		let firstSegment = numbers.slice(0, 3).join('');
		let secondSegment = numbers.slice(3, 6).join('');
		let thirdSegment = numbers.slice(6, 10).join('');
		return `+1 ${firstSegment}-${secondSegment}-${thirdSegment}`
	}
}
