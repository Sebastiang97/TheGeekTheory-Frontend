import { Actions, InputFields } from "@/Models/InputFields";

export const inputLoginFields:InputFields[] =[
    {
        type: "input",
        isNumber: false,
        name: "email",
        placeholder: "components.forms.fields.placeholders.login",
        label: "components.forms.fields.labels.login",
        value: "",
        validations: [
            {
                type: "required"
            },
            {
                type: "email",
            }
        ]
    },
    {
        type: "password",
        isNumber: false,
        name: "password",
        placeholder: "components.forms.fields.placeholders.password",
        label: "components.forms.fields.labels.password",
        value: "",
        validations: [
            {
                type: "required"
            },
            {
                type: "numbers"
            }
        ]
    }
]

export const actions: Actions= {
    class:"actions center",
    buttons:[
        {
            type: "submit",
            text: "components.forms.actions.login"
        }
    ]
}

export const actionsRegister: Actions= {
    class:"actions center",
    buttons:[
        {
            type: "submit",
            text: "components.forms.actions.register"
        }
    ]
}