export default function validarCrearProducto(valores) {
    let errores = {};
    console.log(valores);
    //validar el nombre del usuario
    if (!valores.nombre) {
        errores.nombre = "El nombre es obligatorio"
    }
    //validar la empresa
    if (!valores.empresa) {
        errores.empresa = "La empresa es obligatoria"
    }
    // if(!valores.imagenUrl){
    //     errores.imagenUrl = "la imagen es obligatoria"
    // }
    //validar la url
    if (!valores.url) {
        errores.url = "La url del producto es obligatoria"
    }else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)){
        errores.url = "La url no es válida"
    }
    //validar la descripcion
    if (!valores.descripcion) {
        errores.descripcion = "La descripcion es obligatoria"
    }

   


    return errores
}