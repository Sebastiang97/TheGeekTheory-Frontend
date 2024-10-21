import { getMessageToast } from "@/libs/toast/toast"


export const GENERAL_DURATION = 3000

export const GENERAL_ERROR_CREATE_MESSAGE = "Error para crear correctamente"

export const GENERAL_ERROR_UPDATE_MESSAGE = "Error para actualizar correctamente"

export const GENERAL_ERROR_DELETE_MESSAGE = "Error para eliminar correctamente"

export const GET_SUCCESS_MESSAGE = (message = "Accion realizada exitosamente") =>{
  return getMessageToast({
    message, 
    options: {
      duration: GENERAL_DURATION, 
    }
  })
}

export const GET_ERROR_MESSAGE = (message = "Error con la accion ejecutada contacte el administrador") =>{
  return getMessageToast({
    message, 
    options: {
      duration: GENERAL_DURATION, 
    }
  })
}