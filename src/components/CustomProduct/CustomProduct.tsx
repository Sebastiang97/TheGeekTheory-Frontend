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
            const imgBase64 = canvas.toDataURL({
                format: 'png',
                quality: 1.0,
                multiplier: 1
            })
            const file = base64ToFile(imgBase64, 'image.png')
            handlePrint(file)
        }
    }

    const addImage = (url: string) => {
        if (canvasEl?.current && canvas) {

            addFabricImage(url)
                .then(img => {
                    const canvasWidth = canvas.width;
                    const canvasHeight = canvas.height;
                    img.scaleToWidth(canvasWidth / 4);
                    img.scaleToHeight(canvasHeight / 4);

                    img.set({
                        left: (canvasWidth - img.width * img.scaleX) / 2,
                        top: (canvasHeight - img.height * img.scaleY) / 2,
                        id: 'imgDelete'
                    });
                    
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

