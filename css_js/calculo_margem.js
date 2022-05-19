function calcular() {
    // verificação de campos em branco 

    if ((document.getElementById("campo3").value == "") || (document.getElementById("campo2").value == "") || (document.getElementById("campo1").value == "")) {
        alert("Campos obrigatórios não preenchidos!");
        AbortController
    } else {

        // Calculo valor 0%
        var valor1 = parseFloat(document.getElementById("campo3").value) /
            parseFloat(document.getElementById("campo2").value);
        var a = document.getElementById("campo3").value
        var b = document.getElementById("campo3").value * 0 / 100;
        var re1 = a - b;
        var c = re1 - (re1 * (0.0925 + document.getElementById("campo1").value / 100));
        var d = c - document.getElementById("campo2").value;
        var e = d / c * 100;

        document.getElementById("tela").innerHTML = valor1.toFixed(2);
        document.getElementById("li1").innerHTML = re1.toFixed(2);
        document.getElementById("li2").innerHTML = c.toFixed(2);
        document.getElementById("li3").innerHTML = d.toFixed(2);
        if (e < 0) {
            document.getElementById("li4").innerHTML = e.toFixed(2);
            document.getElementById("li4").style.color = "";
            document.getElementById("li4").style.backgroundColor = "#f56262";
        } else {
            document.getElementById("li4").innerHTML = e.toFixed(2);
            document.getElementById("li4").style.color = "";
            document.getElementById("li4").style.backgroundColor = "#ffffff";
        }

        // Calculo valor 2%

        var a2 = document.getElementById("campo3").value
        var b2 = document.getElementById("campo3").value * 2 / 100;
        var re2 = a2 - b2;
        var c2 = re2 - (re2 * (0.0925 + document.getElementById("campo1").value / 100));
        var d2 = c2 - document.getElementById("campo2").value;
        var e2 = d2 / c2 * 100;


        document.getElementById("li5").innerHTML = re2.toFixed(2);
        document.getElementById("li6").innerHTML = c2.toFixed(2);
        document.getElementById("li7").innerHTML = d2.toFixed(2);
        if (e2 < 0) {
            document.getElementById("li8").innerHTML = e2.toFixed(2);
            document.getElementById("li8").style.color = "";
            document.getElementById("li8").style.backgroundColor = "#f56262";
        } else {
            document.getElementById("li8").innerHTML = e2.toFixed(2);
            document.getElementById("li8").style.color = "";
            document.getElementById("li8").style.backgroundColor = "#ffffff";
        }

        // Calculo valor 5%

        var a3 = document.getElementById("campo3").value
        var b3 = document.getElementById("campo3").value * 5 / 100;
        var re3 = a3 - b3;
        var c3 = re3 - (re3 * (0.0925 + document.getElementById("campo1").value / 100));
        var d3 = c3 - document.getElementById("campo2").value;
        var e3 = d3 / c3 * 100;


        document.getElementById("li9").innerHTML = re3.toFixed(2);
        document.getElementById("li10").innerHTML = c3.toFixed(2);
        document.getElementById("li11").innerHTML = d3.toFixed(2);
        if (e3 < 0) {
            document.getElementById("li12").innerHTML = e3.toFixed(2);
            document.getElementById("li12").style.color = "";
            document.getElementById("li12").style.backgroundColor = "#f56262";
        } else {
            document.getElementById("li12").innerHTML = e3.toFixed(2);
            document.getElementById("li12").style.color = "";
            document.getElementById("li12").style.backgroundColor = "#ffffff";
        }

        // Calculo valor 10%

        var a4 = document.getElementById("campo3").value
        var b4 = document.getElementById("campo3").value * 10 / 100;
        var re4 = a4 - b4;
        var c4 = re4 - (re4 * (0.0925 + document.getElementById("campo1").value / 100));
        var d4 = c4 - document.getElementById("campo2").value;
        var e4 = d4 / c4 * 100;


        document.getElementById("li13").innerHTML = re4.toFixed(2);
        document.getElementById("li14").innerHTML = c4.toFixed(2);
        document.getElementById("li15").innerHTML = d4.toFixed(2);
        if (e4 < 0) {
            document.getElementById("li16").innerHTML = e4.toFixed(2);
            document.getElementById("li16").style.color = "";
            document.getElementById("li16").style.backgroundColor = "#f56262";
        } else {
            document.getElementById("li16").innerHTML = e4.toFixed(2);
            document.getElementById("li16").style.color = "";
            document.getElementById("li16").style.backgroundColor = "#ffffff";
        }

        // Calculo valor 15%

        var a5 = document.getElementById("campo3").value
        var b5 = document.getElementById("campo3").value * 15 / 100;
        var re5 = a5 - b5;
        var c5 = re5 - (re5 * (0.0925 + document.getElementById("campo1").value / 100));
        var d5 = c5 - document.getElementById("campo2").value;
        var e5 = d5 / c5 * 100;


        document.getElementById("li17").innerHTML = re5.toFixed(2);
        document.getElementById("li18").innerHTML = c5.toFixed(2);
        document.getElementById("li19").innerHTML = d5.toFixed(2);
        if (e5 < 0) {
            document.getElementById("li20").innerHTML = e5.toFixed(2);
            document.getElementById("li20").style.color = "";
            document.getElementById("li20").style.backgroundColor = "#f56262";
        } else {
            document.getElementById("li20").innerHTML = e5.toFixed(2);
            document.getElementById("li20").style.color = "";
            document.getElementById("li20").style.backgroundColor = "rgb(80, 177, 80)";
        }

        // Calculo valor 20%

        var a6 = document.getElementById("campo3").value
        var b6 = document.getElementById("campo3").value * 20 / 100;
        var re6 = a6 - b6;
        var c6 = re6 - (re6 * (0.0925 + document.getElementById("campo1").value / 100));
        var d6 = c6 - document.getElementById("campo2").value;
        var e6 = d6 / c6 * 100;


        document.getElementById("li21").innerHTML = re6.toFixed(2);
        document.getElementById("li22").innerHTML = c6.toFixed(2);
        document.getElementById("li23").innerHTML = d6.toFixed(2);
        if (e6 < 0) {
            document.getElementById("li24").innerHTML = e6.toFixed(2);
            document.getElementById("li24").style.color = "";
            document.getElementById("li24").style.backgroundColor = "#f56262";
        } else {
            document.getElementById("li24").innerHTML = e6.toFixed(2);
            document.getElementById("li24").style.color = "";
            document.getElementById("li24").style.backgroundColor = "#ffffff";
        }

        // Calculo valor 25%

        var a7 = document.getElementById("campo3").value
        var b7 = document.getElementById("campo3").value * 25 / 100;
        var re7 = a7 - b7;
        var c7 = re7 - (re7 * (0.0925 + document.getElementById("campo1").value / 100));
        var d7 = c7 - document.getElementById("campo2").value;
        var e7 = d7 / c7 * 100;


        document.getElementById("li25").innerHTML = re7.toFixed(2);
        document.getElementById("li26").innerHTML = c7.toFixed(2);
        document.getElementById("li27").innerHTML = d7.toFixed(2);
        if (e7 < 0) {
            document.getElementById("li28").innerHTML = e7.toFixed(2);
            document.getElementById("li28").style.color = "";
            document.getElementById("li28").style.backgroundColor = "#f56262";
        } else {
            document.getElementById("li28").innerHTML = e7.toFixed(2);
            document.getElementById("li28").style.color = "";
            document.getElementById("li28").style.backgroundColor = "#ffffff";
        }


        // Calculo valor 28%

        var a8 = document.getElementById("campo3").value
        var b8 = document.getElementById("campo3").value * 28 / 100;
        var re8 = a8 - b8;
        var c8 = re8 - (re8 * (0.0925 + document.getElementById("campo1").value / 100));
        var d8 = c8 - document.getElementById("campo2").value;
        var e8 = d8 / c8 * 100;


        document.getElementById("li29").innerHTML = re8.toFixed(2);
        document.getElementById("li30").innerHTML = c8.toFixed(2);
        document.getElementById("li31").innerHTML = d8.toFixed(2);
        if (e8 < 0) {
            document.getElementById("li32").innerHTML = e8.toFixed(2);
            document.getElementById("li32").style.color = "";
            document.getElementById("li32").style.backgroundColor = "#f56262";
        } else {
            document.getElementById("li32").innerHTML = e8.toFixed(2);
            document.getElementById("li32").style.color = "";
            document.getElementById("li32").style.backgroundColor = "#ffffff";
        }

        // Calculo valor 30%

        var a9 = document.getElementById("campo3").value
        var b9 = document.getElementById("campo3").value * 30 / 100;
        var re9 = a9 - b9;
        var c9 = re9 - (re9 * (0.0925 + document.getElementById("campo1").value / 100));
        var d9 = c9 - document.getElementById("campo2").value;
        var e9 = d9 / c9 * 100;


        document.getElementById("li33").innerHTML = re9.toFixed(2);
        document.getElementById("li34").innerHTML = c9.toFixed(2);
        document.getElementById("li35").innerHTML = d9.toFixed(2);
        if (e9 < 0) {
            document.getElementById("li36").innerHTML = e9.toFixed(2);
            document.getElementById("li36").style.color = "";
            document.getElementById("li36").style.backgroundColor = "#f56262";
        } else {
            document.getElementById("li36").innerHTML = e9.toFixed(2);
            document.getElementById("li36").style.color = "";
            document.getElementById("li36").style.backgroundColor = "#ffffff";
        }

        // Calculo valor 33%

        var a10 = document.getElementById("campo3").value
        var b10 = document.getElementById("campo3").value * 33 / 100;
        var re10 = a10 - b10;
        var c10 = re10 - (re10 * (0.0925 + document.getElementById("campo1").value / 100));
        var d10 = c10 - document.getElementById("campo2").value;
        var e10 = d10 / c10 * 100;


        document.getElementById("li37").innerHTML = re10.toFixed(2);
        document.getElementById("li38").innerHTML = c10.toFixed(2);
        document.getElementById("li39").innerHTML = d10.toFixed(2);
        if (e10 < 0) {
            document.getElementById("li40").innerHTML = e10.toFixed(2);
            document.getElementById("li40").style.color = "";
            document.getElementById("li40").style.backgroundColor = "#f56262";
        } else {
            document.getElementById("li40").innerHTML = e10.toFixed(2);
            document.getElementById("li40").style.color = "";
            document.getElementById("li40").style.backgroundColor = "#ffffff";
        }


        // Calculo valor 35%

        var a11 = document.getElementById("campo3").value
        var b11 = document.getElementById("campo3").value * 35 / 100;
        var re11 = a11 - b11;
        var c11 = re11 - (re11 * (0.0925 + document.getElementById("campo1").value / 100));
        var d11 = c11 - document.getElementById("campo2").value;
        var e11 = d11 / c11 * 100;


        document.getElementById("li41").innerHTML = re11.toFixed(2);
        document.getElementById("li42").innerHTML = c11.toFixed(2);
        document.getElementById("li43").innerHTML = d11.toFixed(2);
        if (e11 < 0) {
            document.getElementById("li44").innerHTML = e11.toFixed(2);
            document.getElementById("li44").style.color = "";
            document.getElementById("li44").style.backgroundColor = "#f56262";
        } else {
            document.getElementById("li44").innerHTML = e11.toFixed(2);
            document.getElementById("li44").style.color = "";
            document.getElementById("li44").style.backgroundColor = "#ffffff";
        }

        // Calculo valor 40%

        var a12 = document.getElementById("campo3").value
        var b12 = document.getElementById("campo3").value * 40 / 100;
        var re12 = a12 - b12;
        var c12 = re12 - (re12 * (0.0925 + document.getElementById("campo1").value / 100));
        var d12 = c12 - document.getElementById("campo2").value;
        var e12 = d12 / c12 * 100;


        document.getElementById("li45").innerHTML = re12.toFixed(2);
        document.getElementById("li46").innerHTML = c12.toFixed(2);
        document.getElementById("li47").innerHTML = d12.toFixed(2);
        if (e12 < 0) {
            document.getElementById("li48").innerHTML = e12.toFixed(2);
            document.getElementById("li48").style.color = "";
            document.getElementById("li48").style.backgroundColor = "#f56262";
        } else {
            document.getElementById("li48").innerHTML = e12.toFixed(2);
            document.getElementById("li48").style.color = "";
            document.getElementById("li48").style.backgroundColor = "#ffffff";
        }

        // Calculo valor 45%

        var a13 = document.getElementById("campo3").value
        var b13 = document.getElementById("campo3").value * 45 / 100;
        var re13 = a13 - b13;
        var c13 = re13 - (re13 * (0.0925 + document.getElementById("campo1").value / 100));
        var d13 = c13 - document.getElementById("campo2").value;
        var e13 = d13 / c13 * 100;


        document.getElementById("li49").innerHTML = re13.toFixed(2);
        document.getElementById("li50").innerHTML = c13.toFixed(2);
        document.getElementById("li51").innerHTML = d13.toFixed(2);
        if (e13 < 0) {
            document.getElementById("li52").innerHTML = e13.toFixed(2);
            document.getElementById("li52").style.color = "";
            document.getElementById("li52").style.backgroundColor = "#f56262";
        } else {
            document.getElementById("li52").innerHTML = e13.toFixed(2);
            document.getElementById("li52").style.color = "";
            document.getElementById("li52").style.backgroundColor = "#ffffff";
        }

        // Calculo valor 50%

        var a14 = document.getElementById("campo3").value
        var b14 = document.getElementById("campo3").value * 50 / 100;
        var re14 = a14 - b14;
        var c14 = re14 - (re14 * (0.0925 + document.getElementById("campo1").value / 100));
        var d14 = c14 - document.getElementById("campo2").value;
        var e14 = d14 / c14 * 100;


        document.getElementById("li53").innerHTML = re14.toFixed(2);
        document.getElementById("li54").innerHTML = c14.toFixed(2);
        document.getElementById("li55").innerHTML = d14.toFixed(2);
        if (e14 < 0) {
            document.getElementById("li56").innerHTML = e14.toFixed(2);
            document.getElementById("li56").style.color = "";
            document.getElementById("li56").style.backgroundColor = "#f56262";
        } else {
            document.getElementById("li56").innerHTML = e14.toFixed(2);
            document.getElementById("li56").style.color = "";
            document.getElementById("li56").style.backgroundColor = "#ffffff";
        }

        // Calculo valor 60%

        var a15 = document.getElementById("campo3").value
        var b15 = document.getElementById("campo3").value * 60 / 100;
        var re15 = a15 - b15;
        var c15 = re15 - (re15 * (0.0925 + document.getElementById("campo1").value / 100));
        var d15 = c15 - document.getElementById("campo2").value;
        var e15 = d15 / c15 * 100;


        document.getElementById("li57").innerHTML = re15.toFixed(2);
        document.getElementById("li58").innerHTML = c15.toFixed(2);
        document.getElementById("li59").innerHTML = d15.toFixed(2);
        if (e15 < 0) {
            document.getElementById("li60").innerHTML = e15.toFixed(2);
            document.getElementById("li60").style.color = "";
            document.getElementById("li60").style.backgroundColor = "#f56262";
        } else {
            document.getElementById("li60").innerHTML = e15.toFixed(2);
            document.getElementById("li60").style.color = "";
            document.getElementById("li60").style.backgroundColor = "#ffffff";
        }

    }
}

