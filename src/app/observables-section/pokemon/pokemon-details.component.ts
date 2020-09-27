import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-pokemon',
	template: `
		<div class="d-flex justify-content-start">
			<div class="mx-3">
				<img [src]="imageUrl" [alt]="pokemonName">
			</div>
			<div>
				<p><b>Rank: </b>{{pokemonRank}}</p>
				<p><b>Wieght: </b>{{pokemonWeight}}</p>
				<p><b>Height: </b>{{pokemonHeight}}</p>
				<p><b>Type: </b>{{pokemonType}}</p>
			</div>
		</div>
	`
})

export class PokemonDetailsComponent {
	@Input() imageUrl: string;
	@Input() pokemonName: string;
	@Input() pokemonRank: string;
	@Input() pokemonWeight: string;
	@Input() pokemonHeight: string;
	@Input() pokemonType: string;
}
