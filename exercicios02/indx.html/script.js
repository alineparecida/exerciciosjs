const botao = document.getElementById ('botao');
const texto = document.getElementById ('texto')

botao.addEventListener('click,function'() {
    texto.textContent = 'oba! Voce clicou no botão!';
    
    texto.style.color = 'red';
    texto.style.fontSize = '24 px';
    texto.style.fontweight = 'bold';
})