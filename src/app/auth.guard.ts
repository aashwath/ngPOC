import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { AccessService } from './shared/access-management/access.service'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

	constructor(private access: AccessService, private router: Router) { }

	canActivate = (): Observable<boolean | UrlTree> =>
		this.access.userAccess.pipe(map(res => res ? res : this.router.parseUrl('home')));

	canLoad = (): Observable<boolean | UrlTree> => this.canActivate();
}
