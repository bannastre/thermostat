'use strict';

function Thermostat(){
  this.temperature = 20
};

Thermostat.prototype.increaseTemperature = function(degrees) {
  this.temperature += degrees
};