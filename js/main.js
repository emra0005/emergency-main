
document.querySelector("#girlCircle").addEventListener("mouseover", headHighlight);
document.querySelector("#girlCircle").addEventListener("mouseout", headUnHighlight);
document.querySelector("#girlCircle").addEventListener("click", girlInfo);

function headHighlight() {
  console.log("girlHighlight");
  document.querySelector("#girlCircle").style.fill = "#fff";
}
function headUnHighlight() {
  console.log("headUnHighlight");
  document.querySelector("#girlCircle").style.fill = "#f00";
}

function girlInfo() {
  console.log("headInfo");
  document.querySelector(".info-text > h2").textContent = "Beskyt dit pelsbarn!";
  document.querySelector(".info-text > article > p").textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}

