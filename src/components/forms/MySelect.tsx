import { useField } from 'formik';
import { useTranslation } from 'react-i18next';
import { Option } from '@/Models/InputFields';

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    options: Option[]
    [x: string]: any;
    onChange: (e:any) => void
}


export const MySelect = ( { label, options, onChange,...props }: Props ) => {
    const { t } = useTranslation(["translation"])
    const [ field, meta ] = useField(props)

    return (
        <div className='field'>
            <label htmlFor={ props.id || props.name }>{ t(label) }</label>
            <select 
                { ...field } 
                { ...props } 
                onChange={(e) => onChange(e.target.value)}
                >
                <option value="">{t(props.placeholder || "components.forms.fields.placeholders.selectOption")}</option>
                  {
                    options?.map(({ id, label }) => (
                      <option key={id} value={id}>{label}</option>
                    ))
                  }
            </select>
            {meta.touched && meta.error && (
                <span className='error'>{t(meta.error)}</span>
            )}
            {/* <ErrorMessage name={ props.name } component="span" /> */}
        </div>
    )
}
