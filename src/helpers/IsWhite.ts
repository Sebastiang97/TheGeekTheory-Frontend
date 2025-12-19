export const IS_WHITE = (color:string):boolean =>{
    return color?.toLowerCase().startsWith("#fff")
}

export const IS_THE_SAME_COLOR = (color:string, to_color: string):boolean =>{
    return color?.toLowerCase().startsWith(to_color.toLocaleLowerCase())
}