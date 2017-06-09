$(document).ready(function(){
  var thermostat = new Thermostat();
  var server = "http://localhost:9292";

  displayWeather("London");
  displayTemperature();

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

  $('#power-saving-status').on('click', function(){
    thermostat.isPowerSavingModeOn();
  });

  $('#powersaving-on').on('click', function(){
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
  });

  $('#powersaving-off').on('click', function(){
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
  });

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city);
  });

  function updateTemperature(callback) {
    $('#temperature').text(thermostat.currentTemperature);
    $('#temperature').attr('class', thermostat.energyUsage());
    callback;
  }

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' ;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';

    $.get(url + city + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  }

  function displayTemperature() {
    $.get(server + '/temperature', function(data) {
      $('#temperature').text(data);
      thermostat.currentTemperature = data;
    });
  }

  function storeTemperature() {
    $.post(server + '/temperature', {"temp": thermostat.currentTemperature});
  }

});
