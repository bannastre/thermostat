'use strict';

function Thermostat(){
  this.currentTemperature = 20
  this.minimumTemperature = 10
};

Thermostat.prototype.increaseTemperature = function(degrees) {
  this.currentTemperature += degrees
};

Thermostat.prototype.decreaseTemperature = function(degrees) {
  this.currentTemperature -= degrees
};
