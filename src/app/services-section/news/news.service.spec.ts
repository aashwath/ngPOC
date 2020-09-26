import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { INews } from './news.model';
import { NewsService } from './news.service';

describe('NewsService', () => {
	it('should fetch news data', () => {
		let mockResponse = {
			status: 'OK',
			totalResults: 0,
			articles: []
		}
		let http: HttpClient;
		let service = new NewsService(http);
		let response: INews;
		spyOn(service, 'getNews').and.returnValue(of(mockResponse));
		service.getNews().subscribe(res => response = res);
		expect(response).toEqual(mockResponse);
	})
})