// LIMPAR

function limpar() {
    document.getElementById("campo3").value = "";
    document.getElementById("campo2").value = "";
    document.getElementById("campo1").value = "";
    document.getElementById("tela").innerHTML = "";
    document.getElementById("li1").innerHTML = '0,00';
    document.getElementById("li2").innerHTML = '0,00';
    document.getElementById("li3").innerHTML = '0,00';
    document.getElementById("li4").innerHTML = '0,00';
    document.getElementById("li5").innerHTML = '0,00';
    document.getElementById("li6").innerHTML = '0,00';
    document.getElementById("li7").innerHTML = '0,00';
    document.getElementById("li8").innerHTML = '0,00';
    document.getElementById("li9").innerHTML = '0,00';
    document.getElementById("li10").innerHTML = '0,00';
    document.getElementById("li11").innerHTML = '0,00';
    document.getElementById("li12").innerHTML = '0,00';
    document.getElementById("li13").innerHTML = '0,00';
    document.getElementById("li14").innerHTML = '0,00';
    document.getElementById("li15").innerHTML = '0,00';
    document.getElementById("li16").innerHTML = '0,00';
    document.getElementById("li17").innerHTML = '0,00';
    document.getElementById("li18").innerHTML = '0,00';
    document.getElementById("li19").innerHTML = '0,00';
    document.getElementById("li20").innerHTML = '0,00';
    document.getElementById("li21").innerHTML = '0,00';
    document.getElementById("li22").innerHTML = '0,00';
    document.getElementById("li23").innerHTML = '0,00';
    document.getElementById("li24").innerHTML = '0,00';
    document.getElementById("li25").innerHTML = '0,00';
    document.getElementById("li26").innerHTML = '0,00';
    document.getElementById("li27").innerHTML = '0,00';
    document.getElementById("li28").innerHTML = '0,00';
    document.getElementById("li29").innerHTML = '0,00';
    document.getElementById("li30").innerHTML = '0,00';
    document.getElementById("li31").innerHTML = '0,00';
    document.getElementById("li32").innerHTML = '0,00';
    document.getElementById("li33").innerHTML = '0,00';
    document.getElementById("li34").innerHTML = '0,00';
    document.getElementById("li35").innerHTML = '0,00';
    document.getElementById("li36").innerHTML = '0,00';
    document.getElementById("li37").innerHTML = '0,00';
    document.getElementById("li38").innerHTML = '0,00';
    document.getElementById("li39").innerHTML = '0,00';
    document.getElementById("li40").innerHTML = '0,00';
    document.getElementById("li41").innerHTML = '0,00';
    document.getElementById("li42").innerHTML = '0,00';
    document.getElementById("li43").innerHTML = '0,00';
    document.getElementById("li44").innerHTML = '0,00';
    document.getElementById("li45").innerHTML = '0,00';
    document.getElementById("li46").innerHTML = '0,00';
    document.getElementById("li47").innerHTML = '0,00';
    document.getElementById("li48").innerHTML = '0,00';
    document.getElementById("li49").innerHTML = '0,00';
    document.getElementById("li50").innerHTML = '0,00';
    document.getElementById("li51").innerHTML = '0,00';
    document.getElementById("li52").innerHTML = '0,00';
    document.getElementById("li53").innerHTML = '0,00';
    document.getElementById("li54").innerHTML = '0,00';
    document.getElementById("li55").innerHTML = '0,00';
    document.getElementById("li56").innerHTML = '0,00';
    document.getElementById("li57").innerHTML = '0,00';
    document.getElementById("li58").innerHTML = '0,00';
    document.getElementById("li59").innerHTML = '0,00';
    document.getElementById("li60").innerHTML = '0,00';
    document.getElementById("li60").style.color = "";
    document.getElementById("li60").style.backgroundColor = "#ffffff";
    document.getElementById("li56").style.color = "";
    document.getElementById("li56").style.backgroundColor = "#ffffff";
    document.getElementById("li52").style.color = "";
    document.getElementById("li52").style.backgroundColor = "#ffffff";
    document.getElementById("li48").style.color = "";
    document.getElementById("li48").style.backgroundColor = "#ffffff";
    document.getElementById("li44").style.color = "";
    document.getElementById("li44").style.backgroundColor = "#ffffff";
    document.getElementById("li40").style.color = "";
    document.getElementById("li40").style.backgroundColor = "#ffffff";
    document.getElementById("li36").style.color = "";
    document.getElementById("li36").style.backgroundColor = "#ffffff";
    document.getElementById("li32").style.color = "";
    document.getElementById("li32").style.backgroundColor = "#ffffff";
    document.getElementById("li28").style.color = "";
    document.getElementById("li28").style.backgroundColor = "#ffffff";
    document.getElementById("li24").style.color = "";
    document.getElementById("li24").style.backgroundColor = "#ffffff";
    document.getElementById("li20").style.color = "";
    document.getElementById("li20").style.backgroundColor = "rgb(80, 177, 80)";
    document.getElementById("li16").style.color = "";
    document.getElementById("li16").style.backgroundColor = "#ffffff";
    document.getElementById("li12").style.color = "";
    document.getElementById("li12").style.backgroundColor = "#ffffff";
    document.getElementById("li8").style.color = "";
    document.getElementById("li8").style.backgroundColor = "#ffffff";
    document.getElementById("li4").style.color = "";
    document.getElementById("li4").style.backgroundColor = "#ffffff";

    document.getElementById("lia").style.backgroundColor = "#ffffff";

        document.getElementById("li4").style.color = "rgb(255,0,0)";
        document.getElementById("li5").style.backgroundColor = "#ffffff";
        document.getElementById("li6").style.backgroundColor = "#ffffff";
        document.getElementById("li7").style.backgroundColor = "#ffffff";
        document.getElementById("li8").style.backgroundColor = "#ffffff";
        document.getElementById("lib").style.backgroundColor = "#ffffff";
        document.getElementById("li9").style.backgroundColor = "#ffffff";
        document.getElementById("li10").style.backgroundColor = "#ffffff";
        document.getElementById("li11").style.backgroundColor = "#ffffff";
        document.getElementById("li12").style.backgroundColor = "#ffffff";
        document.getElementById("lic").style.backgroundColor = "#ffffff";
        document.getElementById("li13").style.backgroundColor = "#ffffff";
        document.getElementById("li14").style.backgroundColor = "#ffffff";
        document.getElementById("li15").style.backgroundColor = "#ffffff";
        document.getElementById("li16").style.backgroundColor = "#ffffff";
        document.getElementById("lid").style.backgroundColor = "rgb(80, 177, 80)";
        document.getElementById("li17").style.backgroundColor = "rgb(80, 177, 80)";
        document.getElementById("li18").style.backgroundColor = "rgb(80, 177, 80)";
        document.getElementById("li19").style.backgroundColor = "rgb(80, 177, 80)";
        document.getElementById("li20").style.backgroundColor = "rgb(80, 177, 80)";
        document.getElementById("li21").style.backgroundColor = "#ffffff";
        document.getElementById("li22").style.backgroundColor = "#ffffff";
        document.getElementById("li23").style.backgroundColor = "#ffffff";
        document.getElementById("li24").style.backgroundColor = "#ffffff";
        document.getElementById("li25").style.backgroundColor = "#ffffff";
        document.getElementById("li26").style.backgroundColor = "#ffffff";
        document.getElementById("li27").style.backgroundColor = "#ffffff";
        document.getElementById("li28").style.backgroundColor = "#ffffff";
        document.getElementById("li29").style.backgroundColor = "#ffffff";
        document.getElementById("li30").style.backgroundColor = "#ffffff";
        document.getElementById("li31").style.backgroundColor = "#ffffff";
        document.getElementById("li32").style.backgroundColor = "#ffffff";
        document.getElementById("li33").style.backgroundColor = "#ffffff";
        document.getElementById("li34").style.backgroundColor = "#ffffff";
        document.getElementById("li35").style.backgroundColor = "#ffffff";
        document.getElementById("li36").style.backgroundColor = "#ffffff";
        document.getElementById("li37").style.backgroundColor = "#ffffff";
        document.getElementById("li38").style.backgroundColor = "#ffffff";
        document.getElementById("li39").style.backgroundColor = "#ffffff";
        document.getElementById("li40").style.backgroundColor = "#ffffff";
        document.getElementById("li41").style.backgroundColor = "#ffffff";
        document.getElementById("li42").style.backgroundColor = "#ffffff";
        document.getElementById("li43").style.backgroundColor = "#ffffff";
        document.getElementById("li44").style.backgroundColor = "#ffffff";
        document.getElementById("li45").style.backgroundColor = "#ffffff";
        document.getElementById("li46").style.backgroundColor = "#ffffff";
        document.getElementById("li47").style.backgroundColor = "#ffffff";
        document.getElementById("li48").style.backgroundColor = "#ffffff";
        document.getElementById("li49").style.backgroundColor = "#ffffff";
        document.getElementById("li50").style.backgroundColor = "#ffffff";
        document.getElementById("li51").style.backgroundColor = "#ffffff";
        document.getElementById("li52").style.backgroundColor = "#ffffff";
        document.getElementById("li53").style.backgroundColor = "#ffffff";
        document.getElementById("li54").style.backgroundColor = "#ffffff";
        document.getElementById("li55").style.backgroundColor = "#ffffff";
        document.getElementById("li56").style.backgroundColor = "#ffffff";
        document.getElementById("li57").style.backgroundColor = "#ffffff";
        document.getElementById("li58").style.backgroundColor = "#ffffff";
        document.getElementById("li59").style.backgroundColor = "#ffffff";
        document.getElementById("li60").style.backgroundColor = "#ffffff";
        document.getElementById("lid1").style.backgroundColor = "#ffffff";
        document.getElementById("lie").style.backgroundColor = "#ffffff";
        document.getElementById("lif").style.backgroundColor = "#ffffff";
        document.getElementById("lig").style.backgroundColor = "#ffffff";
        document.getElementById("lih").style.backgroundColor = "#ffffff";
        document.getElementById("lii").style.backgroundColor = "#ffffff";
        document.getElementById("lij").style.backgroundColor = "#ffffff";
        document.getElementById("lik").style.backgroundColor = "#ffffff";
        document.getElementById("lil").style.backgroundColor = "#ffffff";
        document.getElementById("lim").style.backgroundColor = "#ffffff";
        

}

