var actividad=parseInt(prompt("Ingrese su nota"));
var notaResultado;
retornaNotas(actividad);
function retornaNotas(nota){
    switch(nota){
        case 6:
            notaResultado="aprobado";
            break;
        case 7:
            notaResultado="bien";
            break;
        case 8:
            notaResultado="excelso";
            break;
        case 9:
            notaResultado="muy bien";
            break;
        case 10:
            notaResultado="excelente";
            break;
        default:
            notaResultado="suspendido";
    }
    return(notaResultado);
}
document.write("Su nota es: "+notaResultado);
