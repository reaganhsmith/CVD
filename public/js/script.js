document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menuIcon");
    const closeIcon = document.querySelector(".closeIcon");
    const menu = document.querySelector(".menu");

    function updateMenuDisplay() {
        if (window.innerWidth >= 650) {
            menu.style.display = "inline";
            menuIcon.style.display = "none";
            closeIcon.style.display = "block";
        } else {
            menu.style.display = "none";
            closeIcon.style.display = "none";
            menuIcon.style.display = "block";
        }
    }


    updateMenuDisplay();

    menuIcon.addEventListener("click", function () {
        menu.style.display = "inline";
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    });

    closeIcon.addEventListener("click", function () {
        menu.style.display = "none";
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    });

    window.addEventListener("resize", updateMenuDisplay);
});



// Code to show or unshow password
function showPassword() {
    var x = document.getElementById("account_password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  // Code to show or unshow password
function showPassword2() {
    var x = document.getElementById("password2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }