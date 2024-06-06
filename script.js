$(document).ready(function() {
  // Función para cambiar a modo claro
  $("#lightModeBtn").click(function() {
      $("body").removeClass("bg-dark text-white");
      $("nav").removeClass("navbar-dark bg-dark").addClass("navbar-light bg-light");
      $(".navbar-brand").removeClass("text-white");
      $(".btn-dark").removeClass("btn-dark").addClass("btn-light");
      $(".table").removeClass("table-dark").addClass("table-light");
  });

  // Función para cambiar a modo oscuro
  $("#darkModeBtn").click(function() {
      $("body").addClass("bg-dark text-white");
      $("nav").removeClass("navbar-light bg-light").addClass("navbar-dark bg-dark");
      $(".navbar-brand").addClass("text-white");
      $(".btn-light").removeClass("btn-light").addClass("btn-dark");
      $(".table").removeClass("table-light").addClass("table-dark");
  });
});
