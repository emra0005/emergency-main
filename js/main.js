
// girlcirle

document.querySelector("#girlCircle").addEventListener("mouseover", girlHighlight);
document.querySelector("#girlCircle").addEventListener("mouseout", girlUnHighlight);
document.querySelector("#girlCircle").addEventListener("click", girlInfo);

function girlHighlight() {
  console.log("girlHighlight");
  document.querySelector("#girlCircle").style.fill = "#fff";
}
function girlUnHighlight() {
  console.log("girlUnHighlight");
  document.querySelector("#girlCircle").style.fill = "#f00";
}

function girlInfo() {
  console.log("girlInfo");
  document.querySelector(".info-text > h2").textContent = "Beskyt dit pelsbarn!";
  document.querySelector(".info-text > article > p").textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}

// dogcircle

document.querySelector("#dogCircle").addEventListener("mouseover", dogHighlight);
document.querySelector("#dogCircle").addEventListener("mouseout", dogUnHighlight);
document.querySelector("#dogCircle").addEventListener("click", dogInfo);

function dogHighlight() {
  console.log("dogHighlight");
  document.querySelector("#dogCircle").style.fill = "#fff";
}
function dogUnHighlight() {
  console.log("dogUnHighlight");
  document.querySelector("#dogCircle").style.fill = "#f00";
}

function dogInfo() {
  console.log("dogInfo");
  document.querySelector(".info-text > h2").textContent = "Symptomer du SKAL holde øje med";
  document.querySelector(".info-text > article > p").textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}

// crycircle

document.querySelector("#cryCircle").addEventListener("mouseover", cryHighlight);
document.querySelector("#cryCircle").addEventListener("mouseout", cryUnHighlight);
document.querySelector("#cryCircle").addEventListener("click", cryInfo);

function cryHighlight() {
  console.log("cryHighlight");
  document.querySelector("#cryCircle").style.fill = "#fff";
}
function cryUnHighlight() {
  console.log("cryUnHighlight");
  document.querySelector("#cryCircle").style.fill = "#f00";
}

function cryInfo() {
  console.log("cryInfo");
  document.querySelector(".info-text > h2").textContent = "Min baby har symptomer, HVAD GØR JEG??";
  document.querySelector(".info-text > article > p").textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}