$(document).ready(function () {
    $('.pula').keypress(function (e) {
        var tecla = (e.keyCode ? e.keyCode : e.which);
        if (tecla == 13) {
            campo = $('.pula');
            indice = campo.index(this);
            if (campo[indice + 1] != null) {
                proximo = campo[indice + 1];
                proximo.focus();
            }
        }

    })
})

function sugerir() {
    // icms 4%
    if (document.getElementById("campo1").value == '') {
        alert("Preencher o campo ICMS")
        AbortController
    } else {
        if (document.getElementById("campo1").value <= 11) {
            alert("Sugestão de preço disponivel apenas para ICMS 12%");
            AbortController;
        } else if (document.getElementById("campo1").value >= 13) {
            alert("Sugestão de preço disponivel apenas para ICMS 12%");
            AbortController;
        } else
            // icms 12%
            if (document.getElementById("campo1").value = 12) {
                var a = document.getElementById("campo2").value;
                if (a == "" || a < 0) {
                    alert("Campo Custo não pode ser menor ou igual a 0(zero)");
                    AbortController;
                } else if (a >= 0 && a < 5) {
                    var b = a * 278 / 100;
                    document.getElementById("campo3").value = b.toFixed(2);
                } else if (a >= 5 && a < 10) {
                    var b = a * 275 / 100;
                    document.getElementById("campo3").value = b.toFixed(2);
                } else if (a < 15 && a >= 10) {
                    var b = a * 272 / 100;
                    document.getElementById("campo3").value = b.toFixed(2);
                } else if (a >= 15 && a < 20) {
                    var b = a * 270 / 100;
                    document.getElementById("campo3").value = b.toFixed(2);
                } else
                    if (a < 25 && a >= 20) {
                        var b = a * 271 / 100;
                        document.getElementById("campo3").value = b.toFixed(2);
                    } else if (a >= 25 && a < 33) {
                        var b = a * 267 / 100;
                        document.getElementById("campo3").value = b.toFixed(2);
                    } else if (a >= 33 && a < 48) {
                        var b = a * 265 / 100;
                        document.getElementById("campo3").value = b.toFixed(2);
                    } else if (a >= 48 && a < 62) {
                        var b = a * 258 / 100;
                        document.getElementById("campo3").value = b.toFixed(2);
                    } else if (a >= 62 && a < 81) {
                        var b = a * 251 / 100;
                        document.getElementById("campo3").value = b.toFixed(2);
                    } else if (a >= 81 && a < 96) {
                        var b = a * 248 / 100;
                        document.getElementById("campo3").value = b.toFixed(2);
                    } else if (a >= 96) {
                        var b = a * 246 / 100;
                        document.getElementById("campo3").value = b.toFixed(2);
                    }
            }
    }
}

