function mudarCorFundo(cor) {
    const formulario = document.getElementById('meuFormulario');
    
    switch (cor) {
        case 'azul':
            formulario.style.backgroundColor = 'CornflowerBlue';
            break;
        case 'rosa':
            formulario.style.backgroundColor = 'pink';
            break;
        case 'branco':
            formulario.style.backgroundColor = 'white';
            break;
        default:
            break;
    }
}
