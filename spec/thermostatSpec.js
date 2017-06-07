'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.currentTemperature).toEqual(20)
  });

  it("increases the currentTemperature with an 'Up' function", function(){
    thermostat.increaseTemperature();
    expect(thermostat.currentTemperature).toEqual(21)
  });

  it("decreases the currentTemperature with a 'Down' function", function(){
    thermostat.decreaseTemperature();
    expect(thermostat.currentTemperature).toEqual(19)
  });

  it("has a minimum temperature of 10 degrees", function(){
      for ( var i = 0; i < 11; i++ ){
        thermostat.decreaseTemperature();
      }
    expect(thermostat.currentTemperature).toEqual(10)
  });

  describe('powerSavingMode', function(){
    it("it defaults to power saving mode on", function(){
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it("has a maximum temperature of 25 degrees if PowerSavingMode is on", function(){
      for ( var i = 0; i < 6; i++){
        thermostat.increaseTemperature();
      }
      expect(thermostat.currentTemperature).toEqual(25)
    });

    it("has a maximum temperature of 32 degrees if PowerSavingMode is off", function(){
      thermostat.switchPowerSavingModeOff()
      for ( var i = 0; i < 12; i++){
        thermostat.increaseTemperature();
      }
      expect(thermostat.currentTemperature).toEqual(32)
    });
  });
});
