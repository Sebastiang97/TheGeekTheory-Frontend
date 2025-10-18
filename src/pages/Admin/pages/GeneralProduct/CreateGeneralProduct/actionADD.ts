import { Actions, InputFields } from "@/Models/InputFields";

export const inputProductFields:InputFields[] =[
    {
        type: "input",
        name: "title",
        placeholder: "Agrega el titulo",
        label: "Titulo",
        value: "",
        validations: [
            {
                type: "required"
            },
        ]
    },
    {
        type: "number",
        name: "price",
        placeholder: "Agrega el precio",
        label: "Precio",
        value: "",
        validations: [
            {
                type: "required"
            },
            {
                type: "numbers"
            }
        ]
    },
    {
        type: "input",
        name: "description",
        placeholder: "Agrega la descripcion",
        label: "Descripcion",
        value: "",
        validations: [
            {
                type: "required"
            }
        ]
    },
    {
        type: "checkbox",
        name: "isVisible",
        placeholder: "Visible",
        label: "Visible",
        value: "",
        validations: [
        ]
    },
    // {
    //     type: "addTags",
    //     name: "tags",
    //     placeholder: "tags",
    //     label: "tags",
    //     value: [],
    //     validations: [
    //         {
    //             type: "required"
    //         }
    //     ]
    // },
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