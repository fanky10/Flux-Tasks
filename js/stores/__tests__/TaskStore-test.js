"use strict";

jest.autoMockOff();

describe('TaskStore', function() {
  var TaskStore;
  beforeEach(function() {
    TaskStore = require('../TaskStore.js');
  });
  
  it('adds a new Task', function() {
    var text = "someText", estTime = "10";
    var newTask = TaskStore.create(text,estTime);
    console.log('adding new task');
    expect(newTask.id).toBe(1);
    expect(newTask.text).toBe("someText");
    expect(newTask.estimatedTime).toBe(10);
    
    text = "someOther", estTime = "15";
    newTask = TaskStore.create(text,estTime);    
    expect(newTask.id).toBe(2);
    expect(newTask.text).toBe("someOther");
    expect(newTask.estimatedTime).toBe(15);
    
  });

});
