export interface ProductsState {
	products: ProductFromDB[]
	isLoading: boolean
}

export interface Product {
	name: string
	price: number
	ingradients?: string[]
	img: string
	id: string
}

export interface ProductFromDB extends Omit<Product, 'price'> {
	price: Array<{ [key: string]: number }>
}

export enum ProductsTypes {
	PIZZAS = 'pizzas',
	DRINKS = 'drinks',
}
