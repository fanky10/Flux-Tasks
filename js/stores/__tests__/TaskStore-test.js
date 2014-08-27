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
    expect(newTask.id).toBe(1);
    expect(newTask.text).toBe("someText");
    expect(newTask.estimatedTime).toBe(10);
    
    text = "someOther", estTime = "15";
    newTask = TaskStore.create(text,estTime);    
    expect(newTask.id).toBe(2);
    expect(newTask.text).toBe("someOther");
    expect(newTask.estimatedTime).toBe(15);
    
  });
  
  it('finds a Task', function() {
    var text = "someText", estTime = "10";
    var newTask = TaskStore.create(text,estTime);
    expect(newTask.id).toBe(1);
    expect(newTask.text).toBe("someText");
    expect(newTask.estimatedTime).toBe(10);
    
    var foundTask = TaskStore.findOne(1);
    expect(foundTask).toBe(newTask);
    
  });
  
  it('updates a Task', function() {
    var text = "someText", estTime = "10";
    var newTask = TaskStore.create(text,estTime);
    expect(newTask.id).toBe(1);
    expect(newTask.text).toBe("someText");
    expect(newTask.estimatedTime).toBe(10);
    var updateObject = {
        text: "a Text",
        estimatedTime: 19
    };
    TaskStore.update(newTask.id,updateObject);
    var foundTask = TaskStore.findOne(1);
    expect(foundTask).not.toBe(newTask);
    
  });
  it('find all Tasks', function() {
    
    TaskStore.create("text",10);
    TaskStore.create("another Text",12);
    var tasks = TaskStore.getAll();
    expect(tasks.length).not.toBe(0);
    
  });
  it('updates all Tasks', function() {
    TaskStore.create("text",10);
    TaskStore.create("another Text",12);
    var updateObject = {
        text: "a Text",
        estimatedTime: 19
    };
    TaskStore.updateAll(updateObject);
    var tasks = TaskStore.getAll();
    for(var idx=1;idx<tasks.length;idx++){
        var task = tasks[idx];
        expect(task).not.toBeUndefined();
        expect(task.text).toBe("a Text");
        expect(task.estimatedTime).toBe(19);
    }
    
    
  });

});
