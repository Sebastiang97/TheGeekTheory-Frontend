import { PlayIcon } from "@@/icons/PlayIcon"
import { useField } from "formik"
import { useState } from "react"
import { useTranslation } from "react-i18next";

interface Props{
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any;
    handleValue: (value:string)=> void
}

export const FormsTags = ({label, handleValue, props}:Props) => {
    // const [ field, meta ] = useField(props)
    const [inputValue, setInputValue] = useState('')
    // const { t } = useTranslation(["translation"])
    
    const handleChange = (event:any) => {
        setInputValue(event.target.value)
        
    }

    const handleSearch = (event:any) => {
        if(inputValue) {
            handleValue(inputValue)
            setInputValue("")
        } 
    }
    
    return (
        <section className="generalsTags">
            <h3>{label}</h3>
            <p>Las etiquetas juegan un papel mínimo para ayudar a las personas a encontrar prendas relacionadas con su contenido favorito.</p>
            <div className='field'>
                <input
                    type="text"
                    id="myInput"
                    className="text-input" 
                    value={inputValue} // Bind the input's value to the 'inputValue' state variable
                    onChange={handleChange} // Call 'handleChange' when the input changes
                />
                <PlayIcon onClick={handleSearch} />
                {/* {meta.touched && meta.error && (
                    <span className='error'>{t(meta.error)}</span>
                )} */}
            </div>
        </section>
    )
}

