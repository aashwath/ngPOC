import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class AccessService {
	private $USER_HAS_ACCESS: BehaviorSubject<boolean> = new BehaviorSubject(false);

	public get userAccess(): Observable<boolean> {
		return this.$USER_HAS_ACCESS.asObservable()
	}

	public updateUserAccess(value: boolean): void {
		this.$USER_HAS_ACCESS.next(value);
	}
}
