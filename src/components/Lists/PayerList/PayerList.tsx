import { usePayerStore } from '@/libs/store/zustand/usePayerStore'
import { Payer } from '@/Models/Payer'
import { PayerItem } from '@@/Payer/PayerItem'
import { useEffect, useState } from 'react'


interface Props {
    isSelectPlayer: boolean
    payerSelected: (payer: Payer) => void
}


export const PayerList = ({ isSelectPlayer, payerSelected }: Props) => {
    const list = usePayerStore(state => state.list)
    const payer = usePayerStore(state => state.payer)
    const [payerSelect, setPayerSelected] = useState<Payer>({} as Payer)

    const handleSelectedPlayer = (payer: Payer) => {
        setPayerSelected(payer)
        payerSelected(payer)
    }

    useEffect(() => {
        list()
        payer.length && setPayerSelected(payer[0])
    }, [])

    return (
        <>
            {isSelectPlayer
                ? (
                    <>
                        {
                            payer.length
                                ? (
                                    payer.map(p => (
                                        <div key={p.id}>
                                            <PayerItem payer={p} />
                                            <button
                                                onClick={() => handleSelectedPlayer(p)}>
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
                    <PayerItem
                        payer={payerSelect}
                    />
                )
            }
        </>
    )
}
