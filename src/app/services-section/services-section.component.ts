import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NewsService } from './news/news.service';
import { INews, INewsItem } from './news/news.model';
import { NewsTileComponent } from './news/news-tile/news-tile.component';
import { ViewHostDirective } from '../shared/view-host.directive';
@Component({
	selector: 'app-services',
	templateUrl: './services-section.component.html',
	providers: [NewsService]
})

export class ServicesComponent {

	@ViewChild(ViewHostDirective) viewHost: ViewHostDirective;

	contentFetched: boolean;

	implementationList = [
		'Create service without injectable and return Json data',
		'Create service with HTTP and send object to component',
		'Create a component level and app level service',
		'Create Test Cases for service',
		'Component Factory'
	]


	constructor(private news: NewsService, private componentFactory: ComponentFactoryResolver
	) { }

	getNewsItems(): void {
		this.news.getNews().subscribe(news => {
			if (news) {
				this.displayNewsList(news.response);
				this.contentFetched = true;
			}
		});
	}

	private displayNewsList(news: INewsItem): void {

		const componentFactory = this.componentFactory.resolveComponentFactory(NewsTileComponent);

		const viewContainerRef = this.viewHost.viewContainerRef;
		viewContainerRef.clear();

		const componentRef = viewContainerRef.createComponent(componentFactory);
		componentRef.instance.newsItem = news;
	}
}
