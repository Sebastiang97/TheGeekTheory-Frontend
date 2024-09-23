import { Actions, InputFields } from "@/Models/InputFields";

export const inputAdminFields:InputFields[] =[
    {
        type: "arrayInput",
        name: "files",
        placeholder: "files",
        label: "files",
        value: "",
        validations: [
            {
                type: "required"
            },
        ]
    },
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
    {
        type: "select",
        name: "categoryId",
        placeholder: "components.forms.fields.placeholders.selectOption",
        label: "Categories",
        value: "",
        validations: [
            {
                type: "required"
            }
        ],
        options: []
    }
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