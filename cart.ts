class Product {
	private _id: number;
	private _name: string;
	private _price: number;

	public get id(): number {
		return this._id;
	}

	public get name(): string {
		return this._name;
	}

	public get price(): number {
		return this._price;
	}

	constructor(id: number, name: string, price: number) {
		this._id = id;
		this._name = name;
		this._price = price;
	}	
}

class Delivery {
	public date: Date;

	constructor(date: Date) {
		this.date = date;
	}
}

class HomeDelivery extends Delivery {
	public address: string;

	constructor(date: Date, address: string) {
		super(date);
		this.address = address;
	}
}

class PickupDelivery extends Delivery {
	public shopId: number;

	constructor(shopId: number) {
		super(new Date());
		this.shopId = shopId;
	}
}

type DeliveryOptions = HomeDelivery | PickupDelivery;

class Cart {
	private _products: Product[] = [];

	public delivery!: DeliveryOptions;

	public addProduct(product: Product): void {
		this._products.push(product);
	}

	public deleteProduct(id: number): void {
		this._products = this._products.filter(product => product.id !== id);
	}

	public getAmount(): number {
		return this._products.reduce((accumulator, product) => accumulator + product.price, 0 );		
	}

	public checkOut(): string {
		if(this._products.length && this.delivery) {
			return 'Ok';
		}

		return 'Not ok';
	}

	public setDelivery(delivery: DeliveryOptions): void {
		this.delivery = delivery;
	}
}

const product1 = new Product(0, 'Hleb', 100);
const product2 = new Product(1, 'Kolbasa', 200);
const product3 = new Product(2, 'Yogurt', 300);

const cart = new Cart();

cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

cart.deleteProduct(0);
cart.getAmount();

cart.setDelivery(new HomeDelivery(new Date(), 'some street'));
console.log(cart.checkOut());