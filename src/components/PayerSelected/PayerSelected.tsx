import { FormDinamic } from "@@/forms/FormDinamic"
import { actions, inputPayerFields } from "./action.constants"
import { usePayerStore } from "@/libs/store/zustand/usePayerStore"
import { MAPPING_USER } from "@/helpers/MappingUser"
import { PayerList } from "@@/Lists/PayerList/PayerList"
import { GET_SUCCESS_MESSAGE } from "@/constants/ToastGeneralAtrributes"
import { useState } from "react"

export const PayerSelected = () => {
    const payers = usePayerStore(state => state.payer)
    const selectedPlayer = usePayerStore(state => state.selectedPlayer)
    const createPayer = usePayerStore(state => state.createPayer)
    const [add, setAdd] = useState(false)
    const payer = usePayerStore(state => state.payer)
    const addSelectedPayer =  usePayerStore(state => state.addSelectedPayer)

    const getValues = (values: any, type?: string) => {
        console.log(values, type) 
        if(type === "submit" ){
            createPayer(MAPPING_USER(values))
                .then(payer => {
                    GET_SUCCESS_MESSAGE("payer creado correctamente")
                }).catch(error => {
                    console.log(error)
                })
        }else{
            payer.length && addSelectedPayer(payer[0])
            !payer.length && setAdd(false) 
        }
    }

    return (
        <>
            {
                (!payers.length ) ? (
                    <>
                        {!selectedPlayer.email && add ? (
                            <FormDinamic
                                inputFields={inputPayerFields}
                                actions={actions}
                                getImgs={()=>{}}
                                getValues={getValues}
                                getOnChanges={() => { }}
                            />
                        ): (
                            <div>
                                no tienes info 
                                <button
                                    onClick={()=> setAdd(true)}>agrega uno</button> 
                            </div>
                        )}
                    </>
                ) : (
                    <section className="info">
                        <PayerList />

                        {/* <button
                            onClick={() => setIsSelectPlayer(p => !p)}>
                            escoger otra info
                        </button>
                        <button
                            onClick={() => addPayer()}>
                            agregar
                        </button> */}
                    </section>
                )
            }
        </>
    )
}
