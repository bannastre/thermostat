$(document).ready(function(){
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.currentTemperature);

  $('#temperature-up').on('click', function() {
    thermostat.increaseTemperature();
    $('#temperature').text(thermostat.currentTemperature);
  });

  $('#temperature-down').on('click', function(){
    thermostat.decreaseTemperature();
    $('#temperature').text(thermostat.currentTemperature);
  });
});
