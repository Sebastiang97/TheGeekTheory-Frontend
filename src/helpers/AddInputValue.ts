import { SIZE } from "@/constants/Size"
import { InputFields } from "@/Models/InputFields"

export const ADD_INPUT_VALUES = (intAdmin:InputFields[], initialValues:any): InputFields[]=>{
    let initInputs:InputFields[] = JSON.parse(JSON.stringify(intAdmin))
    initInputs?.map(input=>{
        Object.keys(initialValues || {}).map(key=>{
          if(key === input.name && input.type !== "select"){
            input.value = initialValues[key]
          }
          if(key === input.name && input.type === "select"){  
            input.options = [...initialValues[key]].map((v:any)=>{return {id: v, label: v}})
            // input.options.push({id: initialValues.currentSize, label: initialValues.currentSize})
            input.value =  initialValues.currentSize
          }
        })
    })
    return initInputs
}


export const ADD_INIT_INPUT_VALUES = (intAdmin:InputFields[], initialValues:any): InputFields[]=>{
  let initInputs:InputFields[] = JSON.parse(JSON.stringify(intAdmin))
  initInputs?.map(input=>{
      Object.keys(initialValues || {}).map(key=>{
        if(key === input.name && input.type === "select"){  
          input.options = [...initialValues[key]].map((v:any)=>{return {id: v, label: v}})
        }
      })
  })
  return initInputs
}