abstract class Logger {
	abstract log(message: string): void;

	public printDate(date: Date): void {
		this.log(date.toString());
	}
}

class UserLogger extends Logger {
	public log(message: string): void {
		console.log(message);
	}

	public logWithDate(message: string): void {
		this.printDate(new Date());
		this.log(message);
	}
}