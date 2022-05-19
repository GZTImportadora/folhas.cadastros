function gerarpdf1() {

    var pdf;
    pdf = new jsPDF({
        orientation: 'a4',
        unit: 'cm',
        format: 'letter'
    });
    pdf.text('Folha Rosto Cadastro de Cliente', 5, 2)
    pdf.text('Folha Rosto', 3, 10)
    pdf.save('folha_rosto.pdf');

}

function gerarpdf() {

    alert("No momento estamos trabalhando para habilitar esta função! Para salvar o arquivo em PDF clique em imprimir e selecione a impressora: Salvar em PDF ou Creater PDF");
}

