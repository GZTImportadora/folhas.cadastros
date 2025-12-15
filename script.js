const descontos = [0,2,5,10,15,20,25,28,30,33,35,40,45,50,60];

function calcularLinha(preco, custo, icms, desconto){
  const venda = preco - (preco * desconto / 100);
  const semImp = venda - (venda * (0.0925 + icms/100));
  const lucro = semImp - custo;
  const margem = (lucro / semImp) * 100;
  return { venda, semImp, lucro, margem };
}

function calcular(){
  const icms = parseFloat(document.getElementById('icms').value);
  const custo = parseFloat(document.getElementById('custo').value);
  const preco = parseFloat(document.getElementById('preco').value);

  if(isNaN(icms) || isNaN(custo) || isNaN(preco)){
    alert('Preencha todos os campos');
    return;
  }

  const tbody = document.getElementById('resultado');
  tbody.innerHTML = '';

  descontos.forEach(d => {
    const r = calcularLinha(preco, custo, icms, d);
    const tr = document.createElement('tr');
    tr.className = r.margem < 0 ? 'table-danger' : (d === 15 ? 'table-success fw-bold' : '');
    tr.innerHTML = `
      <td>${d}%</td>
      <td>${r.venda.toFixed(2)}</td>
      <td>${r.semImp.toFixed(2)}</td>
      <td>${r.lucro.toFixed(2)}</td>
      <td>${r.margem.toFixed(2)}%</td>
    `;
    tbody.appendChild(tr);
  });
}

function limpar(){
  document.getElementById('icms').value = '17';
  document.getElementById('custo').value = '';
  document.getElementById('preco').value = '';
  document.getElementById('resultado').innerHTML = '';
}
