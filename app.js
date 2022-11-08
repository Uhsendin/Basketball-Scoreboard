let homePoints = document.getElementById("home-points");
let guestPoints = document.getElementById("guest-points");

function addScore(value, side) {
  if (side == "home") {
    let num = parseInt(homePoints.textContent);
    num += value
    num.toString();
    homePoints.textContent = num;
  } else {
    let num = parseInt(guestPoints.textContent);
    num += value
    num.toString();
    guestPoints.textContent = num;
  }
}
