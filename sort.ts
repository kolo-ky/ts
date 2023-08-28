interface IBaseObject {
	id: number;
}

interface IUser extends IBaseObject {
	name: string;
}


const data: IUser[] = [
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 3, name: 'Надя' },
];

const sortFunc = <T extends IBaseObject>(data: T[], type: 'asc' | 'desc' = 'asc'): void => {
	data.sort((a, b) => {
		switch(type) {
			case 'desc':
				return b.id - a.id
			case 'asc':
			default:
				return a.id - b.id;
		}
		
	})
}