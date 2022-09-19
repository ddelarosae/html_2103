function validar_formulario(){
    var usuario = document.formRegistro.usuario;
    var correo = document.formRegistro.correo;
    var pass = document.formRegistro.pass;

    var usuario_longitud = usuario.value.length;
    if(usuario_longitud == 0 || usuario_longitud<8){
        alert("Debes ingresar un usuario no vacio con al menos 8 caracteres");
        usuario.focus();
        return false;
    }
}