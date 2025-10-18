import { InputFields } from "@/Models/InputFields"
import { GET_COLORS_FROM_COLORIMAGESSIZE } from "./GetColors"
import { FILTER_SIZE_BY_COLOR } from "./GetSizes"
import { GeneralProduct } from "@/Models/GeneralProduct"

export const UPDATE_INPUT_ADMIN_COLORS_SIZE = (inputPIFields: InputFields[],generalProduct: GeneralProduct[], color:string) => {
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
            let sizes = FILTER_SIZE_BY_COLOR(generalProduct[0].colorImageSizes, color) as any[]
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