import { Actions, InputFields } from "@/Models/InputFields";

export const inputPayerFields:InputFields[] =[
    {
        type: "input",
        name: "name",
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
    {
        type: "input",
        name: "surname",
        placeholder: "Apellidos",
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
    {
        type: "input",
        name: "address",
        placeholder: "Address",
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
    {
        type: "input",
        name: "detail",
        placeholder: "Bloque, apto, n. casa",
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
    {
        type: "input",
        name: "city",
        placeholder: "Ciudad - Departamento",
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
    {
        type: "input",
        name: "email",
        placeholder: "Correo Electrónico",
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
    {
        type: "number",
        name: "phone",
        placeholder: "Teléfono",
        label: "",
        value: "",
        validations: [
            {
                type: "required"
            },
            {
                type: "numbers"
            },
            {
                type: "minLength",
                value: 2
            }
        ]
    },
    {
        type: "checkbox",
        name: "save",
        placeholder: "",
        label: "Guarda tu información",
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
            text: "Guardar informacion"
        },
        {
            type: "button",
            text: "cancelar"
        }
    ]
}