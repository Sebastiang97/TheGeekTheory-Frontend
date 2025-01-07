import { usePayerStore } from '@/libs/store/zustand/usePayerStore'
import { Payer } from '@/Models/Payer'
import { PayerItem } from '@@/Payer/PayerItem'
import { useEffect, useState } from 'react'



export const PayerList = () => {
    const list = usePayerStore(state => state.list)
    const payer = usePayerStore(state => state.payer)
    const addSelectedPayer =  usePayerStore(state => state.addSelectedPayer)
    const selectedPlayer =  usePayerStore(state => state.selectedPlayer)
    const [add, setAdd] = useState(false)

    const handleSelectPayer = (p:Payer) =>{
        addSelectedPayer(p) 
        setAdd(false)
    }

    useEffect(() => {
        list()
        payer.length && addSelectedPayer(payer[0])
    }, [])

    return (
        <>
            {!selectedPlayer.email || add
                ? (
                    <>
                        {
                            payer.length
                                ? (
                                    payer.map(p => (
                                        <div key={p.id}>
                                            <PayerItem payer={p} />
                                            <button
                                                onClick={() => handleSelectPayer(p)}>
                                                escoger
                                            </button>
                                        </div>
                                    ))
                                )
                                : (
                                    <>
                                        No tienes info
                                    </>
                                )
                        }
                    </>
                )
                : (
                    <>
                        <PayerItem
                            payer={selectedPlayer}
                        />
                        <button
                            onClick={() => setAdd(true)}>
                            escoger otra info
                        </button>
                        <button
                            onClick={() => addSelectedPayer({} as Payer)}>
                            agregar
                        </button>
                    </>
                )
            }
        </>
    )
}
