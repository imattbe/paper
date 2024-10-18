document.getElementsByClassName('togglesections')[0].addEventListener('click', function() {
    var sectionslist = document.getElementsByClassName('sectionslist')[0];
    if (sectionslist.style.display === 'none') {
        sectionslist.style.display = 'block';
        this.textContent = 'hide';
    } else {
        sectionslist.style.display = 'none';
        this.textContent = 'show';
    }
});
