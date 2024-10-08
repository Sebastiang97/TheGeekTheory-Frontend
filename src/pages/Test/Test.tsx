// import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
// import { fabric } from 'fabric';
// import { ChangeEvent, useEffect, useRef } from 'react';

// export const Test = () => {
//   const inputRef = useRef<HTMLInputElement>(null);
//   const { editor, onReady } = useFabricJSEditor();

//   const handlePic = (event: ChangeEvent<HTMLInputElement>) => {
//     if (!event.target.files) return;
//     const file = event.target.files[0];
//     const url = URL.createObjectURL(file);
//     console.log(url);
//     fabric.Image.fromURL(url, (oImg: Klass | Object) => {
//       oImg.scale(0.10).set('flipX', true);
//       editor?.canvas.add(oImg);
//     });
//   };

//   const generateImage = () => {
//     const dataURL = editor?.canvas.toDataURL();
//     const a = document.createElement('a');
//     a.download = 'image.png';
//     a.href = dataURL || "";
//     a.click();
//     // en lugar de descargar, podemos subirla al server (fetch)
//   };

//   useEffect(()=>{
//     // const url = URL.createObjectURL(file);
//     // console.log(url);
//     const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8t1F3K4E705RDJowH--S6HhkXRRsYV7KITYCVQrMYyQ&s"
//     fabric.Image.fromURL(url, (oImg: Klass | Object) => {
//       console.log("first") 
//       oImg.scale(1.0).set('flipX', true);
//       editor?.canvas.add(oImg);
//     });
//   },[])

//   return (
//     <>
//       <section className='w-full p-5'>
//         <article className="w-1/2">
//           <button
//             onClick={() => inputRef.current?.click()}
//             className="py-2 px-6 bg-yellow-500 text-white rounded-xl m-4"
//             children="subir archivo"
//           />
//           <input
//             ref={inputRef}
//             onChange={handlePic}
//             type="file"
//             className="hidden"
//           />
//           <div className="rounded-xl border border-1 border-yellow-500 ">
//             <FabricJSCanvas onReady={onReady} />
//           </div>
//           <button
//             onClick={generateImage}
//             className="py-2 px-6 bg-indigo-500 text-white rounded-xl m-4"
//             children="Generar archivo"
//           />
//         </article>
//         <article></article>
//       </section>
//     </>
//     // <article className="flex-col min-h-full min-w-full  h-[100vh] flex justify-center items-center">
//     //   <button
//     //     onClick={() => inputRef.current?.click()}
//     //     className="py-2 px-6 bg-yellow-500 text-white rounded-xl m-4"
//     //     children="subir archivo"
//     //   />
//     //   <input
//     //     ref={inputRef}
//     //     onChange={handlePic}
//     //     type="file"
//     //     className="hidden"
//     //   />
//     //   <div className="rounded-xl border border-4 border-yellow-500 ">
//     //     <FabricJSCanvas onReady={onReady} />
//     //   </div>
//     //   <button
//     //     onClick={generateImage}
//     //     className="py-2 px-6 bg-indigo-500 text-white rounded-xl m-4"
//     //     children="Generar archivo"
//     //   />
//     // </article>
//   );
// }

