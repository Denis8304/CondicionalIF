function mostrar()
{
//tomo la edad  
box1 = document.getElementById("edad").value;

if(box1>=13 && box1<=17)
{
    alert("Es adolecente");
}
else if(box1 >= 18)
{
    alert("Usted es mayor de edad");
}
else
{
    alert("Es menor de edad");
}



}//FIN DE LA FUNCIÓN