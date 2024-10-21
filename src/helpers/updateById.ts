export const UPDATE_BY_ID = (arreglo: any[], newObj:any)=> {
    return arreglo.map(obj => 
      obj.id === newObj.id ? { ...obj, ...newObj } : obj
    )
}