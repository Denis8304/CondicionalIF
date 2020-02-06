function mostrar()
{
//tomo la edad  
box1 = document.getElementById("edad").value;
box2 = document.getElementById("estadoCivil").value;
if(box1<18 && box2!=="Soltero")
{
    alert("'Es muy pequeño para NO ser soltero");
}


}//FIN DE LA FUNCIÓN