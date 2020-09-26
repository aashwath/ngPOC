import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pipe-template-form',
  templateUrl: './pipe-template-form.component.html',
  styleUrls: ['./pipe-template-form.component.scss']
})
export class PipeTemplateFormComponent {

  telelphoneNo: number;

  validateInput(event: any): void {
    if (isNaN(+event.key)) event.preventDefault()
  }

}
