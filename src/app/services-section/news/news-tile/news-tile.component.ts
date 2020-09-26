import { Component, Input } from "@angular/core";
import { INews } from '../news.model';

@Component({
	selector: 'app-news-tile',
	templateUrl: './news-tile.component.html',
	styleUrls: ['./news-tile.component.scss']
})

export class NewsTileComponent {
	@Input() newsItem: INews;
	@Input() isLoading: boolean;
}
