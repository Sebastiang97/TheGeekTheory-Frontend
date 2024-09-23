import { ChangeEvent, useCallback, useRef, useState } from 'react';
import FabricComponent from '@@/FabricComponent/FabricComponent';
import { addFabricImage } from '@/libs/Fabric/Fabric';
import { Canvas } from 'fabric';

export const Test2 = () => {
  const [canvas, setCanvas] = useState<any>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasEl = useRef<any>(null);
  const imgRef = useRef<any>(null);


  const handlePic = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    console.log(url);
    addImage(url)

  };

  const generateImage = () => {
    const dataURL = canvas.toDataURL({
      format: 'png',
      quality: 1.0
    });
    const a = document.createElement('a');
    a.download = 'image.png';
    a.href = dataURL || "";
    a.click();
  };

  const addImage = (url: string) => {
    if (canvasEl?.current) {

      addFabricImage(url)
        .then(img => {
          img.set({
            left: 0,
            top: 0,
          });

          canvas.add(img);
          img?.bringToFront()
          canvas.renderAll()
          return () => {
            canvas.dispose();
          }
        })
    }
  }

  const handleCanvasReady = useCallback((cvs: Canvas) => {
    setCanvas(cvs)

    if (canvasEl?.current) {

      const offsetWidth = canvasEl.current?.offsetWidth
      const offsetHeight = canvasEl.current?.offsetHeight

      addFabricImage(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8t1F3K4E705RDJowH--S6HhkXRRsYV7KITYCVQrMYyQ&s",
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
        });
        cvs.add(img);
        cvs.renderAll()
        return () => {
          cvs.dispose();
        }
      })
    }
  }, [])

  return (
    <section className=''>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8t1F3K4E705RDJowH--S6HhkXRRsYV7KITYCVQrMYyQ&s'
        id='image'
        ref={imgRef}
      />
      <article className="">
        <button
          onClick={() => inputRef.current?.click()}
          className="py-2 px-6 bg-yellow-500 text-white rounded-xl m-4"
          children="subir archivo"
        />
        
        <input
          ref={inputRef}
          onChange={handlePic}
          type="file"
          className="hidden"
        />
        <FabricComponent 
          ref={canvasEl} 
          onCanvasReady={handleCanvasReady} 
          width="800" 
          height="800" 
        />
        <button
          onClick={generateImage}
          className="py-2 px-6 bg-indigo-500 text-white rounded-xl m-4"
          children="Generar archivo"
        />
      </article>
    </section>
  );
}

