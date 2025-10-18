export const SIZE = ["XS", "S", "M", "L", "XL"]
export const SIZES = ["XS", "S", "M", "L", "XL"]


export const FILTER_SIZES = (sizes:string[]):string[] =>{
    return SIZES.filter(size=>!sizes.includes(size))
    
}