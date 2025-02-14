import { Actions, InputFields } from "@/Models/InputFields";

export const inputCheckoutFields:InputFields[] =[
    {
        type: "checkbox",
        name: "checkboxFront",
        placeholder: "Nombres",
        label: "",
        value: "",
        validations: [
            {
                type: "required"
            },
            {
                type: "minLength",
                value: 2
            }
        ]
    },
    
]
