window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    event.returnValue = "Mensagem de aviso";
    return "Mensagem de aviso";
});

function preenche() {
    let checkbox = document.getElementById('chec');
    a = document.getElementById("ende0").value;
    b = document.getElementById("cida0").value;
    C = document.getElementById("UF0").value;
    d = document.getElementById("cep0").value;

    if (checkbox.checked) {
        document.getElementById("end1").value = a;
        document.getElementById("cida1").value = b;
        document.getElementById("UF1").value = C;
        document.getElementById("cep1").value = d;
    } else {
        document.getElementById("end1").value = '';
        document.getElementById("cida1").value = '';
        document.getElementById("UF1").value = '';
        document.getElementById("cep1").value = '';
    }

}



function mascaraMutuario(o, f) {
    v_obj = o
    v_fun = f
    setTimeout('execmascara()', 1)
}

function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}

function cpfCnpj(v) {

    //Remove tudo o que não é dígito
    v = v.replace(/\D/g, "")

    if (v.length <= 12) { //CPF

        //Coloca um ponto entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d)/, "$1.$2")

        //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v = v.replace(/(\d{3})(\d)/, "$1.$2")

        //Coloca um hífen entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

    } else { //CNPJ

        //Coloca ponto entre o segundo e o terceiro dígitos
        v = v.replace(/^(\d{2})(\d)/, "$1.$2")

        //Coloca ponto entre o quinto e o sexto dígitos
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")

        //Coloca uma barra entre o oitavo e o nono dígitos
        v = v.replace(/\.(\d{3})(\d)/, ".$1/$2")

        //Coloca um hífen depois do bloco de quatro dígitos
        v = v.replace(/(\d{4})(\d)/, "$1-$2")

    }

    if (v.length < 19) {
        return v
    } else {
        alert('CNPJ ou CPF inválido!! Digite novamente')
        return ''
    }

}


function mascaraMutuario(o, f) {
    x_obj = o
    x_fun = f
    setTimeout('execmascara()', 1)
}

function execmascara() {
    x_obj.value = x_fun(x_obj.value)
}


function fone(x) {
    x = x.replace(/\D/g, "")
    if (x.length <= 10) { //fone
        x = x.replace(/(\d{0})(\d)/, "$1($2")
        x = x.replace(/(\d{2})(\d)/, "$1) $2")
        x = x.replace(/(\d{4})(\d)/, "$1-$2")

    } else { //cllr
        x = x.replace(/(\d{0})(\d)/, "$1($2")
        x = x.replace(/(\d{2})(\d)/, "$1) $2")
        x = x.replace(/(\d{5})(\d)/, "$1-$2")
    }

    if (x.length <= 15) {
        return x
    } else {
        alert('Telefone inválido!! Digite novamente')
        return ''
    }

}

function verifica() {
    if (document.getElementById("fornecedor").value == '') {
        alert("Precisa informar pelo menos 01 fornecedor");
        AbortController;
    } else {
        document.getElementById("pagina").innerHTML = window.print();
        document.getElementById("pagina").innerHTML = a;
    }


}

