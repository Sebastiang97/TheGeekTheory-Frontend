export interface InputFields {
    type:         string
    name:         string
    placeholder?: string
    label:        string
    value:        string | any[]
    validations:  Validation[]
    options?:     Option[]
    ImgS?:        ImgS
    colors?:      ListColors
    sizes?:       ListSize
}

export interface Option {
    id:    number | string
    label: string
}

export interface Validation {
    type:   "required" | "minLength" | "email" | "numbers"
    value?: number
}

export interface Actions {
    class: string
    buttons: {
        type: "submit" | "reset" | "button"
        text: string
    }[]
}

export interface ImgS {
    multiple:    boolean
    typeExtra:   TypeExtra
}

export interface ListColors {
    elements:      string[]
    typeExtra:   TypeExtra
}

export interface ListSize {
    elements:      Sizes[]
    typeExtra:   TypeExtra
}

export type Sizes = "XS" | "S" | "M" | "L" | "XL"


export type TypeExtra = "main" | "second" | "colors" | "sizes"