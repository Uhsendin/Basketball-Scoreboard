let homePoints = document.getElementById("home-points");
let guestPoints = document.getElementById("guest-points");

function plusOne() {
  let num = parseInt(homePoints.textContent);
  num++;
  num.toString();
  homePoints.textContent = num;
  console.log((homePoints.textContent = num));
}
