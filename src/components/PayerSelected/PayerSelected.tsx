import { FormDinamic } from "@@/forms/FomDinamic/FormDinamic"
import { actions, inputPayerFields } from "./action.constants"
import { usePayerStore } from "@/libs/store/zustand/usePayerStore"
import { MAPPING_USER } from "@/helpers/MappingUser"
import { PayerList } from "@@/Lists/PayerList/PayerList"
import { GET_SUCCESS_MESSAGE } from "@/constants/ToastGeneralAtrributes"
import { useEffect, useState } from "react"
import { useAuthenticateStore } from "@/libs/store/zustand/useAuthenticateStore"
import { PayerItem } from "@@/Payer/PayerItem"
import { Payer } from "@/Models/Payer"

export const PayerSelected = () => {
    const list = usePayerStore(state => state.list)
    const payers = usePayerStore(state => state.payer)
    const payer = usePayerStore(state => state.payer)
    const selectedPlayer = usePayerStore(state => state.selectedPlayer)
    const createPayer = usePayerStore(state => state.createPayer)
    const addSelectedPayer =  usePayerStore(state => state.addSelectedPayer)

    const [add, setAdd] = useState(false)
    const [selectAddress, setSelectAddress] = useState(false)

    const user = useAuthenticateStore(state => state.user)
    const getUser = useAuthenticateStore(state => state.getUser)

    const getValues = (values: any, type?: string) => {
        console.log( type) 
        if(type === "submit" ){
            console.log(user.id)
            if(user.id){
                values.idUser = user.id
            } 
            console.log({values})
            createPayer(MAPPING_USER(values))
                .then(payer => {
                    console.log(payer)
                    GET_SUCCESS_MESSAGE("payer creado correctamente")
                    addSelectedPayer(payer)
                    setAdd(false)
                    setSelectAddress(false)
                }).catch(error => {
                    console.log(error)
                })
        }else{
            console.log("no Submit ")
            payers.length && addSelectedPayer(payer[0])
            setAdd(false)
            setSelectAddress(false)

        }
    }

    const handleSelectAddres = () => {
        setSelectAddress(true)
        addSelectedPayer({} as Payer)
    }

    const handleSelectedPayer = () =>{
        setSelectAddress(false)
    } 

    useEffect(() => {
        getUser()
        console.log(user)
        list(user.id)
        payers.length && addSelectedPayer(payers[0])
      }, [])

    return (
        <>
            {
                ( add && !selectAddress ) && (
                    <FormDinamic
                        inputFields={inputPayerFields}
                        actions={actions}
                        getExtra={()=>{}}
                        getValues={getValues}
                        getOnChanges={() => { }}
                    />
                ) 
            }
            
            {
                (payers.length && !add && !selectAddress && selectedPlayer.email) && (
                    <>
                        <PayerItem
                            payer={selectedPlayer}
                        />
                        <button
                            onClick={handleSelectAddres}>
                            escoger otra info
                        </button>
                        <button
                            onClick={() => setAdd(true)}>
                            agregar
                        </button>
                    </>
                )
            }

            {
                !payers.length && !add && (
                    <div>
                        no tienes direcciones
                        <button
                            onClick={()=> setAdd(true)}>agrega una direccion</button> 
                    </div>
                )
            }

            {
                (selectAddress && !add && !selectedPlayer.email ) && (
                    <section className="info">
                        <PayerList handleSelectedPayer={handleSelectedPayer}/>
                    </section>
                )
            }
        </>
    )
}
