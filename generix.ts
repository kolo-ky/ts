const returnString = <T>(value: T): string | undefined => {
	if(Array.isArray(value)) {
		return value.toString()
	}

	switch(typeof value) {
		case 'string':
			return value;
			break;
		case 'bigint':
		case 'number':
		case 'function':
		case 'boolean':
		case 'symbol':
			return value.toString();
			break;
		case 'object':
			return JSON.stringify(value);
		default:
			return undefined
	}
}