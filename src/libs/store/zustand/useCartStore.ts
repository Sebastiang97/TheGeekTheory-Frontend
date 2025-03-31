import { itemCard } from '@/Models/itemCart'
import { ProductPay } from '@/Models/ProductsPay'
import { create } from 'zustand'

interface Props<T> {
    items: itemCard<T>[],
    addProduct: (product: ProductPay, quantity:number) => void
    deleteProduct: (id: string)=>void
}

export const useCartStore = create<Props<ProductPay>>(
    (set, get) => ({
        items: [],
        addProduct: (product: ProductPay, quantity: number) =>{
            const items = get().items
            if(items.length){
                let isEqual = false
                items.map(i => {
                    if(i.item.id === product.id){
                        isEqual = true
                        i.quantity = quantity
                    }
                })

                if(!isEqual){
                    items.push({
                        item: product,
                        quantity: quantity
                    })
                }
            }
            if(!items.length){
                items.push({
                    item: product,
                    quantity: quantity
                })
            }
            set({items})
        },
        deleteProduct: (id: string)=>{
            let items = get().items
            items = items.filter(product => product.item.id !== id)
            set({items})
        }

    })
)