interface IUsersService {
	users: number;
	getUsersInDataBase(): number;
}

type CreatedAt = {
	createdAt: Date;
}

@CreatedAt
class UserService implements IUsersService {
	public users = 1000;

	public getUsersInDataBase(): number {
		return this.users;
	}
}

function CreatedAt< T extends { new (...args: any[]): {} } >(constructor: T) {
	return class extends constructor {
		createdAt = new Date();
	}
}

console.log((new UserService() as IUsersService & CreatedAt).createdAt);