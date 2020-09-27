export interface INews {
	response: INewsItem
}

export interface INewsItem {
	status: string;
	userTier: string,
	total: number,
	startIndex: number,
	pageSize: number,
	currentPage: number,
	pages: number,
	orderBy: string,
	results: IArticle[]
}

export interface IArticle {
	id: string,
	type: string,
	sectionId: string,
	sectionName: string,
	webPublicationDate: string,
	webTitle: string,
	webUrl: string,
	apiUrl: string,
	isHosted: false,
	pillarId: string,
	pillarName: string,
}

