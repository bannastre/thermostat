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
    expect(thermostat.minimumTemperature).toEqual(10)
  });
});
