import { Operation, OPERATION_COUNTER } from '@/constants/Counter.constants'
import { ProductPay } from '@/Models/ProductsPay'
import { create } from 'zustand'


interface Props<T> {
    currentCounter: number
    setCounter: (operation:Operation) => void
    cleanCounter: () => void
}

export const useCounterStore = create<Props<ProductPay>>(
    (set, get) => ({
       currentCounter: 1,
       setCounter:(operation:Operation) => {
        let counter = get().currentCounter
        
        if(OPERATION_COUNTER.SUMA){
            counter = counter + 1
        }

        if(OPERATION_COUNTER.RESTA){
            counter = counter - 1
        }

        set({currentCounter:counter})

       },
       cleanCounter: () => {
        set({currentCounter:1})
       }
    })
)