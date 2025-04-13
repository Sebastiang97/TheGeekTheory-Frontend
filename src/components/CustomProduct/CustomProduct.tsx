import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import FabricComponent from '@@/FabricComponent/FabricComponent';
import { addFabricImage } from '@/libs/Fabric/Fabric';
import * as fabric from 'fabric';
import { base64ToFile } from '@/helpers/Base64ToFile';
import { useCustomProduct } from '@/libs/store/zustand/useCustomProduct';

interface Props {
    img: string
    handlePrint: (file:File) => void
}

export const CustomProduct = ({ img, handlePrint }: Props) => {
    const [canvas, setCanvas] = useState<fabric.Canvas | undefined>(undefined)
    const inputRef = useRef<HTMLInputElement>(null)
    const canvasEl = useRef<any>(null)

    const currentUrl = useCustomProduct(state=> state.currentUrl)
    

    const handlePic = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return
        const file = event.target.files[0]
        const url = URL.createObjectURL(file)
        addImage(url)

    }

    const generateImage = () => {
        if (canvas) {
            let objetos = canvas.getObjects();

            var imagenes = canvas.getObjects().filter(objeto => objeto.type === 'image');

            if (imagenes.length > 0) {
                // Recorrer las imágenes y obtener sus dimensiones
                imagenes.forEach(function(imagen, index) {
                    var width = imagen.width;
                    var height = imagen.height;

                    var width = imagen.width;
                    var height = imagen.height;
                    var left = imagen.left;  // Posición X
                    var top = imagen.top;    // Posición Y

                    console.log('Imagen ' + (index + 1) + ' - Ancho: ' + width + ', Alto: ' + height + 
                                ', Posición X: ' + left + ', Posición Y: ' + top);
                });
            } else {
                console.log('No se encontraron imágenes en el canvas');
            }
            // const imgBase64 = canvas.toDataURL({
            //     format: 'png',
            //     quality: 1.0,
            //     multiplier: 1
            // })
            // const file = base64ToFile(imgBase64, 'image.png')
            // handlePrint(file)
        }
    }

    const addImage = (url: string) => {
        if (canvasEl?.current && canvas) {

            addFabricImage(url)
                .then(img => {
                    const canvasWidth = canvas.width;
                    const canvasHeight = canvas.height;
                    // img.scaleToWidth(canvasWidth / 4);
                    // img.scaleToHeight(canvasHeight / 4);

                    // img.set({
                    //     left: (canvasWidth - img.width * img.scaleX) / 2,
                    //     top: (canvasHeight - img.height * img.scaleY) / 2,
                    //     id: 'imgDelete'
                    // });

                    // carta
                    // img.scaleToWidth(canvasWidth / 3.5);
                    // img.scaleToHeight(canvasHeight / 3.5);

                    // img.set({
                    //     left: (canvasWidth - img.width * img.scaleX) / 2,
                    //     top: (canvasHeight - img.height * img.scaleY) / 3,
                    //     id: 'imgDelete'
                    // });
                    
                    // Tabloide
                    // let w = canvasWidth / 3.5
                    // let h = canvasHeight / 1.5
                    // console.log(w,h)
                    // img.set({
                    //     left: (canvasWidth - w * img.scaleX) / 2,
                    //     top: (canvasHeight - h * img.scaleY) / 1.5,
                    //     width: w,
                    //     height: h,
                    //     id: 'imgDelete'
                    // });

                    // Tabloide v2
                    // const originalWidth = img.width;
                    // const originalHeight = img.height;

                    // // Calcular el factor de escala para ajustar la imagen dentro del lienzo sin deformarla
                    // const scaleX = canvasWidth / originalWidth;
                    // const scaleY = canvasHeight / originalHeight;

                    // // Elegir el menor factor de escala para que la imagen no se distorsione y que quepa dentro del lienzo
                    // const scale = Math.min(scaleX, scaleY);

                    // // Escalar la imagen proporcionalmente
                    // img.scale(scale);

                    // // Centrar la imagen en el lienzo
                    // img.set({
                    //     left: (canvasWidth - img.width * scale) / 2,
                    //     top: (canvasHeight - img.height * scale) / 2,
                    //     id: 'imgDelete'
                    // });

                    
                    // logo
                    img.scaleToWidth(canvasWidth / 8);
                    img.scaleToHeight(canvasHeight / 8);

                    img.set({
                        left: (canvasWidth - img.width * img.scaleX) / 1.7,
                        top: (canvasHeight - img.height * img.scaleY) / 3,
                        id: 'imgDelete'
                    });

                    // img.scaleToWidth(521);
                    // img.scaleToHeight(365);

                    // img.set({
                    //     left: 171,
                    //     top: 96,
                    //     id: 'imgDelete'
                    // });
                    
                    
                    canvas.add(img)
                    canvas.bringObjectToFront(img)
                    canvas.renderAll()
                    return () => {
                        canvas.dispose()
                    }
                })
        }
    }

    const handleCanvasReady = useCallback((cvs: fabric.Canvas) => {
        setCanvas(cvs)

        if (canvasEl?.current) {

            const offsetWidth = canvasEl.current?.offsetWidth
            const offsetHeight = canvasEl.current?.offsetHeight

            addFabricImage(
                img,
            ).then(img => {
                img.set({
                    left: 0,
                    top: 0,
                    scaleX: offsetWidth / img.width,
                    scaleY: offsetHeight / img.height,
                    selectable: false,
                    editable: false,
                    lockMovementX: true,
                    lockMovementY: true,
                    lockRotation: true,
                    lockScalingX: true,
                    lockScalingY: true
                })
                cvs.add(img)
                cvs.renderAll()
                return () => {
                    cvs.dispose()
                }
            }).finally(()=>{
                console.log("first")
                addImage("https://res.cloudinary.com/dk41avvjd/image/upload/v1716168105/qy80kydfxvki51hwqqtb.jpg" )
            })
        }
    }, [])

    useEffect(()=>{
        if (canvas) {
            const objeto = canvas.getObjects().find((obj:any) => obj?.id === "imgDelete")
            if (objeto) {
                canvas.remove(objeto)
                canvas.renderAll() 
            } else {
                console.log('No se encontró la imagen con ese ID')
            }
            addImage(currentUrl)
        }
    },[currentUrl])

    return (
        <section className=''>
            <article className="">
                <input
                    ref={inputRef}
                    onChange={handlePic}
                    type="file"
                    className="hidden"
                />
                <FabricComponent
                    ref={canvasEl}
                    onCanvasReady={handleCanvasReady}
                    width="500"
                    height="380"
                />
                <button
                    onClick={() => inputRef.current?.click()}
                    className="py-2 px-6 bg-yellow-500 text-white rounded-xl m-4"
                >
                    subir Imagen
                </button>
                <button
                    onClick={generateImage}
                    className="py-2 px-6 bg-indigo-500 text-white rounded-xl m-4"
                >
                    Terminar Diseño
                </button>
            </article>
        </section>
    )
}

