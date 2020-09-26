export interface INews {
	status: string;
	totalResults: number;
	articles: IArticle[];
}

export interface IArticle {
	source: ISource;
	author: string;
	title: string;
	description: string;
	url: string;
	publishedAt: string;
	content: string;
}

export interface ISource {
	id: number;
	name: string;
}
