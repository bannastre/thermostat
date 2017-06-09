$(document).ready(function(){
  var thermostat = new Thermostat();
  var server = "http://localhost:9292";

  displayWeather("London");
  displayTemperature();
  displayPowerSavingMode();

  $('#temperature-up').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature(storeTemperature());
  });

  $('#temperature-down').on('click', function(){
    thermostat.decreaseTemperature();
    updateTemperature(storeTemperature());
  });

  $('#temperature-reset').on('click', function(){
    thermostat.reset();
    updateTemperature(storeTemperature());
  });

  $('#powersaving').on('click', function(){
    thermostat.switchPowerSavingMode();
    updatePSM();
    storePowerSavingMode();
  });

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city);
  });


// Temperature:

  function updateTemperature(callback) {
    $('#temperature').text(thermostat.currentTemperature);
    $('#temperature').attr('class', thermostat.energyUsage());
    callback;
  }

  function displayTemperature() {
    $.get(server + '/temperature', function(data) {
      $('#temperature').text(parseInt(data));
      thermostat.currentTemperature = parseInt(data);
    });
  }

  function storeTemperature() {
    $.post(server + '/temperature', {"temp": thermostat.currentTemperature});
  }


// Power Saving Mode:

  function updatePSM() {
    if (thermostat.isPowerSavingModeOn()) {
      $('#power-saving-status').text('on');
    } else {
      $('#power-saving-status').text('off');
    }
  }

  function displayPowerSavingMode() {
    $.get(server + '/power_saving_mode', function(data) {
      thermostat.powerSavingMode = ( data === "true" );
      updatePSM();
    });
  }

  function storePowerSavingMode() {
    $.post(server + '/power_saving_mode', {"psm": thermostat.powerSavingMode});
  }


  // Weather:

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' ;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';

    $.get(url + city + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  }

});
