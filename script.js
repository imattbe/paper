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

var navbar = ` 
<nav class="navbar">
  <ul>
    <li><a href="paper.html">Paper</a></li>
    <li><a href="computer-misuse-act-1990.html">Computer Misuse</a></li>
    <li><a href="copyright.html">Copyright</a></li>
    <li><a href="ripa.html">RIPA</a></li>
    <li><a href="policy.html">Cyber Security Policy</a></li>
  </ul>
</nav>
<button class="navbutton">🍔</button>`;


        // inserting navbar in beginning of body
        document.body.insertAdjacentHTML("afterbegin", navbar);