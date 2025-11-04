import { InputFields } from "@/Models/InputFields"

export const UPDATE_FIELD_INPUT = (
    inputPIFields: InputFields[], 
    field:string, 
    newValue:string | any [] 
) => {
    return inputPIFields.map(input => {
        
        if (input.type === field) {
            
           if(Array.isArray(input.value)){
               return {
                   ...input,
                   value: [...input.value, ...newValue],
               }
           }else{
               return {
                    ...input,
                    value: newValue,
                }
           }
        }
        return {
            ...input
        }
    })
}