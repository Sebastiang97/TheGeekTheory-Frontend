import { Actions, InputFields } from '@/Models/InputFields'
import { Formik, Form } from 'formik'
import { GET_PROPS_FORMS } from './Forms.constants'
import { MySelect, MyTextInput } from '.'
import { useTranslation } from 'react-i18next'

interface Props {
  inputFields: InputFields[]
  actions: Actions
  getValues: (values: any, type?: string) => void,
  getImgs: (values: any) => void,
  getOnChanges: (values: any) => void
}

export const FormDinamic = ({ inputFields, actions, getValues, getImgs, getOnChanges }: Props) => {
  const { t } = useTranslation(["translation"])

  return (
    <Formik
      initialValues={GET_PROPS_FORMS(inputFields).initialValues}
      validationSchema={GET_PROPS_FORMS(inputFields).validationSchema}
      onSubmit={(v) => {
        getValues(v)
      }}

    >
      {/* ({ isValid, isSubmitting, values })  */}
      {/* {(formik) => ( */}
      {({ isValid, isSubmitting, setFieldValue, values }) => (
        <Form noValidate>
          {inputFields.map(({ type, name, placeholder, label, options }) => {

            if (type === 'input' ||
              type === 'password' ||
              type === 'email' ||
              type === 'number') {
              return <MyTextInput
                key={name}
                type={(type as any)}
                name={name}
                label={label}
                placeholder={placeholder} />

            } else if (type === 'select') {
              return (
                <MySelect
                  key={name}
                  label={label}
                  name={name}
                  options={options || []}
                  placeholder={placeholder}
                  onChange={e=>{ 
                    setFieldValue(name, e)
                    getOnChanges({name, value:e})
                  }}
                >
                  {/* <option value="">{t("components.forms.fields.placeholders.selectOption")}</option>
                    {
                      options?.map(({ id, label }) => (
                        <option key={id} value={id}>{label}</option>
                      ))
                    } */}
                </MySelect>
              )
            } else if (type === 'arrayInput') {
              return (
                <div
                  className='field'
                  key={name}>

                  <label htmlFor="fileuploader" >
                    <div>Agrega una foto </div>
                    <div className='flex justify-center'>+</div>
                  </label>
                  <input
                    id="fileuploader"
                    name={name}
                    type="file"
                    onChange={(event) => {
                      const files = event.target.files;
                      if (files) {

                        let myFiles = Array.from(files);
                        setFieldValue(name, myFiles);
                        getImgs({ files: myFiles })
                      }
                    }}
                    multiple
                  />
                </div>
              )
            } else if (type === 'checkbox') {
              return (
                <div
                  className='field'
                  key={name}>
                  <div className="containCheck">

                    <div className="checkbox">
                      <input type="checkbox" id={name} name={name} />
                      <label htmlFor={name} className='lCheckbox'></label><br></br>
                    </div>
                    <label htmlFor={name}>{label}</label>
                  </div>

                </div>
              )
            }


            throw new Error(`El type: ${type}, no es soportado`);
          })}



          <div className={actions.class}>
            {
              actions.buttons.map(({ text, type }, i) => {
                if(type === "submit"){
                  return (
                    <button
                      key={i}
                      type={type}
                      disabled={!isValid || isSubmitting}
                    >
                      {t(text)}
                    </button>
                  )
                }
                if(type === "button"){
                  return (
                    <button
                      key={i}
                      type={type}
                      disabled={!isValid || isSubmitting}
                      onClick={() => getValues(values, "button")}
                    >
                      {t(text)}
                    </button>
                  )
                }
              })
            }
          </div>

        </Form>
      )}

    </Formik>
  )
}
