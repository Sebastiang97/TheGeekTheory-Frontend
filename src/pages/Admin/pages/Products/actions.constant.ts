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
        type: "number",
        name: "price",
        placeholder: "components.forms.fields.placeholders.price",
        label: "components.forms.fields.labels.price",
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
        type: "number",
        name: "quantity",
        placeholder: "Digita la cantidad",
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
        type: "color",
        name: "color",
        placeholder: "color",
        label: "Color",
        value: "",
        validations: [
            {
                type: "required"
            },
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
    },
    {
        type: "select",
        name: "subCategoryId",
        placeholder: "components.forms.fields.placeholders.selectOption",
        label: "SubCategory",
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


export const inputProductAdminFields:InputFields[] =[
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
        type: "input",
        name: "description",
        placeholder: "descripcion",
        label: "Descripcion",
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
        name: "price",
        placeholder: "components.forms.fields.placeholders.price",
        label: "components.forms.fields.labels.price",
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
        type: "number",
        name: "quantity",
        placeholder: "Digita la cantidad",
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
        type: "select",
        name: "size",
        placeholder: "",
        label: "Talla",
        value: "",
        validations: [
            {
                type: "required"
            },
        ],
        options: []
    },
    {
        type: "color",
        name: "color",
        placeholder: "color",
        label: "Color",
        value: "",
        validations: [
            {
                type: "required"
            },
        ]
    }
]

export const productActions: Actions = {
    class:"actions end",
    buttons:[
        {
            type: "submit",
            text: "components.admin.actions.create"
        }
    ]
}