function showPopup(Kaufen) {
  const popup = document.getElementById(Kaufen);
  popup.classList.toggle("show");
}

function RWDnavbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }