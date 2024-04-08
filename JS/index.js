document.addEventListener('DOMContentLoaded', function() {
    // Função para consultar o CEP
    function consultarCEP(cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => preencherCampos(data))
            .catch(error => console.error('Erro ao consultar CEP:', error));
    }

    // Função para preencher os campos com os dados do CEP
    function preencherCampos(data) {
        document.getElementById('cep').textContent = data.cep;
        document.getElementById('logradouro').textContent = data.logradouro;
        document.getElementById('bairro').textContent = data.bairro;
        document.getElementById('localidade').textContent = data.localidade;
        document.getElementById('uf').textContent = data.uf;
        document.getElementById('ddd').textContent = data.ddd;
    }

    // Evento de clique do botão de consulta
    document.getElementById('consultarBtn').addEventListener('click', function() {
        const cepInput = document.getElementById('cepInput').value;
        consultarCEP(cepInput);
    });
});
