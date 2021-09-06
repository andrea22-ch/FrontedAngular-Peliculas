/*una promesa es algo asi como un objeto de javacript
, tiene dos paramentros(resolve, reject)los cualesson de (suscces,error)respectivamente*/
export function toBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
/*una promesa tiene dos metodos : then*/

export function formatearFecha(date:Date){
   return   new Intl.DateTimeFormat('en').format(date);
}
