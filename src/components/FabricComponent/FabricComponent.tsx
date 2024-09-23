import { forwardRef, useImperativeHandle, useEffect, useRef } from 'react';
import * as fabric from 'fabric';

// Define las props del componente Canvas
interface CanvasProps {
    onCanvasReady?: (canvas: fabric.Canvas) => void;
    width: string
    height: string
}

// Usa forwardRef para poder pasar la referencia del canvas al componente padre
const FabricComponent = forwardRef<HTMLCanvasElement, CanvasProps>((props, ref) => {
    // Usa un ref interno para el canvas
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Usa useImperativeHandle para exponer la referencia del canvas al componente padre
    useImperativeHandle(ref, () => (canvasRef.current as HTMLCanvasElement));

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = new fabric.Canvas(canvasRef.current);
            if (props.onCanvasReady) {
                props.onCanvasReady(canvas);
            }

            // // Opcional: Ajusta el tamaño del canvas
            // canvas.setWidth(window.innerWidth);
            // canvas.setHeight(window.innerHeight);

            return () => {
                canvas.dispose()
            }
        }
    }, [props.onCanvasReady]);

    return (
        <div 
            className="rounded-xl border border-1 border-yellow-500 w-full flex justify-center">
            <canvas 
                width={props.width}
                height={props.height}
                ref={canvasRef} />
        </div>
    )
});

export default FabricComponent;
