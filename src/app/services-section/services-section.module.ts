import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services-section.component';
import { NewsTileComponent } from './news/news-tile/news-tile.component';
import { CommonModule } from '@angular/common';
import { ViewHostDirective } from '../shared/view-host.directive';
import { SharedModule } from '../shared/shared.module';

const routes = [
	{ path: '', component: ServicesComponent }
]
@NgModule({
	declarations: [
		ServicesComponent,
		NewsTileComponent,
		ViewHostDirective,
	],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes),
	]
})

export class ServicesSectionModule { }
