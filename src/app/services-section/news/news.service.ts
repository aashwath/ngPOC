import { HttpClient } from '@angular/common/http';
import { Constants } from '../../shared/constants'
import { Observable } from 'rxjs';
import { INews } from './news.model';
import { Injectable } from '@angular/core';

@Injectable()

export class NewsService {

	constructor(private http: HttpClient) { }

	getNews(): Observable<INews> {
		return this.http.get<INews>(Constants.NewsAPIEndpoint)
	}
}
