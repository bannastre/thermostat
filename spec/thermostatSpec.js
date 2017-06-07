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
    thermostat.increaseTemperature(1);
    expect(thermostat.currentTemperature).toEqual(21)
  });

  it("decreases the currentTemperature with a 'Down' function", function(){
    thermostat.decreaseTemperature(1);
    expect(thermostat.currentTemperature).toEqual(19)
  });

  it("has a minimum temperature of 10 degrees", function(){
    expect(thermostat.minTemperature).toEqual(10)
  });

  describe('PowerSavingMode', function(){
    it("has a maximum temperature of 25 degrees if PowerSavingMode is on", function(){
      expect(thermostat.maxTemperature).toEqual(25)
    });

    it("has a maximum temperature of 32 degrees if PowerSavingMode is off", function(){
      thermostat.switchPowerSavingMode()
      expect(thermostat.maxTemperature).toEqual(32)
    });

    it("allows maximum temperature to return to 25 when PowerSavingMode is switched back on", function(){
      thermostat.switchPowerSavingMode()
      thermostat.switchPowerSavingMode()
      expect(thermostat.maxTemperature).toEqual(25)
    })
  });
});
