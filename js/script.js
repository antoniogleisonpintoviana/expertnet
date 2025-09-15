document.getElementById('btnCalcular').addEventListener('click', function() {
  // Obter valores dos inputs
  const copias = parseInt(document.getElementById('copias').value) || 0;
  const boletos = parseInt(document.getElementById('boletos').value) || 0;
  const impressoes = parseInt(document.getElementById('impressoes').value) || 0;
  const fotografico = parseInt(document.getElementById('fotografico').value) || 0;
  const foto3x4 = parseInt(document.getElementById('foto3x4').value) || 0;
  
  // Elementos do DOM
  const erroElement = document.getElementById('erro');
  const resultadoElement = document.getElementById('resultado');
  const valorCopiasElement = document.getElementById('valorCopias');
  const valorBoletosElement = document.getElementById('valorBoletos');
  const valorImpressoesElement = document.getElementById('valorImpressoes');
  const valorFotograficoElement = document.getElementById('valorFotografico');
  const valorFoto3x4Element = document.getElementById('valorFoto3x4');
  const valorTotalElement = document.getElementById('valorTotal');
  
  // Validar entradas
  if (copias < 0 || boletos < 0 || impressoes < 0 || fotografico < 0 || foto3x4 < 0) {
    erroElement.textContent = 'Por favor, digite valores positivos.';
    erroElement.style.display = 'block';
    resultadoElement.style.display = 'none';
    return;
  }
  
  if (copias === 0 && boletos === 0 && impressoes === 0 && fotografico === 0 && foto3x4 === 0) {
    erroElement.textContent = 'Digite pelo menos uma quantidade de serviços.';
    erroElement.style.display = 'block';
    resultadoElement.style.display = 'none';
    return;
  }
  
  // Esconder mensagem de erro se tudo estiver ok
  erroElement.style.display = 'none';
  
  // Calcular valores
  const valorCopias = copias * 0.70;
  const valorBoletos = boletos * 2.00;
  const valorImpressoes = impressoes * 1.00;
  const valorFotografico = fotografico * 5.00;
  const valorFoto3x4 = foto3x4 * 5.00; // R$ 5,00 por página (6 fotos)
  const valorTotal = valorCopias + valorBoletos + valorImpressoes + valorFotografico + valorFoto3x4;
  
  // Formatando para moeda brasileira
  const formatarMoeda = (valor) => {
    return 'R$ ' + valor.toFixed(2).replace('.', ',');
  };
  
  // Atualizar os valores na tela
  valorCopiasElement.textContent = formatarMoeda(valorCopias);
  valorBoletosElement.textContent = formatarMoeda(valorBoletos);
  valorImpressoesElement.textContent = formatarMoeda(valorImpressoes);
  valorFotograficoElement.textContent = formatarMoeda(valorFotografico);
  valorFoto3x4Element.textContent = formatarMoeda(valorFoto3x4);
  valorTotalElement.textContent = formatarMoeda(valorTotal);
  
  // Mostrar o resultado
  resultadoElement.style.display = 'block';
});

// Limpar mensagens de erro ao digitar nos campos
const campos = ['copias', 'boletos', 'impressoes', 'fotografico', 'foto3x4'];
campos.forEach(campo => {
  document.getElementById(campo).addEventListener('input', function() {
    document.getElementById('erro').style.display = 'none';
  });
});
