
export const URL_TO_FILE = async (url:string, fileName: string) => {
    const response = await fetch(url);
    const blob = await response.blob(); // Convierte la respuesta a un Blob
    const file = new File([blob], fileName, { type: blob.type }); // Crea el objeto File
    return file;
}