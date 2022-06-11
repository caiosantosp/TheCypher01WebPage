window.onload = function () {

    var areaDeTextoCriptografado = document.querySelector("#areaDeTextoCriptografado");
    var areaDeresultadoCriptografado = document.querySelector("#areaDeresultadoCriptografado");
    var areaDeTextoDescriptografado = document.querySelector("#areaDeTextoDescriptografado");
    var areaDeresultadoDescriptografado = document.querySelector("#areaDeresultadoDescriptografado");

    botaoCriptografar = document.getElementById("botaoCriptografar");
    botaoDescriptografar = document.getElementById("botaoDescriptografar");

    var dict = new Map();

    dict.set("u", "3psyov+*6")
    dict.set("a", "99klklcv/.4")
    dict.set("e", "12qwrtpv+5")
    dict.set("i", "yops/032")
    dict.set("b", "031hjpsd*/.")
    dict.set("n", "9-*fgy*875")
    dict.set("m", "3fgpsv+-02")

    botaoCriptografar.addEventListener("click", function(){
        criptografarTexto(areaDeTextoCriptografado.value)
    })

    botaoDescriptografar.addEventListener("click", function(){
        descriptografarTexto(areaDeTextoDescriptografado.value)
    })

    function criptografarTexto(textoParaCriptografar){
        textoParaCriptografar = textoParaCriptografar.toLowerCase();
        for (var i = 0; i < textoParaCriptografar.length; i++) {
            for (var [keys, value] of dict) {
                if(textoParaCriptografar.substring(i,i+1) == keys){
                    textoParaCriptografar = textoParaCriptografar.replace(textoParaCriptografar.substring(i,i+1),value);
                }
            }
        }
        areaDeresultadoCriptografado.value = textoParaCriptografar;
    }

    

    function descriptografarTexto(textoParaDescriptografar){
        textoParaDescriptografar = textoParaDescriptografar.toLowerCase();
        for (var i = 0; i < textoParaDescriptografar.length; i++) {
            for (var [keys, value] of dict) {
                if (textoParaDescriptografar.includes(value))
                    {
                        textoParaDescriptografar = textoParaDescriptografar.replace(value, keys);
                    }
            }
        }
        areaDeresultadoDescriptografado.value = textoParaDescriptografar;
    }
}