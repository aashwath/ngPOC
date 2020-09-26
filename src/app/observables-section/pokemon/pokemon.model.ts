export interface IPokemon {
	count: number,
	next?: string,
	previous?: string,
	results: IResults[]
}

export interface IResults {
	name: string,
	url: string,
}

export interface IPokemonDetails {
	id: number,
	name: string,
	base_experience: number,
	height: number,
	is_default: boolean,
	order: number,
	weight: number,
	moves: IMoves[],
	sprites: {
		front_default: string;
	}
	types: ITypes[]
}

export interface IMoves {
	move: IResults[]
}

export interface ITypes {
	slot: number,
	type: IResults
}
