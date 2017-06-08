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

  $('#temperature-reset').on('click', function(){
    thermostat.reset();
    $('#temperature').text(thermostat.currentTemperature);
  });

  $('#power-saving-status').on('click', function(){
    thermostat.isPowerSavingModeOn();
    $('#temperature').text(thermostat.currentTemperature);
  });

  $('#powersaving-on').on('click', function(){
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
    $('#temperature').text(thermostat.currentTemperature);
  });

  $('#powersaving-off').on('click', function(){
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
    $('#temperature').text(thermostat.currentTemperature);
  });

});
