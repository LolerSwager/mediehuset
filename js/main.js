let prevScrollpos = window.pageYOffset;   // Opretter variabel 
window.onscroll = function() {  // Opretter en if / else function når man scroller på siden 
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) { // hvis man scroller tilbage til forrige position 
    document.getElementById("navbar").style.top = "0"; //setter NAV top tilbage til 0
  } else { //hvis man scroller ned så sætter den på -100px på NAV top
    document.getElementById("navbar").style.top = "-100px"; 
  }
  prevScrollpos = currentScrollPos; 
}
