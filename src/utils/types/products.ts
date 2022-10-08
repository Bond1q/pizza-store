export interface ProductsState {
   products: Product[]
   isLoading: boolean
}

export interface Product {
   name: string
   price: number
   ingradients?: string[]
   img: string
   id: string
}

export enum ProductsTypes {
   PIZZAS = 'pizzas',
   DRINKS = 'drinks',
}
