import { InputFields } from "@/Models/InputFields";

export const exampleModelFields :InputFields[] =[
    {
        type: "input",
        name: "firstName",
        placeholder: "Nombre",
        label: "First Name",
        value: "",
        validations: [
            {
                type: "required"
            },
            {
                type: "minLength",
                value: 5
            }
        ]
    },
    {
        type: "input",
        name: "lastName",
        placeholder: "Apellido",
        label: "Last Name",
        value: "",
        validations: [
            {
                type: "required"
            }
        ]
    },
    {
        type: "email",
        name: "email",
        placeholder: "correo@google.com",
        label: "Email",
        value: "",
        validations: [
            {
                type: "required"
            },
            {
                type: "email"
            }
        ]
    },
    {
        type: "select",
        name: "favoriteGame",
        label: "Favorite Game",
        value: "",
        options: [
            {
                id: 1,
                label: "Super Smash"
            },
            {
                id: 2,
                label: "Metal Gear"
            },
            {
                id: 3,
                label: "Resident Evil"
            }
        ],
        validations: [
            {
                type: "required"
            }
        ]
    }
]