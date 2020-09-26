import { AccessService } from './access.service';

export class AccessManagement {

	access: AccessService;
	accessGranted: boolean;

	constructor(access: AccessService) {
		this.access = access;
		this.access.userAccess.subscribe(value => this.accessGranted = value);
	}

	grantAccessToUser(): void {
		this.access.updateUserAccess(true);
	}

	revokeUserAccess(): void {
		this.access.updateUserAccess(false);
	}
}
