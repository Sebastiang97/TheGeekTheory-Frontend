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