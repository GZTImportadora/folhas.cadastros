var atual = document.querySelector('.form-control');
atual.addEventListener("blur", function() {
  var valor = parseInt(this.value);
  var valor2 = valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  });
  atual.value = valor2;
});

