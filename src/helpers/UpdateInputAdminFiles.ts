import { InputFields } from "@/Models/InputFields"
import { GET_COLORS_FROM_COLORIMAGESSIZE } from "./GetColors"
import { FILTER_SIZES_BY_COLOR } from "./GetSizes"
import { GeneralProduct } from "@/Models/GeneralProduct"

export const UPDATE_INPUT_ADMIN_COLORS_SIZE = (inputPIFields: InputFields[],generalProduct: GeneralProduct[], color:string) => {
    
    return inputPIFields.map(input => {
        
        if (input.type === "color") {
            let colors = GET_COLORS_FROM_COLORIMAGESSIZE(generalProduct[0].colorImageSize)
            if(colors.length && color){
                let colorFound = colors.find(c=>c === color)
                
                if(!colorFound) {
                    colors.push(color)
                }

                return {
                    ...input,
                    value: color
                }
            }
        }

        if (input.type === "arrayColor") {
            let colors = GET_COLORS_FROM_COLORIMAGESSIZE(generalProduct[0].colorImageSize)
            if(colors.length && color){
                
                return {
                    ...input,
                    totalItems: colors.length,
                    value: colors,
                }
            }
        }

        if (input.type === "arraySize") {
            let sizes = FILTER_SIZES_BY_COLOR(generalProduct[0].colorImageSizes, color) as any[]
            if(sizes.length){
                return {
                    ...input,
                    totalItems: sizes.length,
                    value: sizes,
                }
            }
        }

        if (input.type === "size") {
            let sizes = FILTER_SIZES_BY_COLOR(generalProduct[0].colorImageSizes, color) as any[]
            if(sizes.length && sizes[0]){
                return {
                    ...input,
                    value: sizes[0]
                }
            }
        }

        if (input.type === "totalItemsColors") {
           let colors = GET_COLORS_FROM_COLORIMAGESSIZE(generalProduct[0].colorImageSize)
            if(colors.length && color){
                
                return {
                    ...input,
                    value: colors.length
                }
            }
        }

        if (input.type === "totalItemsSizes") {
            let sizes = FILTER_SIZES_BY_COLOR(generalProduct[0].colorImageSizes, color) as any[]
            if(sizes.length && sizes[0]){
                return {
                    ...input,
                    value: sizes.length
                }
            }
        }
        return input
    })
}


export const TEST = (inputPIFields: InputFields[],generalProduct: GeneralProduct[], color:string) => {
    
    return inputPIFields.map(input => {
        
        if (input.colors) {
            let colors = GET_COLORS_FROM_COLORIMAGESSIZE(generalProduct[0].colorImageSize)
            if(colors.length && color){
                let colorFound = colors.find(c=>c === color)
                
                if(!colorFound) {
                    colors.push(color)
                }

                return {
                    ...input,
                    value: color,
                    colors: {
                        ...input.colors,
                        elements: colors
                    }
                }
            }
        }
        if (input.sizes) {
            let sizes = FILTER_SIZES_BY_COLOR(generalProduct[0].colorImageSizes, color) as any[]
            if(sizes.length && sizes[0]){
                return {
                    ...input,
                    value: sizes[0],
                    sizes: {
                        ...input.sizes,
                        elements: sizes
                    }
                }
            }
        }
        return input
    })
}