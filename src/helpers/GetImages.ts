// export const GET_IMAGES_INPUT = (files: FileList ):File[] => {
export const GET_IMAGES_INPUT = (files: FileList | null ):any[] => {

    let imgs:any[] = []
    if (files) {
        let myFiles = Array.from(files);
        myFiles.map(file=>{
            imgs.push(URL.createObjectURL(file))
        })
        console.log({imgs})
        return imgs
    }
    return imgs
}