import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ObservablesSectionComponent } from './observables-section.component';
import { PokemonDetailsComponent } from './pokemon/pokemon-details.component';
import { SharedModule } from '../shared/shared.module';

const routes = [
	{ path: '', component: ObservablesSectionComponent }
]

@NgModule({
	declarations: [
		ObservablesSectionComponent,
		PokemonDetailsComponent,
	],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes),
	]
})

export class ObservablesSectionModule { }
