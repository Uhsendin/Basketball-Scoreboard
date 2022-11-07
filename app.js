let homePoints = document.getElementById("home-points");
let guestPoints = document.getElementById("guest-points");

function plusOne() {
  let num = parseInt(homePoints.textContent);
  num++;
  num.toString();
  homePoints.textContent = num;
 
}

function plusTwo() {
    let num = parseInt(homePoints.textContent)
    num += 2;
    num.toString();
    homePoints.textContent = num
}

function plusThree() {
  let num = parseInt(homePoints.textContent)
  num += 3;
  num.toString();
  homePoints.textContent = num
}

function plusOneGuest() {
  let num = parseInt(guestPoints.textContent);
  num++;
  num.toString();
  guestPoints.textContent = num
}

function plusTwoGuest() {
  let num = parseInt(guestPoints.textContent);
  num += 2;
  num.toString();
  guestPoints.textContent = num
}

function plusThreeGuest() {
  let num = parseInt(guestPoints.textContent)
  num += 3;
  num.toString();
  guestPoints.textContent = num
}