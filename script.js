$("#change").on("change", function () {
  let comprobarSiEsC = $("#bigC").text() === "°C";

  $(".mb-0, #bigTemp").each(function () {
    let temperaturaEnPantalla = $(this).text();

    if (comprobarSiEsC) {
      let nuevaTemperatura = temperaturaEnPantalla * (9 / 5) + 32;
      $(this).text(nuevaTemperatura.toFixed(1));
    } else {
      let nuevaTemperatura = (temperaturaEnPantalla - 32) * (5 / 9);
      $(this).text(nuevaTemperatura.toFixed(1));
    }
  });

  if (comprobarSiEsC) {
    $("#bigC").html("°F");
  } else {
    $("#bigC").html("°C");
  }
});
