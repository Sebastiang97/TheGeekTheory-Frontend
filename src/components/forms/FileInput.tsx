import { useField } from 'formik';
import { useTranslation } from 'react-i18next';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
    formik: any
}


export const FileInput = ({ label, formik,...props }: Props) => {
    const { t } = useTranslation(["translation"])
    const [ field, meta ] = useField(props)

    return (
        <div className='field'>
            <label htmlFor={ props.id || props.name }>{ t(label) }</label>
            <input
                className="text-input"
               {...field}
               { ...props } 
                type="file"
                onChange={(event) => {
                  const files = event.target.files;
                  if(files){

                    let myFiles =Array.from(files);
                    formik.setFieldValue("files", myFiles);
                  }
                }}
                multiple
              />
            {/* <input 
                className="text-input" 
                { ...field } 
                { ...props } 
                placeholder={t(props.placeholder as string)}
            /> */}

            {meta.touched && meta.error && (
                <span className='error'>{t(meta.error)}</span>
            )}
            {/* <ErrorMessage name={ props.name } component="span" /> */}
        </div>
    )
}
