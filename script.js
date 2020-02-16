//Initialize side nav
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  $("#nav-about").on("click", function (){
    $("#about").attr("style", "padding: 50% 0 80% 0");
  });

  $("#nav-contact").on("click", function (){
    $("#contact").attr("style", "padding: 40% 0 60% 0");
  });

  $("#nav-skills").on("click", function (){
    $("#skills").attr("style", "padding-top: 60%");
    $("#skills-2").attr("style", "padding-bottom: 80%");
  });

  
  $("#about-link").on("click", function (){
    $("#about").attr("style", "padding: 50% 0 80% 0");
  });

  $("#contact-link").on("click", function (){
    $("#contact").attr("style", "padding: 40% 0 80% 0");
  });

  $("#skills-link").on("click", function (){
    $("#skills").attr("style", "padding: 60% 0");
  });