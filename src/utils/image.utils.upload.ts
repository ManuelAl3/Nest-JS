import { extname } from "path";

export const modFilename = (req, file, callback) => {
    //avatar0123456789.png
    const name = file.originalname.split('.')[0];//Parte el nombre de la imagen para que quede solo el nombre y no la extensión
    const fileExtName = extname(file.originalname);//Coloca la extensión despues del punto y si no hay punto se añade un espacio en blanco
    const randomName = Array(4)//Despues de el nombre original genera 4 numeros aleatorios
    .fill(null)//Define el array vacio
    .map(()=>Math.round(Math.random() * 10).toString())//.map toma una rreglo y regresa un arreglo con resultados. Aquí se genera un numero aleatorio dentro de los 10 digitos y lo pasa a string
    .join('');//.join convierte el arrreglo en una cadena de texto
    callback(null, `${name}${randomName}${fileExtName}`);//concatena las variables ya definidas usando typeScript
}