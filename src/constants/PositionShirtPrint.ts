import { IMAGES } from "./images/images";

export const POSITION_PRINT_KEY = {
    TABLOID: "tabloid",
    LETTER: "letter",
    LOGO: "logo"
}

export const POSITION_SHIRT_KEY = {
    FRONT: "front",
    BACK: "back",
    BOTH: "both",
}

export const POSITION_PRINT = [
    {
        id: POSITION_PRINT_KEY.TABLOID,
        img: IMAGES.tabloid,
        details: "24x25",
        label: "Tabloide",
        checked: false,
    },
    {
        id: POSITION_PRINT_KEY.LETTER,
        img: IMAGES.letterSize,
        details: "24x25",
        label: "Carta",
        checked: false,
    }
]

export const POSITION_SHIRT = [
    {
        id: POSITION_SHIRT_KEY.FRONT,
        img: IMAGES.tShirtFront,
        details: "",
        label: "Front",
    },
    {
        id: POSITION_SHIRT_KEY.BACK,
        img: IMAGES.tShirtBack,
        details: "",
        label: "Back",
    }
]

export type PrintCVS = {
    type: string
    position: string
}

export type PositionShirtPrint = typeof POSITION_PRINT[0]

export type PositionSP = {id: string, checked: false}
