$(document).ready(function () {
  $(".submit").click(function (event) {
    console.log("test");

    var email = $(".email1").val();
    var subject = $(".subject").val();
    var name = $(".name1").val();
    var message = $(".message").val();
    var statusElm = $(".status");
    statusElm.empty();

    if (name.length > 1) {
    } else {
      statusElm.append("<div>Vul uw naam in!</div>");
      event.preventDefault();
      $(".status").show();
    }

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
    } else {
      statusElm.append("<div>Het opgegeven emailadres is onjuist!</div>");
      event.preventDefault();
      $(".status").show();
    }

    if (subject.length > 2) {
    } else {
      statusElm.append("<div>Vul een onderwerp in!</div>");
      event.preventDefault();
      $(".status").show();
    }

    if (message.length > 10) {
    } else {
      statusElm.append("<div>Bericht moet langer zijn dan 10 tekens!</div>");
      event.preventDefault();
      $(".status").show();
    }
  });

  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  //toggle menu/navbar script
  //later nog een keer bekijken
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}
