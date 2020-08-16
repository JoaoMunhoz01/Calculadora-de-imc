var geth = "";
function capturar1 () {
    geth = document.getElementById('valor1').value;
}

var getw = "";
function capturar2 () {
    getw = document.getElementById('valor2').value;
      
        var imc = getw/ (geth*geth);

        if(imc <= 16.9){
            document.getElementById("resultado").innerHTML = "<h1>Muito abaixo do peso.<br> O que pode acontecer: Queda de cabelo, infertilidade, ausência menstrual.</h1>";
        }

        else {
            if(imc <= 18.4){
                document.getElementById("resultado").innerHTML = "<h1>Abaixo do peso.<br> O que pode acontecer: Fadiga, stress, ansiedade.</h1>";
            }

            else {
                if(imc <= 24.9){
                    document.getElementById("resultado").innerHTML = "<h1>Peso normal.<br> O que pode acontecer: Menor risco de doenças cardíacas e vasculares.</h1>";
                }

                else {
                    if(imc <= 29.9){
                        document.getElementById("resultado").innerHTML = "<h1>Acima do peso.<br> O que pode acontecer: Fadiga, má circulação, varizes.</h1>";
                    }

                    else{ 
                        if(imc <= 34.9){
                            document.getElementById("resultado").innerHTML = "<h1>Obesidade Grau I.<br> O que pode acontecer: Diabetes, angina, infarto, aterosclerose.</h1>";
                        }

                        else {
                            if(imc <= 40){
                                document.getElementById("resultado").innerHTML = "<h1>Obesidade Grau II.<br> O que pode acontecer: Apneia do sono, falta de ar.</h1>";
                            }

                            else{
                                document.getElementById("resultado").innerHTML = "<h1>Obesidade Grau III.<br> O que pode acontecer: Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC.</h1>";
                            }
                        }
                    }
                }
            }
        }
    
}

