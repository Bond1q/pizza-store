import { UnorderedProducts } from '../types/cart'
class LocalStorage {
   private key = ''
   constructor(key: string) {
      this.key = key || 'default'
   }

   setData(data: string) {
      localStorage.setItem(this.key, data)
   }
   getData(): string {
      return localStorage.getItem(this.key) || ''
   }

   setUnorderedProducts(totalPrice: number, productsCount: number, products: UnorderedProducts[]) {
      this.setData(JSON.stringify({ totalPrice, productsCount, products }))
   }

   clearStorage() {
      this.setData('')
   }
}

export default LocalStorage
