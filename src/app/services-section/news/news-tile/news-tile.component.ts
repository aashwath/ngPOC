import { Component, Input } from "@angular/core";
import { INewsItem } from '../news.model';

@Component({
	selector: 'app-news-tile',
	templateUrl: './news-tile.component.html',
	styleUrls: ['./news-tile.component.scss']
})

export class NewsTileComponent {
	@Input() newsItem: INewsItem;
}
