import * as fabric from 'fabric';


export const addFabricImage = (
    urlImage: string,
    options?: any
) : Promise<any> => {
    return fabric.FabricImage.fromURL(
        urlImage,
        { crossOrigin: 'anonymous' },
        { additionalOptions: {} }
    ).then(img => {
        img.set(options);
        return img
    })
}

export const deleteImage = (canvas: fabric.Canvas, idDelete: string) =>{
    canvas.getObjects().forEach((obj:any) => {
        if (obj.type === 'image' && obj.id === idDelete) {
          canvas.remove(obj);
          return; 
        }
    })
}
