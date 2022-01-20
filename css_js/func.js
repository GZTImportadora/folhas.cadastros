function info1() {
    alert("Formulário de preenchimento  utilizado para coleta de dados de clientes, antes de ser feito o cadastro no sistema. Não é possível ser feito armazenamento dos dados pelo sistema, deve-se imprimir o mesmo após preenchimento. ");
}

function info2() {
    alert("Formulário de preenchimento  utilizado para liberação de crédito de clientes novos, sem limite, etc. Não é possível ser feito armazenamento dos dados pelo sistema, deve-se imprimir o mesmo após preenchimento. ");
}

function info3() {
    alert("Formulário de preenchimento  utilizado para  coleta de dados de fornecedores, antes de ser feito o cadastro no sistema. Não é possível ser feito armazenamento dos dados pelo sistema, deve-se imprimir o mesmo após preenchimento. ");
}

function info4() {
    alert("Calculo de margem utilizado para calcular a margem de venda de um determinado produto, observando o percentual de desconto oferecido neste produto.");
}


function mostrar1(){
    document.getElementById("cadastro").style.display = 'block';
    document.getElementById("etiqueta").style.display = 'none';
    document.getElementById("ferias").style.display = 'none';
    
}

function mostrar2(){
    document.getElementById("cadastro").style.display = 'none';
    document.getElementById("etiqueta").style.display = 'block';
    document.getElementById("ferias").style.display = 'none';
    
}

function mostrar3(){
    document.getElementById("cadastro").style.display = 'none';
    document.getElementById("etiqueta").style.display = 'none';
    document.getElementById("ferias").style.display = 'block';

    
}
