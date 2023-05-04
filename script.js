/* när man klickar kanppen, ska menyn åke ned eller upp */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// stänger menyn om man klickar utanför menyn
window.onclick = function(event) {
    if (!event.target.matches('dropbtn')) {
        var dropdowns = document.getElementByClassName("dropdown-content");
        var i;
        for (i=0; i<dropdowns.length; i++) {
            var openDropdown = dropdowns[i]; 
            if(openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px"
    document.getElementById("main").style.marginLeft = "250px"
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0"
    document.getElementById("main").style.marginLeft = "0"
}