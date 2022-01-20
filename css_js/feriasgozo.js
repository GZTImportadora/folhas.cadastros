
window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    event.returnValue = "Mensagem de aviso";
    return "Mensagem de aviso";
});

function tela() {
    // Leitor de dados inseridos 
    a = document.getElementById("number").value;
    b = document.getElementById("date").value;
    c = document.getElementById("nome").value;
    d = document.getElementById("nome00").value;
    e = document.getElementById("date1").value;



    if (c == '') {
        alert("O campo DE deve ser preenchido com seu nome!");
        AbortController;
    } else if (a == "") {
        alert("Você deve preencher a quantidade de dias que vai estar em férias!");
        AbortController;
    } else if ( b == "") {
        alert("Você deve preencher a data que vai começar suas férias!");
        AbortController;
    } else if ( e == "") {
        alert("Você deve preencher a data de entrega do documento!");
        AbortController;
    }  else if ( e > b ) {
        alert("A data de entrega do documento não pode ser após a data de saida de férias!");
        AbortController;
    } else {

        //Função para por a data no formato dd / mm / yy
        document.querySelector('[type=date]').value = b.split('/').reverse().join('-');
        var brDate = b.split('-').reverse().join('/');

        // Função para separar dia, mês e ano 
        var inicial = document.getElementById("date1").value;
        var dias = parseInt(document.getElementById("date1").value);
        var partes = e.split("-");
        var ano = partes[0];
        var mes = partes[1];
        var dia = partes[2];


        //Tela de Visualização para o usuario
        document.getElementById("tela").innerHTML = "Venho através deste solicitar gozar de meus" + " " + a + " " + "dias de férias, a partir de" + " " + brDate + ".";
        document.getElementById("nome1").innerHTML = c;
        document.getElementById("nome2").innerHTML = d;
        document.getElementById("ocultar").style.display = "none";

        if (mes == 1) {
            document.getElementById("datafinal").innerHTML = "Passo Fundo," + " " + dia + " " + "de" + " " + "Janeiro" + " " + "de" + " " + ano;
        } else if (mes == 2) {
            document.getElementById("datafinal").innerHTML = "Passo Fundo," + " " + dia + " " + "de" + " " + "Fevereiro" + " " + "de" + " " + ano;
        } else if (mes == 3) {
            document.getElementById("datafinal").innerHTML = "Passo Fundo," + " " + dia + " " + "de" + " " + "Março" + " " + "de" + " " + ano;
        } else if (mes == 4) {
            document.getElementById("datafinal").innerHTML = "Passo Fundo," + " " + dia + " " + "de" + " " + "Abril" + " " + "de" + " " + ano;
        } else if (mes == 5) {
            document.getElementById("datafinal").innerHTML = "Passo Fundo," + " " + dia + " " + "de" + " " + "Maio" + " " + "de" + " " + ano;
        } else if (mes == 6) {
            document.getElementById("datafinal").innerHTML = "Passo Fundo," + " " + dia + " " + "de" + " " + "Junho" + " " + "de" + " " + ano;
        } else if (mes == 7) {
            document.getElementById("datafinal").innerHTML = "Passo Fundo," + " " + dia + " " + "de" + " " + "Julho" + " " + "de" + " " + ano;
        } else if (mes == 8) {
            document.getElementById("datafinal").innerHTML = "Passo Fundo," + " " + dia + " " + "de" + " " + "Agosto" + " " + "de" + " " + ano;
        } else if (mes == 9) {
            document.getElementById("datafinal").innerHTML = "Passo Fundo," + " " + dia + " " + "de" + " " + "Setembro" + " " + "de" + " " + ano;
        } else if (mes == 10) {
            document.getElementById("datafinal").innerHTML = "Passo Fundo," + " " + dia + " " + "de" + " " + "Outubro" + " " + "de" + " " + ano;
        } else if (mes == 11) {
            document.getElementById("datafinal").innerHTML = "Passo Fundo," + " " + dia + " " + "de" + " " + "Novembro" + " " + "de" + " " + ano;
        } else if (mes == 12) {
            document.getElementById("datafinal").innerHTML = "Passo Fundo," + " " + dia + " " + "de" + " " + "Dezembro" + " " + "de" + " " + ano;
        }
    }
}
