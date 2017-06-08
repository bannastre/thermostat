'use strict';

function Thermostat(){
  this.powerSavingMode = true;
  this.currentTemperature = 20
  this.MIN_TEMPERATURE = 10
  this.MAX_TEMP_PSM_ON = 25
  this.MAX_TEMP_PSM_OFF = 32
};

Thermostat.prototype.increaseTemperature = function() {
  this.currentTemperature += 1
};

Thermostat.prototype.isMinimumTemperature = function(){
  return this.currentTemperature === this.MIN_TEMPERATURE
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.isMinimumTemperature()){
    return;
  };
  this.currentTemperature -= 1;
};

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
};

Thermostat.prototype.isMaximumTemperature = function(){
  if (this.powerSavingMode === true){
    return this.currentTemperature === this.MAX_TEMP_PSM_ON;
  }
    return this.currentTemperature === this.MAX_TEMP_PSM_OFF;
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.isMaximumTemperature()){
    return;
  };
  this.currentTemperature += 1;
};

Thermostat.prototype.reset = function() {
  this.currentTemperature = 20
};

Thermostat.prototype.setUserTemperature = function(degrees){
  this.currentTemperature = degrees
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
