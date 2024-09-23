import { useField } from 'formik';
import { useTranslation } from 'react-i18next';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
}


export const MyTextInput = ( { label, ...props }: Props ) => {
    const { t } = useTranslation(["translation"])
    const [ field, meta ] = useField(props)

    return (
        <div className='field'>
            <label htmlFor={ props.id || props.name }>{ t(label) }</label>
            <input 
                className="text-input" 
                { ...field } 
                { ...props } 
                placeholder={t(props.placeholder as string)}
            />

            {meta.touched && meta.error && (
                <span className='error'>{t(meta.error)}</span>
            )}
            {/* <ErrorMessage name={ props.name } component="span" /> */}
        </div>
    )
}
