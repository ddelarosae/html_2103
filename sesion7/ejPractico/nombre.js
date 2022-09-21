function validar_formulario(){
    var usuario = document.formRegistro.usuario;
    var correo = document.formRegistro.correo;
    var pass = document.formRegistro.pass;

    var usuario_longitud = usuario.value.length;
    var pass_longitud = pass.value.length;
    var correo_formato=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(usuario_longitud == 0 || usuario_longitud<8){
        alert("Debes ingresar un usuario no vacio con al menos 8 caracteres");
    }
    if(pass == 0 || pass_longitud<8){
        alert("Debes ingresar una clave no vacia con al menos 8 caracteres");
    }
    if(!correo.value.match(correo_formato)){
        alert("El correo no tiene un formato adecuado");
    }
    
}