var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var AppDispatcher = require('../dispatcher/AppDispatcher');

var CHANGE_EVENT = 'change';

var tasks = {}, lastId = 0;
var TaskStore = merge(EventEmitter.prototype, {
    create: function(text, estimatedTime) {
        // work with auto generated id
        lastId++;
        estimatedTime = parseInt(estimatedTime);
        var createdTask = {
            id: lastId,
            complete: false,
            text: text,
            estimatedTime: estimatedTime
        };
        tasks[lastId] = createdTask;
        return createdTask;
    },
    findOne: function(id) {
        id = parseInt(id);
        return tasks[id];
    },
    /**
     * Update a Task item.
     * @param  {string} id
     * @param {object} updates An object literal containing only the data to be
     *     updated.
     */
    update: function(id, updates) {
        tasks[id] = merge(tasks[id], updates);
    },
    updateAll: function(updates) {
        for (var id in tasks) {
            this.update(id, updates);
        }
    },
    destroy: function(id) {
        if (tasks[id]) {
            delete tasks[id];
        }
    },
    destroyCompleted: function() {
        for (var id in tasks) {
            if (tasks[id] && tasks[id].complete) {
                this.destroy(id);
            }
        }
    },
    areAllComplete: function() {
        for (var id in tasks) {
            if (!tasks[id].complete) {
                return false;
            }
        }
        return true;
    },
    getAll: function() {
        return tasks;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

TaskStore.dispatchToken = AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch (action.type) {

        case "RECEIVE_TASKS":
            tasks = action.tasks;
            break;
    }

    // This often goes in each case that should trigger a UI change. This store
    // needs to trigger a UI change after every view action, so we can make the
    // code less repetitive by putting it here.  We need the default case,
    // however, to make sure this only gets called after one of the cases above.
    TaskStore.emitChange();

    return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = TaskStore;
