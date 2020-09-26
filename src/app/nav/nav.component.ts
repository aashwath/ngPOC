import { Component } from '@angular/core'
import { AccessManagement } from '../shared/access-management/access-managment.base';
import { AccessService } from '../shared/access-management/access.service';
@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})

export class NavComponent extends AccessManagement {
	constructor(access: AccessService) {
		super(access)
	}

	get isNavbarBottom(): boolean {
		return window.innerWidth <= 768
	}
}
