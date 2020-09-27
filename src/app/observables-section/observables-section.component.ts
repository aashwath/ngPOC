import { Component, OnInit } from '@angular/core';
import { IPokemon, IPokemonDetails } from './pokemon/pokemon.model';
import { PokemonService } from './pokemon/pokemon.service';

@Component({
	selector: 'app-observable',
	templateUrl: './observables-section.component.html',
})

export class ObservablesSectionComponent implements OnInit {

	constructor(private pokemon: PokemonService) { }

	pokemonList: IPokemon;
	pokemonDetails: IPokemonDetails;
	implementations = [
		'Convert Observable to Promise',
		'Create Promises',
	]

	ngOnInit(): void {
		this.pokemon.getPokemon().subscribe(data => {
			this.pokemonList = data;
			this.getPokemonDetails(data.results[0].name)
		});
	}

	async getPokemonDetails(name: string) {
		this.pokemonDetails = await this.pokemon.getPokemonDetails(name).toPromise();
	}
}
