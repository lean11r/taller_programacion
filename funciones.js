function calcular_imc(event) {
    event.preventDefault();
    var altura;
    var peso;
    altura = document.getElementById("altura").value;
    peso = document.getElementById("peso").value;
    zap = document.getElementById("img_peso");
    imc = peso/(altura*altura);
    document.getElementById("resu").innerText = "imc" +
    imc.toFixed(2);

    if (imc < 18.5) {
        zap.setAttribute("src", "homeroflacoo.png");
    }else if (imc > 18.5 && imc < 24.9)   {
        zap.setAttribute("src", "homeronormaal.png");
    } else 
    {
        zap.setAttribute("src", "homeroobeso_2.png") ;
     }
}