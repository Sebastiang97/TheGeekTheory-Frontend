import { InputFields } from '@/Models/InputFields'

import * as Yup from 'yup'

export const RULES_TYPE = {
    MIN_LENGTH: 'minLength',
    REQUIRED: 'required',
    EMAIL: 'email',
    NUMBERS: 'numbers'
}

export const GET_PROPS_FORMS = (formJson: InputFields[]) => {
    const initialValues: { [key: string]: any } = {}
    const requiredFields: { [key: string]: any } = {}

    for (const input of formJson) {
        initialValues[input.name] = input.value

        if (!input.validations) continue

        // if (input.isNumber) {
        //     let schema = Yup.number()
        //     for (const rule of input.validations) {
        //         if (rule.type === RULES_TYPE.NUMBERS) {
        //             schema = schema.positive("")
        //         }
        //     }
        //     requiredFields[input.name] = schema
        // }

        // if (!input.isNumber) {
        //     let schema = Yup.string()
        //     for (const rule of input.validations) {
        //         if (rule.type === RULES_TYPE.REQUIRED) {
        //             schema = schema.required('components.forms.fields.errors.required')
        //         }

        //         if (rule.type === RULES_TYPE.MIN_LENGTH) {
        //             schema = schema.min((rule as any).value || 2, 'components.forms.fields.errors.minCharacters')
        //         }

        //         if (rule.type === RULES_TYPE.EMAIL) {
        //             schema = schema.email('components.forms.fields.errors.invalidEmail')
        //         }
        //     }
        //     requiredFields[input.name] = schema
        // }
        if(input.type === "number" ){
            requiredFields[input.name] = validateNumbers(input)
        }

        if(input.type === "input" ){
            requiredFields[input.name] = validateStrings(input)
        }

        if(input.type === "arrayInput" ){
            requiredFields[input.name] = Yup.array(validateStrings(input))
        }
        
        if(input.type === "arrayNumbers" ){
            requiredFields[input.name] = Yup.array(validateNumbers(input))
        }

        if(input.type === "select" ){
            requiredFields[input.name] = validateStrings(input)
        }
    }

    const validationSchema = Yup.object({ ...requiredFields })
    return {
        initialValues,
        validationSchema
    }
}


const validateNumbers = (input: InputFields) => {
    let schema = Yup.number()
    for (const rule of input.validations) {
        if (rule.type === RULES_TYPE.NUMBERS) {
            schema = schema.positive("el campo debe ser positivo")
        }
        if (rule.type === RULES_TYPE.REQUIRED) {
            schema = schema.required('components.forms.fields.errors.required')
        }
    }
    return schema
}

const validateStrings = (input: InputFields) => {
    let schema = Yup.string()
    for (const rule of input.validations) {
        if (rule.type === RULES_TYPE.REQUIRED) {
            schema = schema.required('components.forms.fields.errors.required')
        }

        if (rule.type === RULES_TYPE.MIN_LENGTH) {
            schema = schema.min((rule as any).value || 2, 'components.forms.fields.errors.minCharacters')
        }

        if (rule.type === RULES_TYPE.EMAIL) {
            schema = schema.email('components.forms.fields.errors.invalidEmail')
        }
    }
    return schema
}