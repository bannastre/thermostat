'use strict';

function Thermostat(){
  this.PSM_ON_MAX_TEMPERATURE = 25
  this.PSM_OFF_MAX_TEMPERATURE = 32
  this.MIN_TEMPERATURE = 10
  this.currentTemperature = 20
  this.maxTemperature = this.PSM_ON_MAX_TEMPERATURE
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.currentTemperature === this.maxTemperature){
    return;
  };
  this.currentTemperature += 1;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.isMinimumTemperature()){
    return;
  };
  this.currentTemperature -= 1;
};

Thermostat.prototype.reset = function() {
  this.currentTemperature = 20
};

Thermostat.prototype.isMinimumTemperature = function(){
  return this.currentTemperature === this.MIN_TEMPERATURE
};

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.maxTemperature === this.PSM_ON_MAX_TEMPERATURE;
};

Thermostat.prototype.switchPowerSavingMode = function() {
  if (this.isPowerSavingModeOn()) {
    this.maxTemperature = this.PSM_OFF_MAX_TEMPERATURE;
  } else {
    this.maxTemperature = this.PSM_ON_MAX_TEMPERATURE;
  }
};

Thermostat.prototype.energyUsage = function() {
  if (this.currentTemperature >= 25) {
    return 'high-usage'
  } else if (this.currentTemperature >= 18) {
    return 'medium-usage'
  } else {
    return 'low-usage'
  }
};
