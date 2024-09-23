import { Actions, InputFields } from "@/Models/InputFields";

export const inputAdminFields:InputFields[] =[
    {
        type: "input",
        name: "name",
        placeholder: "components.forms.fields.placeholders.name",
        label: "components.forms.fields.labels.name",
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


export const actions: Actions = {
    class:"actions end",
    buttons:[
        {
            type: "submit",
            text: "components.admin.actions.create"
        }
    ]
}