function opcao() {
    if (document.getElementById('cmpMarge').value == '') {
        document.getElementById("li4").style.backgroundColor = "#ffffff";
        document.getElementById("lia").style.backgroundColor = "#ffffff";
        document.getElementById("li5").style.backgroundColor = "#ffffff";
        document.getElementById("li6").style.backgroundColor = "#ffffff";
        document.getElementById("li7").style.backgroundColor = "#ffffff";
        document.getElementById("li8").style.backgroundColor = "#ffffff";
        document.getElementById("lib").style.backgroundColor = "#ffffff";
        document.getElementById("li9").style.backgroundColor = "#ffffff";
        document.getElementById("li10").style.backgroundColor = "#ffffff";
        document.getElementById("li11").style.backgroundColor = "#ffffff";
        document.getElementById("li12").style.backgroundColor = "#ffffff";
        document.getElementById("lic").style.backgroundColor = "#ffffff";
        document.getElementById("li13").style.backgroundColor = "#ffffff";
        document.getElementById("li14").style.backgroundColor = "#ffffff";
        document.getElementById("li15").style.backgroundColor = "#ffffff";
        document.getElementById("li16").style.backgroundColor = "#ffffff";
        document.getElementById("lid").style.backgroundColor = "#ffffff";
        document.getElementById("lid").style.backgroundColor = "rgb(80, 177, 80)";
        document.getElementById("li17").style.backgroundColor = "rgb(80, 177, 80)";
        document.getElementById("li18").style.backgroundColor = "rgb(80, 177, 80)";
        document.getElementById("li19").style.backgroundColor = "rgb(80, 177, 80)";
        document.getElementById("li20").style.backgroundColor = "rgb(80, 177, 80)";
        document.getElementById("lid1").style.backgroundColor = "#ffffff";
        document.getElementById("li21").style.backgroundColor = "#ffffff";
        document.getElementById("li22").style.backgroundColor = "#ffffff";
        document.getElementById("li23").style.backgroundColor = "#ffffff";
        document.getElementById("li24").style.backgroundColor = "#ffffff";
        document.getElementById("lie").style.backgroundColor = "#ffffff";
        document.getElementById("li25").style.backgroundColor = "#ffffff";
        document.getElementById("li26").style.backgroundColor = "#ffffff";
        document.getElementById("li27").style.backgroundColor = "#ffffff";
        document.getElementById("li28").style.backgroundColor = "#ffffff";
        document.getElementById("lif").style.backgroundColor = "#ffffff";
        document.getElementById("li29").style.backgroundColor = "#ffffff";
        document.getElementById("li30").style.backgroundColor = "#ffffff";
        document.getElementById("li31").style.backgroundColor = "#ffffff";
        document.getElementById("li32").style.backgroundColor = "#ffffff";
        document.getElementById("lig").style.backgroundColor = "#ffffff";
        document.getElementById("li33").style.backgroundColor = "#ffffff";
        document.getElementById("li34").style.backgroundColor = "#ffffff";
        document.getElementById("li35").style.backgroundColor = "#ffffff";
        document.getElementById("li36").style.backgroundColor = "#ffffff";
        document.getElementById("lih").style.backgroundColor = "#ffffff";
        document.getElementById("li37").style.backgroundColor = "#ffffff";
        document.getElementById("li38").style.backgroundColor = "#ffffff";
        document.getElementById("li39").style.backgroundColor = "#ffffff";
        document.getElementById("li40").style.backgroundColor = "#ffffff";
        document.getElementById("lii").style.backgroundColor = "#ffffff";
        document.getElementById("li41").style.backgroundColor = "#ffffff";
        document.getElementById("li42").style.backgroundColor = "#ffffff";
        document.getElementById("li43").style.backgroundColor = "#ffffff";
        document.getElementById("li44").style.backgroundColor = "#ffffff";
        document.getElementById("lij").style.backgroundColor = "#ffffff";
        document.getElementById("li45").style.backgroundColor = "#ffffff";
        document.getElementById("li46").style.backgroundColor = "#ffffff";
        document.getElementById("li47").style.backgroundColor = "#ffffff";
        document.getElementById("li48").style.backgroundColor = "#ffffff";
        document.getElementById("lik").style.backgroundColor = "#ffffff";
        document.getElementById("li49").style.backgroundColor = "#ffffff";
        document.getElementById("li50").style.backgroundColor = "#ffffff";
        document.getElementById("li51").style.backgroundColor = "#ffffff";
        document.getElementById("li52").style.backgroundColor = "#ffffff";
        document.getElementById("lil").style.backgroundColor = "#ffffff";
        document.getElementById("li53").style.backgroundColor = "#ffffff";
        document.getElementById("li54").style.backgroundColor = "#ffffff";
        document.getElementById("li55").style.backgroundColor = "#ffffff";
        document.getElementById("li56").style.backgroundColor = "#ffffff";
        document.getElementById("lim").style.backgroundColor = "#ffffff";
        document.getElementById("li57").style.backgroundColor = "#ffffff";
        document.getElementById("li58").style.backgroundColor = "#ffffff";
        document.getElementById("li59").style.backgroundColor = "#ffffff";
        document.getElementById("li60").style.backgroundColor = "#ffffff";
        
    }

    if (document.getElementById('cmpMarge').value == 14) {
        document.getElementById("li4").style.backgroundColor = "#ffffff";
        document.getElementById("lia").style.backgroundColor = "#24b9d6";
        document.getElementById("li5").style.backgroundColor = "#24b9d6";
        document.getElementById("li6").style.backgroundColor = "#24b9d6";
        document.getElementById("li7").style.backgroundColor = "#24b9d6";
        document.getElementById("li8").style.backgroundColor = "#24b9d6";
        document.getElementById("lib").style.backgroundColor = "#ffffff";
        document.getElementById("li9").style.backgroundColor = "#ffffff";
        document.getElementById("li10").style.backgroundColor = "#ffffff";
        document.getElementById("li11").style.backgroundColor = "#ffffff";
        document.getElementById("li12").style.backgroundColor = "#ffffff";
        document.getElementById("lic").style.backgroundColor = "#ffffff";
        document.getElementById("li13").style.backgroundColor = "#ffffff";
        document.getElementById("li14").style.backgroundColor = "#ffffff";
        document.getElementById("li15").style.backgroundColor = "#ffffff";
        document.getElementById("li16").style.backgroundColor = "#ffffff";
        document.getElementById("lid").style.backgroundColor = "#ffffff";
        document.getElementById("li17").style.backgroundColor = "#ffffff";
        document.getElementById("li18").style.backgroundColor = "#ffffff";
        document.getElementById("li19").style.backgroundColor = "#ffffff";
        document.getElementById("li20").style.backgroundColor = "#ffffff";
        document.getElementById("lid1").style.backgroundColor = "#ffffff";
        document.getElementById("li21").style.backgroundColor = "#ffffff";
        document.getElementById("li22").style.backgroundColor = "#ffffff";
        document.getElementById("li23").style.backgroundColor = "#ffffff";
        document.getElementById("li24").style.backgroundColor = "#ffffff";
        document.getElementById("lie").style.backgroundColor = "#ffffff";
        document.getElementById("li25").style.backgroundColor = "#ffffff";
        document.getElementById("li26").style.backgroundColor = "#ffffff";
        document.getElementById("li27").style.backgroundColor = "#ffffff";
        document.getElementById("li28").style.backgroundColor = "#ffffff";
        document.getElementById("lif").style.backgroundColor = "#ffffff";
        document.getElementById("li29").style.backgroundColor = "#ffffff";
        document.getElementById("li30").style.backgroundColor = "#ffffff";
        document.getElementById("li31").style.backgroundColor = "#ffffff";
        document.getElementById("li32").style.backgroundColor = "#ffffff";
        document.getElementById("lig").style.backgroundColor = "#ffffff";
        document.getElementById("li33").style.backgroundColor = "#ffffff";
        document.getElementById("li34").style.backgroundColor = "#ffffff";
        document.getElementById("li35").style.backgroundColor = "#ffffff";
        document.getElementById("li36").style.backgroundColor = "#ffffff";
        document.getElementById("lih").style.backgroundColor = "#ffffff";
        document.getElementById("li37").style.backgroundColor = "#ffffff";
        document.getElementById("li38").style.backgroundColor = "#ffffff";
        document.getElementById("li39").style.backgroundColor = "#ffffff";
        document.getElementById("li40").style.backgroundColor = "#ffffff";
        document.getElementById("lii").style.backgroundColor = "#ffffff";
        document.getElementById("li41").style.backgroundColor = "#ffffff";
        document.getElementById("li42").style.backgroundColor = "#ffffff";
        document.getElementById("li43").style.backgroundColor = "#ffffff";
        document.getElementById("li44").style.backgroundColor = "#ffffff";
        document.getElementById("lij").style.backgroundColor = "#ffffff";
        document.getElementById("li45").style.backgroundColor = "#ffffff";
        document.getElementById("li46").style.backgroundColor = "#ffffff";
        document.getElementById("li47").style.backgroundColor = "#ffffff";
        document.getElementById("li48").style.backgroundColor = "#ffffff";
        document.getElementById("lik").style.backgroundColor = "#ffffff";
        document.getElementById("li49").style.backgroundColor = "#ffffff";
        document.getElementById("li50").style.backgroundColor = "#ffffff";
        document.getElementById("li51").style.backgroundColor = "#ffffff";
        document.getElementById("li52").style.backgroundColor = "#ffffff";
        document.getElementById("lil").style.backgroundColor = "#ffffff";
        document.getElementById("li53").style.backgroundColor = "#ffffff";
        document.getElementById("li54").style.backgroundColor = "#ffffff";
        document.getElementById("li55").style.backgroundColor = "#ffffff";
        document.getElementById("li56").style.backgroundColor = "#ffffff";
        document.getElementById("lim").style.backgroundColor = "#ffffff";
        document.getElementById("li57").style.backgroundColor = "#ffffff";
        document.getElementById("li58").style.backgroundColor = "#ffffff";
        document.getElementById("li59").style.backgroundColor = "#ffffff";
        document.getElementById("li60").style.backgroundColor = "#ffffff";
    }
    if (document.getElementById('cmpMarge').value == 1) {
        document.getElementById("li4").style.backgroundColor = "#ffffff";
        document.getElementById("lia").style.backgroundColor = "#ffffff";
        document.getElementById("li5").style.backgroundColor = "#ffffff";
        document.getElementById("li6").style.backgroundColor = "#ffffff";
        document.getElementById("li7").style.backgroundColor = "#ffffff";
        document.getElementById("li8").style.backgroundColor = "#ffffff";
        document.getElementById("lib").style.backgroundColor = "#24b9d6";
        document.getElementById("li9").style.backgroundColor = "#24b9d6";
        document.getElementById("li10").style.backgroundColor = "#24b9d6";
        document.getElementById("li11").style.backgroundColor = "#24b9d6";
        document.getElementById("li12").style.backgroundColor = "#24b9d6";
        document.getElementById("lic").style.backgroundColor = "#ffffff";
        document.getElementById("li13").style.backgroundColor = "#ffffff";
        document.getElementById("li14").style.backgroundColor = "#ffffff";
        document.getElementById("li15").style.backgroundColor = "#ffffff";
        document.getElementById("li16").style.backgroundColor = "#ffffff";
        document.getElementById("lid").style.backgroundColor = "#ffffff";
        document.getElementById("li17").style.backgroundColor = "#ffffff";
        document.getElementById("li18").style.backgroundColor = "#ffffff";
        document.getElementById("li19").style.backgroundColor = "#ffffff";
        document.getElementById("li20").style.backgroundColor = "#ffffff";
        document.getElementById("lid1").style.backgroundColor = "#ffffff";
        document.getElementById("li21").style.backgroundColor = "#ffffff";
        document.getElementById("li22").style.backgroundColor = "#ffffff";
        document.getElementById("li23").style.backgroundColor = "#ffffff";
        document.getElementById("li24").style.backgroundColor = "#ffffff";
        document.getElementById("lie").style.backgroundColor = "#ffffff";
        document.getElementById("li25").style.backgroundColor = "#ffffff";
        document.getElementById("li26").style.backgroundColor = "#ffffff";
        document.getElementById("li27").style.backgroundColor = "#ffffff";
        document.getElementById("li28").style.backgroundColor = "#ffffff";
        document.getElementById("lif").style.backgroundColor = "#ffffff";
        document.getElementById("li29").style.backgroundColor = "#ffffff";
        document.getElementById("li30").style.backgroundColor = "#ffffff";
        document.getElementById("li31").style.backgroundColor = "#ffffff";
        document.getElementById("li32").style.backgroundColor = "#ffffff";
        document.getElementById("lig").style.backgroundColor = "#ffffff";
        document.getElementById("li33").style.backgroundColor = "#ffffff";
        document.getElementById("li34").style.backgroundColor = "#ffffff";
        document.getElementById("li35").style.backgroundColor = "#ffffff";
        document.getElementById("li36").style.backgroundColor = "#ffffff";
        document.getElementById("lih").style.backgroundColor = "#ffffff";
        document.getElementById("li37").style.backgroundColor = "#ffffff";
        document.getElementById("li38").style.backgroundColor = "#ffffff";
        document.getElementById("li39").style.backgroundColor = "#ffffff";
        document.getElementById("li40").style.backgroundColor = "#ffffff";
        document.getElementById("lii").style.backgroundColor = "#ffffff";
        document.getElementById("li41").style.backgroundColor = "#ffffff";
        document.getElementById("li42").style.backgroundColor = "#ffffff";
        document.getElementById("li43").style.backgroundColor = "#ffffff";
        document.getElementById("li44").style.backgroundColor = "#ffffff";
        document.getElementById("lik").style.backgroundColor = "#ffffff";
        document.getElementById("li45").style.backgroundColor = "#ffffff";
        document.getElementById("li46").style.backgroundColor = "#ffffff";
        document.getElementById("li47").style.backgroundColor = "#ffffff";
        document.getElementById("li48").style.backgroundColor = "#ffffff";
        document.getElementById("lil").style.backgroundColor = "#ffffff";
        document.getElementById("li49").style.backgroundColor = "#ffffff";
        document.getElementById("li50").style.backgroundColor = "#ffffff";
        document.getElementById("li51").style.backgroundColor = "#ffffff";
        document.getElementById("li52").style.backgroundColor = "#ffffff";
        document.getElementById("lim").style.backgroundColor = "#ffffff";
        document.getElementById("li53").style.backgroundColor = "#ffffff";
        document.getElementById("li54").style.backgroundColor = "#ffffff";
        document.getElementById("li55").style.backgroundColor = "#ffffff";
        document.getElementById("li56").style.backgroundColor = "#ffffff";
        document.getElementById("lij").style.backgroundColor = "#ffffff";
        document.getElementById("li57").style.backgroundColor = "#ffffff";
        document.getElementById("li58").style.backgroundColor = "#ffffff";
        document.getElementById("li59").style.backgroundColor = "#ffffff";
        document.getElementById("li60").style.backgroundColor = "#ffffff";
    }
    if (document.getElementById('cmpMarge').value == 2) {
        document.getElementById("li4").style.backgroundColor = "#ffffff";
        document.getElementById("lia").style.backgroundColor = "#ffffff";
        document.getElementById("li5").style.backgroundColor = "#ffffff";
        document.getElementById("li6").style.backgroundColor = "#ffffff";
        document.getElementById("li7").style.backgroundColor = "#ffffff";
        document.getElementById("li8").style.backgroundColor = "#ffffff";
        document.getElementById("lib").style.backgroundColor = "#ffffff";
        document.getElementById("li9").style.backgroundColor = "#ffffff";
        document.getElementById("li10").style.backgroundColor = "#ffffff";
        document.getElementById("li11").style.backgroundColor = "#ffffff";
        document.getElementById("li12").style.backgroundColor = "#ffffff";
        document.getElementById("lic").style.backgroundColor = "#24b9d6";
        document.getElementById("li13").style.backgroundColor = "#24b9d6";
        document.getElementById("li14").style.backgroundColor = "#24b9d6";
        document.getElementById("li15").style.backgroundColor = "#24b9d6";
        document.getElementById("li16").style.backgroundColor = "#24b9d6";
        document.getElementById("lid").style.backgroundColor = "#ffffff";
        document.getElementById("lid").style.backgroundColor = "#ffffff";
        document.getElementById("li17").style.backgroundColor = "#ffffff";
        document.getElementById("li18").style.backgroundColor = "#ffffff";
        document.getElementById("li19").style.backgroundColor = "#ffffff";
        document.getElementById("li20").style.backgroundColor = "#ffffff";
        document.getElementById("lid1").style.backgroundColor = "#ffffff";
        document.getElementById("li21").style.backgroundColor = "#ffffff";
        document.getElementById("li22").style.backgroundColor = "#ffffff";
        document.getElementById("li23").style.backgroundColor = "#ffffff";
        document.getElementById("li24").style.backgroundColor = "#ffffff";
        document.getElementById("lie").style.backgroundColor = "#ffffff";
        document.getElementById("li25").style.backgroundColor = "#ffffff";
        document.getElementById("li26").style.backgroundColor = "#ffffff";
        document.getElementById("li27").style.backgroundColor = "#ffffff";
        document.getElementById("li28").style.backgroundColor = "#ffffff";
        document.getElementById("lif").style.backgroundColor = "#ffffff";
        document.getElementById("li29").style.backgroundColor = "#ffffff";
        document.getElementById("li30").style.backgroundColor = "#ffffff";
        document.getElementById("li31").style.backgroundColor = "#ffffff";
        document.getElementById("li32").style.backgroundColor = "#ffffff";
        document.getElementById("lig").style.backgroundColor = "#ffffff";
        document.getElementById("li33").style.backgroundColor = "#ffffff";
        document.getElementById("li34").style.backgroundColor = "#ffffff";
        document.getElementById("li35").style.backgroundColor = "#ffffff";
        document.getElementById("li36").style.backgroundColor = "#ffffff";
        document.getElementById("lih").style.backgroundColor = "#ffffff";
        document.getElementById("li37").style.backgroundColor = "#ffffff";
        document.getElementById("li38").style.backgroundColor = "#ffffff";
        document.getElementById("li39").style.backgroundColor = "#ffffff";
        document.getElementById("li40").style.backgroundColor = "#ffffff";
        document.getElementById("lij").style.backgroundColor = "#ffffff";
        document.getElementById("li41").style.backgroundColor = "#ffffff";
        document.getElementById("li42").style.backgroundColor = "#ffffff";
        document.getElementById("li43").style.backgroundColor = "#ffffff";
        document.getElementById("li44").style.backgroundColor = "#ffffff";
        document.getElementById("lii").style.backgroundColor = "#ffffff";
        document.getElementById("li45").style.backgroundColor = "#ffffff";
        document.getElementById("li46").style.backgroundColor = "#ffffff";
        document.getElementById("li47").style.backgroundColor = "#ffffff";
        document.getElementById("li48").style.backgroundColor = "#ffffff";
        document.getElementById("lik").style.backgroundColor = "#ffffff";
        document.getElementById("li49").style.backgroundColor = "#ffffff";
        document.getElementById("li50").style.backgroundColor = "#ffffff";
        document.getElementById("li51").style.backgroundColor = "#ffffff";
        document.getElementById("li52").style.backgroundColor = "#ffffff";
        document.getElementById("lil").style.backgroundColor = "#ffffff";
        document.getElementById("li53").style.backgroundColor = "#ffffff";
        document.getElementById("li54").style.backgroundColor = "#ffffff";
        document.getElementById("li55").style.backgroundColor = "#ffffff";
        document.getElementById("li56").style.backgroundColor = "#ffffff";
        document.getElementById("lim").style.backgroundColor = "#ffffff";
        document.getElementById("li57").style.backgroundColor = "#ffffff";
        document.getElementById("li58").style.backgroundColor = "#ffffff";
        document.getElementById("li59").style.backgroundColor = "#ffffff";
        document.getElementById("li60").style.backgroundColor = "#ffffff";
    }
    if (document.getElementById('cmpMarge').value == 3) {
        document.getElementById("li4").style.backgroundColor = "#ffffff";
        document.getElementById("lia").style.backgroundColor = "#ffffff";
        document.getElementById("li5").style.backgroundColor = "#ffffff";
        document.getElementById("li6").style.backgroundColor = "#ffffff";
        document.getElementById("li7").style.backgroundColor = "#ffffff";
        document.getElementById("li8").style.backgroundColor = "#ffffff";
        document.getElementById("lib").style.backgroundColor = "#ffffff";
        document.getElementById("li9").style.backgroundColor = "#ffffff";
        document.getElementById("li10").style.backgroundColor = "#ffffff";
        document.getElementById("li11").style.backgroundColor = "#ffffff";
        document.getElementById("li12").style.backgroundColor = "#ffffff";
        document.getElementById("lic").style.backgroundColor = "#ffffff";
        document.getElementById("li13").style.backgroundColor = "#ffffff";
        document.getElementById("li14").style.backgroundColor = "#ffffff";
        document.getElementById("li15").style.backgroundColor = "#ffffff";
        document.getElementById("li16").style.backgroundColor = "#ffffff";
        document.getElementById("lid").style.backgroundColor = "#24b9d6";
        document.getElementById("li17").style.backgroundColor = "#24b9d6";
        document.getElementById("li18").style.backgroundColor = "#24b9d6";
        document.getElementById("li19").style.backgroundColor = "#24b9d6";
        document.getElementById("li20").style.backgroundColor = "#24b9d6";
        document.getElementById("lid1").style.backgroundColor = "#ffffff";
        document.getElementById("li21").style.backgroundColor = "#ffffff";
        document.getElementById("li22").style.backgroundColor = "#ffffff";
        document.getElementById("li23").style.backgroundColor = "#ffffff";
        document.getElementById("li24").style.backgroundColor = "#ffffff";
        document.getElementById("lie").style.backgroundColor = "#ffffff";
        document.getElementById("li25").style.backgroundColor = "#ffffff";
        document.getElementById("li26").style.backgroundColor = "#ffffff";
        document.getElementById("li27").style.backgroundColor = "#ffffff";
        document.getElementById("li28").style.backgroundColor = "#ffffff";
        document.getElementById("lif").style.backgroundColor = "#ffffff";
        document.getElementById("li29").style.backgroundColor = "#ffffff";
        document.getElementById("li30").style.backgroundColor = "#ffffff";
        document.getElementById("li31").style.backgroundColor = "#ffffff";
        document.getElementById("li32").style.backgroundColor = "#ffffff";
        document.getElementById("lig").style.backgroundColor = "#ffffff";
        document.getElementById("li33").style.backgroundColor = "#ffffff";
        document.getElementById("li34").style.backgroundColor = "#ffffff";
        document.getElementById("li35").style.backgroundColor = "#ffffff";
        document.getElementById("li36").style.backgroundColor = "#ffffff";
        document.getElementById("lih").style.backgroundColor = "#ffffff";
        document.getElementById("li37").style.backgroundColor = "#ffffff";
        document.getElementById("li38").style.backgroundColor = "#ffffff";
        document.getElementById("li39").style.backgroundColor = "#ffffff";
        document.getElementById("li40").style.backgroundColor = "#ffffff";
        document.getElementById("lij").style.backgroundColor = "#ffffff";
        document.getElementById("li41").style.backgroundColor = "#ffffff";
        document.getElementById("li42").style.backgroundColor = "#ffffff";
        document.getElementById("li43").style.backgroundColor = "#ffffff";
        document.getElementById("li44").style.backgroundColor = "#ffffff";
        document.getElementById("lii").style.backgroundColor = "#ffffff";
        document.getElementById("li45").style.backgroundColor = "#ffffff";
        document.getElementById("li46").style.backgroundColor = "#ffffff";
        document.getElementById("li47").style.backgroundColor = "#ffffff";
        document.getElementById("li48").style.backgroundColor = "#ffffff";
        document.getElementById("lik").style.backgroundColor = "#ffffff";
        document.getElementById("li49").style.backgroundColor = "#ffffff";
        document.getElementById("li50").style.backgroundColor = "#ffffff";
        document.getElementById("li51").style.backgroundColor = "#ffffff";
        document.getElementById("li52").style.backgroundColor = "#ffffff";
        document.getElementById("lil").style.backgroundColor = "#ffffff";
        document.getElementById("li53").style.backgroundColor = "#ffffff";
        document.getElementById("li54").style.backgroundColor = "#ffffff";
        document.getElementById("li55").style.backgroundColor = "#ffffff";
        document.getElementById("li56").style.backgroundColor = "#ffffff";
        document.getElementById("lim").style.backgroundColor = "#ffffff";
        document.getElementById("li57").style.backgroundColor = "#ffffff";
        document.getElementById("li58").style.backgroundColor = "#ffffff";
        document.getElementById("li59").style.backgroundColor = "#ffffff";
        document.getElementById("li60").style.backgroundColor = "#ffffff";
    }
    if (document.getElementById('cmpMarge').value == 4) {
        document.getElementById("li4").style.backgroundColor = "#ffffff";
        document.getElementById("lia").style.backgroundColor = "#ffffff";
        document.getElementById("li5").style.backgroundColor = "#ffffff";
        document.getElementById("li6").style.backgroundColor = "#ffffff";
        document.getElementById("li7").style.backgroundColor = "#ffffff";
        document.getElementById("li8").style.backgroundColor = "#ffffff";
        document.getElementById("lib").style.backgroundColor = "#ffffff";
        document.getElementById("li9").style.backgroundColor = "#ffffff";
        document.getElementById("li10").style.backgroundColor = "#ffffff";
        document.getElementById("li11").style.backgroundColor = "#ffffff";
        document.getElementById("li12").style.backgroundColor = "#ffffff";
        document.getElementById("lic").style.backgroundColor = "#ffffff";
        document.getElementById("li13").style.backgroundColor = "#ffffff";
        document.getElementById("li14").style.backgroundColor = "#ffffff";
        document.getElementById("li15").style.backgroundColor = "#ffffff";
        document.getElementById("li16").style.backgroundColor = "#ffffff";
        document.getElementById("lid").style.backgroundColor = "#ffffff";
        document.getElementById("li17").style.backgroundColor = "#ffffff";
        document.getElementById("li18").style.backgroundColor = "#ffffff";
        document.getElementById("li19").style.backgroundColor = "#ffffff";
        document.getElementById("li20").style.backgroundColor = "#ffffff";
        document.getElementById("lid1").style.backgroundColor = "#24b9d6";
        document.getElementById("li21").style.backgroundColor = "#24b9d6";
        document.getElementById("li22").style.backgroundColor = "#24b9d6";
        document.getElementById("li23").style.backgroundColor = "#24b9d6";
        document.getElementById("li24").style.backgroundColor = "#24b9d6";
        document.getElementById("lie").style.backgroundColor = "#ffffff";
        document.getElementById("li25").style.backgroundColor = "#ffffff";
        document.getElementById("li26").style.backgroundColor = "#ffffff";
        document.getElementById("li27").style.backgroundColor = "#ffffff";
        document.getElementById("li28").style.backgroundColor = "#ffffff";
        document.getElementById("lif").style.backgroundColor = "#ffffff";
        document.getElementById("li29").style.backgroundColor = "#ffffff";
        document.getElementById("li30").style.backgroundColor = "#ffffff";
        document.getElementById("li31").style.backgroundColor = "#ffffff";
        document.getElementById("li32").style.backgroundColor = "#ffffff";
        document.getElementById("lig").style.backgroundColor = "#ffffff";
        document.getElementById("li33").style.backgroundColor = "#ffffff";
        document.getElementById("li34").style.backgroundColor = "#ffffff";
        document.getElementById("li35").style.backgroundColor = "#ffffff";
        document.getElementById("li36").style.backgroundColor = "#ffffff";
        document.getElementById("lih").style.backgroundColor = "#ffffff";
        document.getElementById("li37").style.backgroundColor = "#ffffff";
        document.getElementById("li38").style.backgroundColor = "#ffffff";
        document.getElementById("li39").style.backgroundColor = "#ffffff";
        document.getElementById("li40").style.backgroundColor = "#ffffff";
        document.getElementById("lij").style.backgroundColor = "#ffffff";
        document.getElementById("li41").style.backgroundColor = "#ffffff";
        document.getElementById("li42").style.backgroundColor = "#ffffff";
        document.getElementById("li43").style.backgroundColor = "#ffffff";
        document.getElementById("li44").style.backgroundColor = "#ffffff";
        document.getElementById("lii").style.backgroundColor = "#ffffff";
        document.getElementById("li45").style.backgroundColor = "#ffffff";
        document.getElementById("li46").style.backgroundColor = "#ffffff";
        document.getElementById("li47").style.backgroundColor = "#ffffff";
        document.getElementById("li48").style.backgroundColor = "#ffffff";
        document.getElementById("lik").style.backgroundColor = "#ffffff";
        document.getElementById("li49").style.backgroundColor = "#ffffff";
        document.getElementById("li50").style.backgroundColor = "#ffffff";
        document.getElementById("li51").style.backgroundColor = "#ffffff";
        document.getElementById("li52").style.backgroundColor = "#ffffff";
        document.getElementById("lil").style.backgroundColor = "#ffffff";
        document.getElementById("li53").style.backgroundColor = "#ffffff";
        document.getElementById("li54").style.backgroundColor = "#ffffff";
        document.getElementById("li55").style.backgroundColor = "#ffffff";
        document.getElementById("li56").style.backgroundColor = "#ffffff";
        document.getElementById("lim").style.backgroundColor = "#ffffff";
        document.getElementById("li57").style.backgroundColor = "#ffffff";
        document.getElementById("li58").style.backgroundColor = "#ffffff";
        document.getElementById("li59").style.backgroundColor = "#ffffff";
        document.getElementById("li60").style.backgroundColor = "#ffffff";
    }
    if (document.getElementById('cmpMarge').value == 5) {
        document.getElementById("li4").style.backgroundColor = "#ffffff";
        document.getElementById("lia").style.backgroundColor = "#ffffff";
        document.getElementById("li5").style.backgroundColor = "#ffffff";
        document.getElementById("li6").style.backgroundColor = "#ffffff";
        document.getElementById("li7").style.backgroundColor = "#ffffff";
        document.getElementById("li8").style.backgroundColor = "#ffffff";
        document.getElementById("lib").style.backgroundColor = "#ffffff";
        document.getElementById("li9").style.backgroundColor = "#ffffff";
        document.getElementById("li10").style.backgroundColor = "#ffffff";
        document.getElementById("li11").style.backgroundColor = "#ffffff";
        document.getElementById("li12").style.backgroundColor = "#ffffff";
        document.getElementById("lic").style.backgroundColor = "#ffffff";
        document.getElementById("li13").style.backgroundColor = "#ffffff";
        document.getElementById("li14").style.backgroundColor = "#ffffff";
        document.getElementById("li15").style.backgroundColor = "#ffffff";
        document.getElementById("li16").style.backgroundColor = "#ffffff";
        document.getElementById("lid").style.backgroundColor = "#ffffff";
        document.getElementById("li17").style.backgroundColor = "#ffffff";
        document.getElementById("li18").style.backgroundColor = "#ffffff";
        document.getElementById("li19").style.backgroundColor = "#ffffff";
        document.getElementById("li20").style.backgroundColor = "#ffffff";
        document.getElementById("lid1").style.backgroundColor = "#ffffff";
        document.getElementById("li21").style.backgroundColor = "#ffffff";
        document.getElementById("li22").style.backgroundColor = "#ffffff";
        document.getElementById("li23").style.backgroundColor = "#ffffff";
        document.getElementById("li24").style.backgroundColor = "#ffffff";
        document.getElementById("lie").style.backgroundColor = "#24b9d6";
        document.getElementById("li25").style.backgroundColor = "#24b9d6";
        document.getElementById("li26").style.backgroundColor = "#24b9d6";
        document.getElementById("li27").style.backgroundColor = "#24b9d6";
        document.getElementById("li28").style.backgroundColor = "#24b9d6";
        document.getElementById("lif").style.backgroundColor = "#ffffff";
        document.getElementById("li29").style.backgroundColor = "#ffffff";
        document.getElementById("li30").style.backgroundColor = "#ffffff";
        document.getElementById("li31").style.backgroundColor = "#ffffff";
        document.getElementById("li32").style.backgroundColor = "#ffffff";
        document.getElementById("lig").style.backgroundColor = "#ffffff";
        document.getElementById("li33").style.backgroundColor = "#ffffff";
        document.getElementById("li34").style.backgroundColor = "#ffffff";
        document.getElementById("li35").style.backgroundColor = "#ffffff";
        document.getElementById("li36").style.backgroundColor = "#ffffff";
        document.getElementById("lih").style.backgroundColor = "#ffffff";
        document.getElementById("li37").style.backgroundColor = "#ffffff";
        document.getElementById("li38").style.backgroundColor = "#ffffff";
        document.getElementById("li39").style.backgroundColor = "#ffffff";
        document.getElementById("li40").style.backgroundColor = "#ffffff";
        document.getElementById("lij").style.backgroundColor = "#ffffff";
        document.getElementById("li41").style.backgroundColor = "#ffffff";
        document.getElementById("li42").style.backgroundColor = "#ffffff";
        document.getElementById("li43").style.backgroundColor = "#ffffff";
        document.getElementById("li44").style.backgroundColor = "#ffffff";
        document.getElementById("lii").style.backgroundColor = "#ffffff";
        document.getElementById("li45").style.backgroundColor = "#ffffff";
        document.getElementById("li46").style.backgroundColor = "#ffffff";
        document.getElementById("li47").style.backgroundColor = "#ffffff";
        document.getElementById("li48").style.backgroundColor = "#ffffff";
        document.getElementById("lik").style.backgroundColor = "#ffffff";
        document.getElementById("li49").style.backgroundColor = "#ffffff";
        document.getElementById("li50").style.backgroundColor = "#ffffff";
        document.getElementById("li51").style.backgroundColor = "#ffffff";
        document.getElementById("li52").style.backgroundColor = "#ffffff";
        document.getElementById("lil").style.backgroundColor = "#ffffff";
        document.getElementById("li53").style.backgroundColor = "#ffffff";
        document.getElementById("li54").style.backgroundColor = "#ffffff";
        document.getElementById("li55").style.backgroundColor = "#ffffff";
        document.getElementById("li56").style.backgroundColor = "#ffffff";
        document.getElementById("lim").style.backgroundColor = "#ffffff";
        document.getElementById("li57").style.backgroundColor = "#ffffff";
        document.getElementById("li58").style.backgroundColor = "#ffffff";
        document.getElementById("li59").style.backgroundColor = "#ffffff";
        document.getElementById("li60").style.backgroundColor = "#ffffff";
    }
    if (document.getElementById('cmpMarge').value == 6) {
        document.getElementById("li4").style.backgroundColor = "#ffffff";
        document.getElementById("lia").style.backgroundColor = "#ffffff";
        document.getElementById("li5").style.backgroundColor = "#ffffff";
        document.getElementById("li6").style.backgroundColor = "#ffffff";
        document.getElementById("li7").style.backgroundColor = "#ffffff";
        document.getElementById("li8").style.backgroundColor = "#ffffff";
        document.getElementById("lib").style.backgroundColor = "#ffffff";
        document.getElementById("li9").style.backgroundColor = "#ffffff";
        document.getElementById("li10").style.backgroundColor = "#ffffff";
        document.getElementById("li11").style.backgroundColor = "#ffffff";
        document.getElementById("li12").style.backgroundColor = "#ffffff";
        document.getElementById("lic").style.backgroundColor = "#ffffff";
        document.getElementById("li13").style.backgroundColor = "#ffffff";
        document.getElementById("li14").style.backgroundColor = "#ffffff";
        document.getElementById("li15").style.backgroundColor = "#ffffff";
        document.getElementById("li16").style.backgroundColor = "#ffffff";
        document.getElementById("lid").style.backgroundColor = "#ffffff";
        document.getElementById("li17").style.backgroundColor = "#ffffff";
        document.getElementById("li18").style.backgroundColor = "#ffffff";
        document.getElementById("li19").style.backgroundColor = "#ffffff";
        document.getElementById("li20").style.backgroundColor = "#ffffff";
        document.getElementById("lid1").style.backgroundColor = "#ffffff";
        document.getElementById("li21").style.backgroundColor = "#ffffff";
        document.getElementById("li22").style.backgroundColor = "#ffffff";
        document.getElementById("li23").style.backgroundColor = "#ffffff";
        document.getElementById("li24").style.backgroundColor = "#ffffff";
        document.getElementById("lie").style.backgroundColor = "#ffffff";
        document.getElementById("li25").style.backgroundColor = "#ffffff";
        document.getElementById("li26").style.backgroundColor = "#ffffff";
        document.getElementById("li27").style.backgroundColor = "#ffffff";
        document.getElementById("li28").style.backgroundColor = "#ffffff";
        document.getElementById("lif").style.backgroundColor = "#24b9d6";
        document.getElementById("li29").style.backgroundColor = "#24b9d6";
        document.getElementById("li30").style.backgroundColor = "#24b9d6";
        document.getElementById("li31").style.backgroundColor = "#24b9d6";
        document.getElementById("li32").style.backgroundColor = "#24b9d6";
        document.getElementById("lig").style.backgroundColor = "#ffffff";
        document.getElementById("li33").style.backgroundColor = "#ffffff";
        document.getElementById("li34").style.backgroundColor = "#ffffff";
        document.getElementById("li35").style.backgroundColor = "#ffffff";
        document.getElementById("li36").style.backgroundColor = "#ffffff";
        document.getElementById("lih").style.backgroundColor = "#ffffff";
        document.getElementById("li37").style.backgroundColor = "#ffffff";
        document.getElementById("li38").style.backgroundColor = "#ffffff";
        document.getElementById("li39").style.backgroundColor = "#ffffff";
        document.getElementById("li40").style.backgroundColor = "#ffffff";
        document.getElementById("lii").style.backgroundColor = "#ffffff";
        document.getElementById("li41").style.backgroundColor = "#ffffff";
        document.getElementById("li42").style.backgroundColor = "#ffffff";
        document.getElementById("li43").style.backgroundColor = "#ffffff";
        document.getElementById("li44").style.backgroundColor = "#ffffff";
        document.getElementById("lij").style.backgroundColor = "#ffffff";
        document.getElementById("li45").style.backgroundColor = "#ffffff";
        document.getElementById("li46").style.backgroundColor = "#ffffff";
        document.getElementById("li47").style.backgroundColor = "#ffffff";
        document.getElementById("li48").style.backgroundColor = "#ffffff";
        document.getElementById("lik").style.backgroundColor = "#ffffff";
        document.getElementById("li49").style.backgroundColor = "#ffffff";
        document.getElementById("li50").style.backgroundColor = "#ffffff";
        document.getElementById("li51").style.backgroundColor = "#ffffff";
        document.getElementById("li52").style.backgroundColor = "#ffffff";
        document.getElementById("lil").style.backgroundColor = "#ffffff";
        document.getElementById("li53").style.backgroundColor = "#ffffff";
        document.getElementById("li54").style.backgroundColor = "#ffffff";
        document.getElementById("li55").style.backgroundColor = "#ffffff";
        document.getElementById("li56").style.backgroundColor = "#ffffff";
        document.getElementById("lim").style.backgroundColor = "#ffffff";
        document.getElementById("li57").style.backgroundColor = "#ffffff";
        document.getElementById("li58").style.backgroundColor = "#ffffff";
        document.getElementById("li59").style.backgroundColor = "#ffffff";
        document.getElementById("li60").style.backgroundColor = "#ffffff";
    }
    if (document.getElementById('cmpMarge').value == 7) {
        document.getElementById("li4").style.backgroundColor = "#ffffff";
        document.getElementById("lia").style.backgroundColor = "#ffffff";
        document.getElementById("li5").style.backgroundColor = "#ffffff";
        document.getElementById("li6").style.backgroundColor = "#ffffff";
        document.getElementById("li7").style.backgroundColor = "#ffffff";
        document.getElementById("li8").style.backgroundColor = "#ffffff";
        document.getElementById("lib").style.backgroundColor = "#ffffff";
        document.getElementById("li9").style.backgroundColor = "#ffffff";
        document.getElementById("li10").style.backgroundColor = "#ffffff";
        document.getElementById("li11").style.backgroundColor = "#ffffff";
        document.getElementById("li12").style.backgroundColor = "#ffffff";
        document.getElementById("lic").style.backgroundColor = "#ffffff";
        document.getElementById("li13").style.backgroundColor = "#ffffff";
        document.getElementById("li14").style.backgroundColor = "#ffffff";
        document.getElementById("li15").style.backgroundColor = "#ffffff";
        document.getElementById("li16").style.backgroundColor = "#ffffff";
        document.getElementById("lid").style.backgroundColor = "#ffffff";
        document.getElementById("li17").style.backgroundColor = "#ffffff";
        document.getElementById("li18").style.backgroundColor = "#ffffff";
        document.getElementById("li19").style.backgroundColor = "#ffffff";
        document.getElementById("li20").style.backgroundColor = "#ffffff";
        document.getElementById("lid1").style.backgroundColor = "#ffffff";
        document.getElementById("li21").style.backgroundColor = "#ffffff";
        document.getElementById("li22").style.backgroundColor = "#ffffff";
        document.getElementById("li23").style.backgroundColor = "#ffffff";
        document.getElementById("li24").style.backgroundColor = "#ffffff";
        document.getElementById("lie").style.backgroundColor = "#ffffff";
        document.getElementById("li25").style.backgroundColor = "#ffffff";
        document.getElementById("li26").style.backgroundColor = "#ffffff";
        document.getElementById("li27").style.backgroundColor = "#ffffff";
        document.getElementById("li28").style.backgroundColor = "#ffffff";
        document.getElementById("lif").style.backgroundColor = "#ffffff";
        document.getElementById("li29").style.backgroundColor = "#ffffff";
        document.getElementById("li30").style.backgroundColor = "#ffffff";
        document.getElementById("li31").style.backgroundColor = "#ffffff";
        document.getElementById("li32").style.backgroundColor = "#ffffff";
        document.getElementById("lig").style.backgroundColor = "#24b9d6";
        document.getElementById("li33").style.backgroundColor = "#24b9d6";
        document.getElementById("li34").style.backgroundColor = "#24b9d6";
        document.getElementById("li35").style.backgroundColor = "#24b9d6";
        document.getElementById("li36").style.backgroundColor = "#24b9d6";
        document.getElementById("lih").style.backgroundColor = "#ffffff";
        document.getElementById("li37").style.backgroundColor = "#ffffff";
        document.getElementById("li38").style.backgroundColor = "#ffffff";
        document.getElementById("li39").style.backgroundColor = "#ffffff";
        document.getElementById("li40").style.backgroundColor = "#ffffff";
        document.getElementById("lii").style.backgroundColor = "#ffffff";
        document.getElementById("li41").style.backgroundColor = "#ffffff";
        document.getElementById("li42").style.backgroundColor = "#ffffff";
        document.getElementById("li43").style.backgroundColor = "#ffffff";
        document.getElementById("li44").style.backgroundColor = "#ffffff";
        document.getElementById("lij").style.backgroundColor = "#ffffff";
        document.getElementById("li45").style.backgroundColor = "#ffffff";
        document.getElementById("li46").style.backgroundColor = "#ffffff";
        document.getElementById("li47").style.backgroundColor = "#ffffff";
        document.getElementById("li48").style.backgroundColor = "#ffffff";
        document.getElementById("lik").style.backgroundColor = "#ffffff";
        document.getElementById("li49").style.backgroundColor = "#ffffff";
        document.getElementById("li50").style.backgroundColor = "#ffffff";
        document.getElementById("li51").style.backgroundColor = "#ffffff";
        document.getElementById("li52").style.backgroundColor = "#ffffff";
        document.getElementById("lil").style.backgroundColor = "#ffffff";
        document.getElementById("li53").style.backgroundColor = "#ffffff";
        document.getElementById("li54").style.backgroundColor = "#ffffff";
        document.getElementById("li55").style.backgroundColor = "#ffffff";
        document.getElementById("li56").style.backgroundColor = "#ffffff";
        document.getElementById("lim").style.backgroundColor = "#ffffff";
        document.getElementById("li57").style.backgroundColor = "#ffffff";
        document.getElementById("li58").style.backgroundColor = "#ffffff";
        document.getElementById("li59").style.backgroundColor = "#ffffff";
        document.getElementById("li60").style.backgroundColor = "#ffffff";
    }if (document.getElementById('cmpMarge').value == 8) {
        document.getElementById("li4").style.backgroundColor = "#ffffff";
        document.getElementById("lia").style.backgroundColor = "#ffffff";
        document.getElementById("li5").style.backgroundColor = "#ffffff";
        document.getElementById("li6").style.backgroundColor = "#ffffff";
        document.getElementById("li7").style.backgroundColor = "#ffffff";
        document.getElementById("li8").style.backgroundColor = "#ffffff";
        document.getElementById("lib").style.backgroundColor = "#ffffff";
        document.getElementById("li9").style.backgroundColor = "#ffffff";
        document.getElementById("li10").style.backgroundColor = "#ffffff";
        document.getElementById("li11").style.backgroundColor = "#ffffff";
        document.getElementById("li12").style.backgroundColor = "#ffffff";
        document.getElementById("lic").style.backgroundColor = "#ffffff";
        document.getElementById("li13").style.backgroundColor = "#ffffff";
        document.getElementById("li14").style.backgroundColor = "#ffffff";
        document.getElementById("li15").style.backgroundColor = "#ffffff";
        document.getElementById("li16").style.backgroundColor = "#ffffff";
        document.getElementById("lid").style.backgroundColor = "#ffffff";
        document.getElementById("li17").style.backgroundColor = "#ffffff";
        document.getElementById("li18").style.backgroundColor = "#ffffff";
        document.getElementById("li19").style.backgroundColor = "#ffffff";
        document.getElementById("li20").style.backgroundColor = "#ffffff";
        document.getElementById("lid1").style.backgroundColor = "#ffffff";
        document.getElementById("li21").style.backgroundColor = "#ffffff";
        document.getElementById("li22").style.backgroundColor = "#ffffff";
        document.getElementById("li23").style.backgroundColor = "#ffffff";
        document.getElementById("li24").style.backgroundColor = "#ffffff";
        document.getElementById("lie").style.backgroundColor = "#ffffff";
        document.getElementById("li25").style.backgroundColor = "#ffffff";
        document.getElementById("li26").style.backgroundColor = "#ffffff";
        document.getElementById("li27").style.backgroundColor = "#ffffff";
        document.getElementById("li28").style.backgroundColor = "#ffffff";
        document.getElementById("lif").style.backgroundColor = "#ffffff";
        document.getElementById("li29").style.backgroundColor = "#ffffff";
        document.getElementById("li30").style.backgroundColor = "#ffffff";
        document.getElementById("li31").style.backgroundColor = "#ffffff";
        document.getElementById("li32").style.backgroundColor = "#ffffff";
        document.getElementById("lig").style.backgroundColor = "#ffffff";
        document.getElementById("li33").style.backgroundColor = "#ffffff";
        document.getElementById("li34").style.backgroundColor = "#ffffff";
        document.getElementById("li35").style.backgroundColor = "#ffffff";
        document.getElementById("li36").style.backgroundColor = "#ffffff";
        document.getElementById("lih").style.backgroundColor = "#24b9d6";
        document.getElementById("li37").style.backgroundColor = "#24b9d6";
        document.getElementById("li38").style.backgroundColor = "#24b9d6";
        document.getElementById("li39").style.backgroundColor = "#24b9d6";
        document.getElementById("li40").style.backgroundColor = "#24b9d6";
        document.getElementById("lii").style.backgroundColor = "#ffffff";
        document.getElementById("li41").style.backgroundColor = "#ffffff";
        document.getElementById("li42").style.backgroundColor = "#ffffff";
        document.getElementById("li43").style.backgroundColor = "#ffffff";
        document.getElementById("li44").style.backgroundColor = "#ffffff";
        document.getElementById("lij").style.backgroundColor = "#ffffff";
        document.getElementById("li45").style.backgroundColor = "#ffffff";
        document.getElementById("li46").style.backgroundColor = "#ffffff";
        document.getElementById("li47").style.backgroundColor = "#ffffff";
        document.getElementById("li48").style.backgroundColor = "#ffffff";
        document.getElementById("lik").style.backgroundColor = "#ffffff";
        document.getElementById("li49").style.backgroundColor = "#ffffff";
        document.getElementById("li50").style.backgroundColor = "#ffffff";
        document.getElementById("li51").style.backgroundColor = "#ffffff";
        document.getElementById("li52").style.backgroundColor = "#ffffff";
        document.getElementById("lil").style.backgroundColor = "#ffffff";
        document.getElementById("li53").style.backgroundColor = "#ffffff";
        document.getElementById("li54").style.backgroundColor = "#ffffff";
        document.getElementById("li55").style.backgroundColor = "#ffffff";
        document.getElementById("li56").style.backgroundColor = "#ffffff";
        document.getElementById("lim").style.backgroundColor = "#ffffff";
        document.getElementById("li57").style.backgroundColor = "#ffffff";
        document.getElementById("li58").style.backgroundColor = "#ffffff";
        document.getElementById("li59").style.backgroundColor = "#ffffff";
        document.getElementById("li60").style.backgroundColor = "#ffffff";
    }
    if (document.getElementById('cmpMarge').value == 9) {
        document.getElementById("li4").style.backgroundColor = "#ffffff";
        document.getElementById("lia").style.backgroundColor = "#ffffff";
        document.getElementById("li5").style.backgroundColor = "#ffffff";
        document.getElementById("li6").style.backgroundColor = "#ffffff";
        document.getElementById("li7").style.backgroundColor = "#ffffff";
        document.getElementById("li8").style.backgroundColor = "#ffffff";
        document.getElementById("lib").style.backgroundColor = "#ffffff";
        document.getElementById("li9").style.backgroundColor = "#ffffff";
        document.getElementById("li10").style.backgroundColor = "#ffffff";
        document.getElementById("li11").style.backgroundColor = "#ffffff";
        document.getElementById("li12").style.backgroundColor = "#ffffff";
        document.getElementById("lic").style.backgroundColor = "#ffffff";
        document.getElementById("li13").style.backgroundColor = "#ffffff";
        document.getElementById("li14").style.backgroundColor = "#ffffff";
        document.getElementById("li15").style.backgroundColor = "#ffffff";
        document.getElementById("li16").style.backgroundColor = "#ffffff";
        document.getElementById("lid").style.backgroundColor = "#ffffff";
        document.getElementById("li17").style.backgroundColor = "#ffffff";
        document.getElementById("li18").style.backgroundColor = "#ffffff";
        document.getElementById("li19").style.backgroundColor = "#ffffff";
        document.getElementById("li20").style.backgroundColor = "#ffffff";
        document.getElementById("lid1").style.backgroundColor = "#ffffff";
        document.getElementById("li21").style.backgroundColor = "#ffffff";
        document.getElementById("li22").style.backgroundColor = "#ffffff";
        document.getElementById("li23").style.backgroundColor = "#ffffff";
        document.getElementById("li24").style.backgroundColor = "#ffffff";
        document.getElementById("lie").style.backgroundColor = "#ffffff";
        document.getElementById("li25").style.backgroundColor = "#ffffff";
        document.getElementById("li26").style.backgroundColor = "#ffffff";
        document.getElementById("li27").style.backgroundColor = "#ffffff";
        document.getElementById("li28").style.backgroundColor = "#ffffff";
        document.getElementById("lif").style.backgroundColor = "#ffffff";
        document.getElementById("li29").style.backgroundColor = "#ffffff";
        document.getElementById("li30").style.backgroundColor = "#ffffff";
        document.getElementById("li31").style.backgroundColor = "#ffffff";
        document.getElementById("li32").style.backgroundColor = "#ffffff";
        document.getElementById("lig").style.backgroundColor = "#ffffff";
        document.getElementById("li33").style.backgroundColor = "#ffffff";
        document.getElementById("li34").style.backgroundColor = "#ffffff";
        document.getElementById("li35").style.backgroundColor = "#ffffff";
        document.getElementById("li36").style.backgroundColor = "#ffffff";
        document.getElementById("lih").style.backgroundColor = "#ffffff";
        document.getElementById("li37").style.backgroundColor = "#ffffff";
        document.getElementById("li38").style.backgroundColor = "#ffffff";
        document.getElementById("li39").style.backgroundColor = "#ffffff";
        document.getElementById("li40").style.backgroundColor = "#ffffff";
        document.getElementById("lii").style.backgroundColor = "#24b9d6";
        document.getElementById("li41").style.backgroundColor = "#24b9d6";
        document.getElementById("li42").style.backgroundColor = "#24b9d6";
        document.getElementById("li43").style.backgroundColor = "#24b9d6";
        document.getElementById("li44").style.backgroundColor = "#24b9d6";
        document.getElementById("lij").style.backgroundColor = "#ffffff";
        document.getElementById("li45").style.backgroundColor = "#ffffff";
        document.getElementById("li46").style.backgroundColor = "#ffffff";
        document.getElementById("li47").style.backgroundColor = "#ffffff";
        document.getElementById("li48").style.backgroundColor = "#ffffff";
        document.getElementById("lik").style.backgroundColor = "#ffffff";
        document.getElementById("li49").style.backgroundColor = "#ffffff";
        document.getElementById("li50").style.backgroundColor = "#ffffff";
        document.getElementById("li51").style.backgroundColor = "#ffffff";
        document.getElementById("li52").style.backgroundColor = "#ffffff";
        document.getElementById("lil").style.backgroundColor = "#ffffff";
        document.getElementById("li53").style.backgroundColor = "#ffffff";
        document.getElementById("li54").style.backgroundColor = "#ffffff";
        document.getElementById("li55").style.backgroundColor = "#ffffff";
        document.getElementById("li56").style.backgroundColor = "#ffffff";
        document.getElementById("lim").style.backgroundColor = "#ffffff";
        document.getElementById("li57").style.backgroundColor = "#ffffff";
        document.getElementById("li58").style.backgroundColor = "#ffffff";
        document.getElementById("li59").style.backgroundColor = "#ffffff";
        document.getElementById("li60").style.backgroundColor = "#ffffff";
    }if (document.getElementById('cmpMarge').value == 10) {
        document.getElementById("li4").style.backgroundColor = "#ffffff";
        document.getElementById("lia").style.backgroundColor = "#ffffff";
        document.getElementById("li5").style.backgroundColor = "#ffffff";
        document.getElementById("li6").style.backgroundColor = "#ffffff";
        document.getElementById("li7").style.backgroundColor = "#ffffff";
        document.getElementById("li8").style.backgroundColor = "#ffffff";
        document.getElementById("lib").style.backgroundColor = "#ffffff";
        document.getElementById("li9").style.backgroundColor = "#ffffff";
        document.getElementById("li10").style.backgroundColor = "#ffffff";
        document.getElementById("li11").style.backgroundColor = "#ffffff";
        document.getElementById("li12").style.backgroundColor = "#ffffff";
        document.getElementById("lic").style.backgroundColor = "#ffffff";
        document.getElementById("li13").style.backgroundColor = "#ffffff";
        document.getElementById("li14").style.backgroundColor = "#ffffff";
        document.getElementById("li15").style.backgroundColor = "#ffffff";
        document.getElementById("li16").style.backgroundColor = "#ffffff";
        document.getElementById("lid").style.backgroundColor = "#ffffff";
        document.getElementById("li17").style.backgroundColor = "#ffffff";
        document.getElementById("li18").style.backgroundColor = "#ffffff";
        document.getElementById("li19").style.backgroundColor = "#ffffff";
        document.getElementById("li20").style.backgroundColor = "#ffffff";
        document.getElementById("lid1").style.backgroundColor = "#ffffff";
        document.getElementById("li21").style.backgroundColor = "#ffffff";
        document.getElementById("li22").style.backgroundColor = "#ffffff";
        document.getElementById("li23").style.backgroundColor = "#ffffff";
        document.getElementById("li24").style.backgroundColor = "#ffffff";
        document.getElementById("lie").style.backgroundColor = "#ffffff";
        document.getElementById("li25").style.backgroundColor = "#ffffff";
        document.getElementById("li26").style.backgroundColor = "#ffffff";
        document.getElementById("li27").style.backgroundColor = "#ffffff";
        document.getElementById("li28").style.backgroundColor = "#ffffff";
        document.getElementById("lif").style.backgroundColor = "#ffffff";
        document.getElementById("li29").style.backgroundColor = "#ffffff";
        document.getElementById("li30").style.backgroundColor = "#ffffff";
        document.getElementById("li31").style.backgroundColor = "#ffffff";
        document.getElementById("li32").style.backgroundColor = "#ffffff";
        document.getElementById("lig").style.backgroundColor = "#ffffff";
        document.getElementById("li33").style.backgroundColor = "#ffffff";
        document.getElementById("li34").style.backgroundColor = "#ffffff";
        document.getElementById("li35").style.backgroundColor = "#ffffff";
        document.getElementById("li36").style.backgroundColor = "#ffffff";
        document.getElementById("lih").style.backgroundColor = "#ffffff";
        document.getElementById("li37").style.backgroundColor = "#ffffff";
        document.getElementById("li38").style.backgroundColor = "#ffffff";
        document.getElementById("li39").style.backgroundColor = "#ffffff";
        document.getElementById("li40").style.backgroundColor = "#ffffff";
        document.getElementById("lii").style.backgroundColor = "#ffffff";
        document.getElementById("li41").style.backgroundColor = "#ffffff";
        document.getElementById("li42").style.backgroundColor = "#ffffff";
        document.getElementById("li43").style.backgroundColor = "#ffffff";
        document.getElementById("li44").style.backgroundColor = "#ffffff";
        document.getElementById("lij").style.backgroundColor = "#24b9d6";
        document.getElementById("li45").style.backgroundColor = "#24b9d6";
        document.getElementById("li46").style.backgroundColor = "#24b9d6";
        document.getElementById("li47").style.backgroundColor = "#24b9d6";
        document.getElementById("li48").style.backgroundColor = "#24b9d6";
        document.getElementById("lik").style.backgroundColor = "#ffffff";
        document.getElementById("li49").style.backgroundColor = "#ffffff";
        document.getElementById("li50").style.backgroundColor = "#ffffff";
        document.getElementById("li51").style.backgroundColor = "#ffffff";
        document.getElementById("li52").style.backgroundColor = "#ffffff";
        document.getElementById("lil").style.backgroundColor = "#ffffff";
        document.getElementById("li53").style.backgroundColor = "#ffffff";
        document.getElementById("li54").style.backgroundColor = "#ffffff";
        document.getElementById("li55").style.backgroundColor = "#ffffff";
        document.getElementById("li56").style.backgroundColor = "#ffffff";
        document.getElementById("lim").style.backgroundColor = "#ffffff";
        document.getElementById("li57").style.backgroundColor = "#ffffff";
        document.getElementById("li58").style.backgroundColor = "#ffffff";
        document.getElementById("li59").style.backgroundColor = "#ffffff";
        document.getElementById("li60").style.backgroundColor = "#ffffff";
    }
    if (document.getElementById('cmpMarge').value == 11) {
        document.getElementById("li4").style.backgroundColor = "#ffffff";
        document.getElementById("lia").style.backgroundColor = "#ffffff";
        document.getElementById("li5").style.backgroundColor = "#ffffff";
        document.getElementById("li6").style.backgroundColor = "#ffffff";
        document.getElementById("li7").style.backgroundColor = "#ffffff";
        document.getElementById("li8").style.backgroundColor = "#ffffff";
        document.getElementById("lib").style.backgroundColor = "#ffffff";
        document.getElementById("li9").style.backgroundColor = "#ffffff";
        document.getElementById("li10").style.backgroundColor = "#ffffff";
        document.getElementById("li11").style.backgroundColor = "#ffffff";
        document.getElementById("li12").style.backgroundColor = "#ffffff";
        document.getElementById("lic").style.backgroundColor = "#ffffff";
        document.getElementById("li13").style.backgroundColor = "#ffffff";
        document.getElementById("li14").style.backgroundColor = "#ffffff";
        document.getElementById("li15").style.backgroundColor = "#ffffff";
        document.getElementById("li16").style.backgroundColor = "#ffffff";
        document.getElementById("lid").style.backgroundColor = "#ffffff";
        document.getElementById("li17").style.backgroundColor = "#ffffff";
        document.getElementById("li18").style.backgroundColor = "#ffffff";
        document.getElementById("li19").style.backgroundColor = "#ffffff";
        document.getElementById("li20").style.backgroundColor = "#ffffff";
        document.getElementById("lid1").style.backgroundColor = "#ffffff";
        document.getElementById("li21").style.backgroundColor = "#ffffff";
        document.getElementById("li22").style.backgroundColor = "#ffffff";
        document.getElementById("li23").style.backgroundColor = "#ffffff";
        document.getElementById("li24").style.backgroundColor = "#ffffff";
        document.getElementById("lie").style.backgroundColor = "#ffffff";
        document.getElementById("li25").style.backgroundColor = "#ffffff";
        document.getElementById("li26").style.backgroundColor = "#ffffff";
        document.getElementById("li27").style.backgroundColor = "#ffffff";
        document.getElementById("li28").style.backgroundColor = "#ffffff";
        document.getElementById("lif").style.backgroundColor = "#ffffff";
        document.getElementById("li29").style.backgroundColor = "#ffffff";
        document.getElementById("li30").style.backgroundColor = "#ffffff";
        document.getElementById("li31").style.backgroundColor = "#ffffff";
        document.getElementById("li32").style.backgroundColor = "#ffffff";
        document.getElementById("lig").style.backgroundColor = "#ffffff";
        document.getElementById("li33").style.backgroundColor = "#ffffff";
        document.getElementById("li34").style.backgroundColor = "#ffffff";
        document.getElementById("li35").style.backgroundColor = "#ffffff";
        document.getElementById("li36").style.backgroundColor = "#ffffff";
        document.getElementById("lih").style.backgroundColor = "#ffffff";
        document.getElementById("li37").style.backgroundColor = "#ffffff";
        document.getElementById("li38").style.backgroundColor = "#ffffff";
        document.getElementById("li39").style.backgroundColor = "#ffffff";
        document.getElementById("li40").style.backgroundColor = "#ffffff";
        document.getElementById("lii").style.backgroundColor = "#ffffff";
        document.getElementById("li41").style.backgroundColor = "#ffffff";
        document.getElementById("li42").style.backgroundColor = "#ffffff";
        document.getElementById("li43").style.backgroundColor = "#ffffff";
        document.getElementById("li44").style.backgroundColor = "#ffffff";
        document.getElementById("lij").style.backgroundColor = "#ffffff";
        document.getElementById("li45").style.backgroundColor = "#ffffff";
        document.getElementById("li46").style.backgroundColor = "#ffffff";
        document.getElementById("li47").style.backgroundColor = "#ffffff";
        document.getElementById("li48").style.backgroundColor = "#ffffff";
        document.getElementById("lik").style.backgroundColor = "#24b9d6";
        document.getElementById("li49").style.backgroundColor = "#24b9d6";
        document.getElementById("li50").style.backgroundColor = "#24b9d6";
        document.getElementById("li51").style.backgroundColor = "#24b9d6";
        document.getElementById("li52").style.backgroundColor = "#24b9d6";
        document.getElementById("lil").style.backgroundColor = "#ffffff";
        document.getElementById("li53").style.backgroundColor = "#ffffff";
        document.getElementById("li54").style.backgroundColor = "#ffffff";
        document.getElementById("li55").style.backgroundColor = "#ffffff";
        document.getElementById("li56").style.backgroundColor = "#ffffff";
        document.getElementById("lim").style.backgroundColor = "#ffffff";
        document.getElementById("li57").style.backgroundColor = "#ffffff";
        document.getElementById("li58").style.backgroundColor = "#ffffff";
        document.getElementById("li59").style.backgroundColor = "#ffffff";
        document.getElementById("li60").style.backgroundColor = "#ffffff";
    }
    if (document.getElementById('cmpMarge').value == 12) {
        document.getElementById("li4").style.backgroundColor = "#ffffff";
        document.getElementById("lia").style.backgroundColor = "#ffffff";
        document.getElementById("li5").style.backgroundColor = "#ffffff";
        document.getElementById("li6").style.backgroundColor = "#ffffff";
        document.getElementById("li7").style.backgroundColor = "#ffffff";
        document.getElementById("li8").style.backgroundColor = "#ffffff";
        document.getElementById("lib").style.backgroundColor = "#ffffff";
        document.getElementById("li9").style.backgroundColor = "#ffffff";
        document.getElementById("li10").style.backgroundColor = "#ffffff";
        document.getElementById("li11").style.backgroundColor = "#ffffff";
        document.getElementById("li12").style.backgroundColor = "#ffffff";
        document.getElementById("lic").style.backgroundColor = "#ffffff";
        document.getElementById("li13").style.backgroundColor = "#ffffff";
        document.getElementById("li14").style.backgroundColor = "#ffffff";
        document.getElementById("li15").style.backgroundColor = "#ffffff";
        document.getElementById("li16").style.backgroundColor = "#ffffff";
        document.getElementById("lid").style.backgroundColor = "#ffffff";
        document.getElementById("li17").style.backgroundColor = "#ffffff";
        document.getElementById("li18").style.backgroundColor = "#ffffff";
        document.getElementById("li19").style.backgroundColor = "#ffffff";
        document.getElementById("li20").style.backgroundColor = "#ffffff";
        document.getElementById("lid1").style.backgroundColor = "#ffffff";
        document.getElementById("li21").style.backgroundColor = "#ffffff";
        document.getElementById("li22").style.backgroundColor = "#ffffff";
        document.getElementById("li23").style.backgroundColor = "#ffffff";
        document.getElementById("li24").style.backgroundColor = "#ffffff";
        document.getElementById("lie").style.backgroundColor = "#ffffff";
        document.getElementById("li25").style.backgroundColor = "#ffffff";
        document.getElementById("li26").style.backgroundColor = "#ffffff";
        document.getElementById("li27").style.backgroundColor = "#ffffff";
        document.getElementById("li28").style.backgroundColor = "#ffffff";
        document.getElementById("lif").style.backgroundColor = "#ffffff";
        document.getElementById("li29").style.backgroundColor = "#ffffff";
        document.getElementById("li30").style.backgroundColor = "#ffffff";
        document.getElementById("li31").style.backgroundColor = "#ffffff";
        document.getElementById("li32").style.backgroundColor = "#ffffff";
        document.getElementById("lig").style.backgroundColor = "#ffffff";
        document.getElementById("li33").style.backgroundColor = "#ffffff";
        document.getElementById("li34").style.backgroundColor = "#ffffff";
        document.getElementById("li35").style.backgroundColor = "#ffffff";
        document.getElementById("li36").style.backgroundColor = "#ffffff";
        document.getElementById("lih").style.backgroundColor = "#ffffff";
        document.getElementById("li37").style.backgroundColor = "#ffffff";
        document.getElementById("li38").style.backgroundColor = "#ffffff";
        document.getElementById("li39").style.backgroundColor = "#ffffff";
        document.getElementById("li40").style.backgroundColor = "#ffffff";
        document.getElementById("lii").style.backgroundColor = "#ffffff";
        document.getElementById("li41").style.backgroundColor = "#ffffff";
        document.getElementById("li42").style.backgroundColor = "#ffffff";
        document.getElementById("li43").style.backgroundColor = "#ffffff";
        document.getElementById("li44").style.backgroundColor = "#ffffff";
        document.getElementById("lij").style.backgroundColor = "#ffffff";
        document.getElementById("li45").style.backgroundColor = "#ffffff";
        document.getElementById("li46").style.backgroundColor = "#ffffff";
        document.getElementById("li47").style.backgroundColor = "#ffffff";
        document.getElementById("li48").style.backgroundColor = "#ffffff";
        document.getElementById("lik").style.backgroundColor = "#ffffff";
        document.getElementById("li49").style.backgroundColor = "#ffffff";
        document.getElementById("li50").style.backgroundColor = "#ffffff";
        document.getElementById("li51").style.backgroundColor = "#ffffff";
        document.getElementById("li52").style.backgroundColor = "#ffffff";
        document.getElementById("lil").style.backgroundColor = "#24b9d6";
        document.getElementById("li53").style.backgroundColor = "#24b9d6";
        document.getElementById("li54").style.backgroundColor = "#24b9d6";
        document.getElementById("li55").style.backgroundColor = "#24b9d6";
        document.getElementById("li56").style.backgroundColor = "#24b9d6";
        document.getElementById("lim").style.backgroundColor = "#ffffff";
        document.getElementById("li57").style.backgroundColor = "#ffffff";
        document.getElementById("li58").style.backgroundColor = "#ffffff";
        document.getElementById("li59").style.backgroundColor = "#ffffff";
        document.getElementById("li60").style.backgroundColor = "#ffffff";
    }
    if (document.getElementById('cmpMarge').value == 13) {
        document.getElementById("li4").style.backgroundColor = "#ffffff";
        document.getElementById("lia").style.backgroundColor = "#ffffff";
        document.getElementById("li5").style.backgroundColor = "#ffffff";
        document.getElementById("li6").style.backgroundColor = "#ffffff";
        document.getElementById("li7").style.backgroundColor = "#ffffff";
        document.getElementById("li8").style.backgroundColor = "#ffffff";
        document.getElementById("lib").style.backgroundColor = "#ffffff";
        document.getElementById("li9").style.backgroundColor = "#ffffff";
        document.getElementById("li10").style.backgroundColor = "#ffffff";
        document.getElementById("li11").style.backgroundColor = "#ffffff";
        document.getElementById("li12").style.backgroundColor = "#ffffff";
        document.getElementById("lic").style.backgroundColor = "#ffffff";
        document.getElementById("li13").style.backgroundColor = "#ffffff";
        document.getElementById("li14").style.backgroundColor = "#ffffff";
        document.getElementById("li15").style.backgroundColor = "#ffffff";
        document.getElementById("li16").style.backgroundColor = "#ffffff";
        document.getElementById("lid").style.backgroundColor = "#ffffff";
        document.getElementById("li17").style.backgroundColor = "#ffffff";
        document.getElementById("li18").style.backgroundColor = "#ffffff";
        document.getElementById("li19").style.backgroundColor = "#ffffff";
        document.getElementById("li20").style.backgroundColor = "#ffffff";
        document.getElementById("lid1").style.backgroundColor = "#ffffff";
        document.getElementById("li21").style.backgroundColor = "#ffffff";
        document.getElementById("li22").style.backgroundColor = "#ffffff";
        document.getElementById("li23").style.backgroundColor = "#ffffff";
        document.getElementById("li24").style.backgroundColor = "#ffffff";
        document.getElementById("lie").style.backgroundColor = "#ffffff";
        document.getElementById("li25").style.backgroundColor = "#ffffff";
        document.getElementById("li26").style.backgroundColor = "#ffffff";
        document.getElementById("li27").style.backgroundColor = "#ffffff";
        document.getElementById("li28").style.backgroundColor = "#ffffff";
        document.getElementById("lif").style.backgroundColor = "#ffffff";
        document.getElementById("li29").style.backgroundColor = "#ffffff";
        document.getElementById("li30").style.backgroundColor = "#ffffff";
        document.getElementById("li31").style.backgroundColor = "#ffffff";
        document.getElementById("li32").style.backgroundColor = "#ffffff";
        document.getElementById("lig").style.backgroundColor = "#ffffff";
        document.getElementById("li33").style.backgroundColor = "#ffffff";
        document.getElementById("li34").style.backgroundColor = "#ffffff";
        document.getElementById("li35").style.backgroundColor = "#ffffff";
        document.getElementById("li36").style.backgroundColor = "#ffffff";
        document.getElementById("lih").style.backgroundColor = "#ffffff";
        document.getElementById("li37").style.backgroundColor = "#ffffff";
        document.getElementById("li38").style.backgroundColor = "#ffffff";
        document.getElementById("li39").style.backgroundColor = "#ffffff";
        document.getElementById("li40").style.backgroundColor = "#ffffff";
        document.getElementById("lii").style.backgroundColor = "#ffffff";
        document.getElementById("li41").style.backgroundColor = "#ffffff";
        document.getElementById("li42").style.backgroundColor = "#ffffff";
        document.getElementById("li43").style.backgroundColor = "#ffffff";
        document.getElementById("li44").style.backgroundColor = "#ffffff";
        document.getElementById("lij").style.backgroundColor = "#ffffff";
        document.getElementById("li45").style.backgroundColor = "#ffffff";
        document.getElementById("li46").style.backgroundColor = "#ffffff";
        document.getElementById("li47").style.backgroundColor = "#ffffff";
        document.getElementById("li48").style.backgroundColor = "#ffffff";
        document.getElementById("lik").style.backgroundColor = "#ffffff";
        document.getElementById("li49").style.backgroundColor = "#ffffff";
        document.getElementById("li50").style.backgroundColor = "#ffffff";
        document.getElementById("li51").style.backgroundColor = "#ffffff";
        document.getElementById("li52").style.backgroundColor = "#ffffff";
        document.getElementById("lil").style.backgroundColor = "#ffffff";
        document.getElementById("li53").style.backgroundColor = "#ffffff";
        document.getElementById("li54").style.backgroundColor = "#ffffff";
        document.getElementById("li55").style.backgroundColor = "#ffffff";
        document.getElementById("li56").style.backgroundColor = "#ffffff";
        document.getElementById("lim").style.backgroundColor = "#24b9d6";
        document.getElementById("li57").style.backgroundColor = "#24b9d6";
        document.getElementById("li58").style.backgroundColor = "#24b9d6";
        document.getElementById("li59").style.backgroundColor = "#24b9d6";
        document.getElementById("li60").style.backgroundColor = "#24b9d6";

    }

}