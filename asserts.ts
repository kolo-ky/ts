interface User {
	name: string;
}

function assertUser(obj: unknown): asserts obj is User {
	if (typeof obj === 'object' && !!obj  && 'name' in obj) {
		return;
	}

	throw new Error("Not User");
}

const someObj = {};

assertUser(someObj);
someObj.name = 'Вася';