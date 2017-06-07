'use strict';

function Thermostat(){
  this.currentTemperature = 20
  this.minTemperature = 10
  this.maxTemperature = 25
};

Thermostat.prototype.increaseTemperature = function(degrees) {
  this.currentTemperature += degrees
};

Thermostat.prototype.decreaseTemperature = function(degrees) {
  this.currentTemperature -= degrees
};

Thermostat.prototype.switchPowerSavingMode = function() {
  if (this.maxTemperature === 25) {
    this.maxTemperature = 32;
  }  else {
    this.maxTemperature = 25; 
  };
};
