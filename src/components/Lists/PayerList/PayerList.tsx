import { usePayerStore } from '@/libs/store/zustand/usePayerStore'
import { Payer } from '@/Models/Payer'
import { PayerItem } from '@@/Payer/PayerItem'

interface Props {
    handleSelectedPayer: (payer: Payer) => void
}

export const PayerList = ({handleSelectedPayer}:Props) => {
    const payers = usePayerStore(state => state.payer)
    const addSelectedPayer =  usePayerStore(state => state.addSelectedPayer)

    const handleSelectPayer = (payer: Payer) => {
        addSelectedPayer(payer)
        handleSelectedPayer(payer)
    }

    return (
        <>
        {
            payers.length && (
                payers.map(p => (
                    <div key={p.id}>
                        <PayerItem payer={p} />
                        <button
                            onClick={() => handleSelectPayer(p) }>
                            escoger
                        </button>
                    </div>
                ))
            )
        }
        </>
    )
}
