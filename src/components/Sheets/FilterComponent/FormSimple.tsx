import { useState } from "react"


export const FormSimple = (props:any) => {
    const {children, icon, getValue, ...rest} = props

    const [inputValue, setInputValue] = useState("")


    const onSubmit = () => {

        if (inputValue.trim() === "") {
            console.log("Por favor, escribe algo en el input")
            return
        }
        console.log("Valor capturado:", inputValue)
        console.log(`Has escrito: ${inputValue}`)

        getValue(inputValue)
        setInputValue("")

    }

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault() 
            onSubmit()
        }

    }

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={onKeyDown}
                {...rest}
            />
            <div onClick={onSubmit}>
                {icon}
            </div>
        </>

    )

}
