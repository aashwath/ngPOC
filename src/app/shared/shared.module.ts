import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info-section/info.component';
import { HomeComponent } from './home-page/home-page.component';

@NgModule({
	declarations: [InfoComponent, HomeComponent],
	imports: [CommonModule],
	exports: [InfoComponent, HomeComponent]
})

export class SharedModule { }
