interface IUsersInterface {
	users: number;
	getUsersInDataBase(): void;
}

class UsersService implements IUsersInterface {
	public users: number = 1000;

	@Catch()
	public getUsersInDataBase(): void {
		throw new Error('some problem in getUsersInDataBase...');
	}
}

function Catch(isTtrow: boolean = false) { return (
		target: Object,
		_: string | symbol,
		descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
	): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
		const method = descriptor.value;

		descriptor.value = (...args: any[]) => {
			try {
				return method?.apply(target);
			} catch (e: unknown) {
				if(e instanceof Error) {
					console.log(`Eror: ${e.message}`);

					if(isTtrow) {
						throw e;
					}
				}
			}
		}
	}
}

new UsersService().getUsersInDataBase();