import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Constants } from "../../shared/constants"
import { IPokemon, IPokemonDetails } from "./pokemon.model";

@Injectable({
	providedIn: 'root'
})

export class PokemonService {

	constructor(private http: HttpClient) { }

	getPokemon(): Observable<IPokemon> {
		return this.http.get<IPokemon>(Constants.PokeAPIEndpoint);
	}

	getPokemonDetails(name: string): Observable<IPokemonDetails> {
		return this.http.get<IPokemonDetails>(`${Constants.PokeAPIEndpoint}/${name}`)
	}
}
