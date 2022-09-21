var ventana;
function abrir() {
    ventana=window.open("","nuevo","width=200,height=200");
    setTimeout("cerrar()",5000);//1S->1000mS
}
function cerrar() {
    //setTimeout("saludo()",2000);
    console.log("Cerrar");
    ventana.close();
}
function saludo(){
    alert("Ejecutando Cerrar");
}