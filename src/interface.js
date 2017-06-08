$(document).ready(function(){
  var thermostat = new Thermostat();
  var server = "http://localhost:9292/";
  updateTemperature();

  $('#temperature-up').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
    getMyTemperature();
  });

  $('#temperature-down').on('click', function(){
    thermostat.decreaseTemperature();
    updateTemperature();
    getMyTemperature();
  });

  $('#temperature-reset').on('click', function(){
    thermostat.reset();
    updateTemperature();
    getMyTemperature();
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

  displayWeather("London");

  setMyTemperature();

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city);
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' ;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';

    $.get(url + city + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  }

  function setMyTemperature() {
    $.get(server + 'temperature', function(data) {
      thermostat.setUserTemperature(data);
      updateTemperature();
    });
  }

  function getMyTemperature() {
    data = {"temp": thermostat.currentTemperature};
    $.post(server + 'temperature', data);
  }
});
