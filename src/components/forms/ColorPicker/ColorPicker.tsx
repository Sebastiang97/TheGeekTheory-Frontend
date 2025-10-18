// import { useField } from 'formik';
// import { useTranslation } from 'react-i18next';


// interface Props {
//     label: string;
//     name: string;
//     type: 'color';
//     placeholder?: string;
//     [x: string]: any;
// }


// export const ColorPicker = ( { label, ...props }: Props ) => {
//     const { t } = useTranslation(["translation"])
//     const [ field, meta ] = useField(props)

//     return (
//         <div className='field'>
//             <label htmlFor={ props.id || props.name }>{ t(label) }</label>
//             <input 
//                 className="text-input" 
//                 { ...field } 
//                 { ...props } 
//                 placeholder={t(props.placeholder as string)}
//             />

//             {meta.touched && meta.error && (
//                 <span className='error'>{t(meta.error)}</span>
//             )}
//             {/* <ErrorMessage name={ props.name } component="span" /> */}
//         </div>
//     )
// }



import { PlusIcon } from '@@/icons/PlusIcon';
import { useRef } from 'react';
import "./ColorPicker.css"

interface Props{
    handleColor: (color:string) => void
}
export const ColorPicker = ({handleColor}:Props) => {
    const colorInputRef = useRef(null);
    const handleColorChange = (event:any) => {
        handleColor(event.target.value)
        // colorInputRef.current.
    }

    return (
        <label
            className='colorPicker'
            htmlFor="colorInput" >
            <PlusIcon />
            <div className="color-picker-container">
                <input
                    ref={colorInputRef}
                    id="colorInput"
                    type="color"
                    onChange={handleColorChange}
                    className="hidden-color-input"
                />
            </div>
        </label>
    );
};
