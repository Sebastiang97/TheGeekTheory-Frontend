import { base64ToBlob } from "./base64ToBlob";

export const base64ToFile = (base64: string, fileName: string): File => {
    // Extraer el tipo MIME del prefijo de la cadena Base64
    const contentType = base64.split(',')[0].split(':')[1].split(';')[0];
    const blob = base64ToBlob(base64, contentType);

    return new File([blob], fileName, { type: contentType });
}