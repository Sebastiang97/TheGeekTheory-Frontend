import { Actions, InputFields } from "@/Models/InputFields";

export const inputPIFields:InputFields[] =[
    {
        type: "arrayInputImg",
        name: "imgMain",
        placeholder: "Imagen principal",
        label: "Imagen principal",
        value: [],
        validations: [
            {
                type: "required"
            },
        ],
        ImgS:{
            multiple: false,
            typeExtra: "main"
        }
    },
    {
        type: "arrayInputImg",
        name: "imgSecond",
        placeholder: "Imagenes secundarias",
        label: "Imagenes secundarias",
        value: [],
        validations: [
            {
                type: "required"
            },
        ],
        ImgS:{
            multiple: true,
            typeExtra: "second"
        }
    },
    {
        type: "arrayColor",
        name: "arrayColor",
        placeholder: "",
        label: "",
        value: [],
        validations: [
            {
                type: "required"
            },
        ],
        totalItems: 0
    },
    {
        type: "color",
        name: "color",
        placeholder: "Colores",
        label: "Colores",
        value: [],
        validations: [
            {
                type: "required"
            },
        ],
    },
    {
        type: "arraySize",
        name: "arraySize",
        placeholder: "",
        label: "",
        value: [],
        validations: [
            {
                type: "required"
            },
        ],
        totalItems: 0
    },
    {
        type: "size",
        name: "size",
        placeholder: "Tallas",
        label: "Tallas",
        value: [],
        validations: [
            {
                type: "required"
            },
        ]
    },
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
        name: "quantity",
        placeholder: "Agrega la cantidad",
        label: "Cantidad",
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