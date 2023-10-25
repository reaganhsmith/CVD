const jaminImage = document.querySelector(".jaminPhoto img");
const jaminIndv = "../images/doctors/jamin.jpg";
const jaminFam = "../images/doctors/jaminsfam.jpg";

const javanImage = document.querySelector(".javanPhoto img");
const javanIndv = "../images/doctors/javan.jpg";
const javanFam = "../images/doctors/javanfam.jpg";

const ryImage = document.querySelector(".rylanPhoto img");
const ryIndv = "../images/doctors/ry.jpg";
const ryFam = "../images/doctors/rysfam.jpg";

jaminImage.addEventListener("mouseover", function () {
    jaminImage.src = jaminFam;
  });

  jaminImage.addEventListener("mouseleave", function () {
    jaminImage.src = jaminIndv;
  });
  

javanImage.addEventListener("mouseover", function () {
    javanImage.src = javanFam;
  });

javanImage.addEventListener("mouseleave", function () {
    javanImage.src = javanIndv;
  });
  

  ryImage.addEventListener("mouseover", function () {
    ryImage.src = ryFam;
  });

  ryImage.addEventListener("mouseleave", function () {
    ryImage.src = ryIndv;
  });
  