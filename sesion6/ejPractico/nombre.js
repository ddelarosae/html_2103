function validar_formulario(){
    var usuario = document.getElement.usuario;
    var correo = document.getElement.correo;
    var pass = document.getElement.pass;

    var usuario_longitud = usuario.value.lenght;
    if(usuario_longitud == 0 && usuario_longitud<8){
        alert("Debes ingresar un usuario no vacio con al menos 8 caracteres")
    }
}