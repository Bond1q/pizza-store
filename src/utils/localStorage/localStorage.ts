class LocalStorage {
	private key = 'cart';
	setProducts(products: string) {
		localStorage.setItem(this.key, products);
	}
	getProducts(): string {
		if (localStorage.getItem(this.key)) return localStorage.getItem(this.key)!;
		return ''
	}
}

export default new LocalStorage;