function nextPage(pageId) {
    // Esconde todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    
    // Mostra a página selecionada
    document.getElementById(pageId).style.display = 'block';
}
