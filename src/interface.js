$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#temperature-down').on('click', function(){
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#temperature-reset').on('click', function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#power-saving-status').on('click', function(){
    thermostat.isPowerSavingModeOn();
    updateTemperature();
  });

  $('#powersaving-on').on('click', function(){
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
    updateTemperature();
  });

  $('#powersaving-off').on('click', function(){
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
    updateTemperature();
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cb11ca00b9471a16706cdc490f3853cf&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

});
