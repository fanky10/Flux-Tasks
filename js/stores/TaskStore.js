var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var tasks = [], lastId = 0;
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
        return this.tasks[id];
    },
    /**
     * Update a TODO item.
     * @param  {string} id
     * @param {object} updates An object literal containing only the data to be
     *     updated.
     */
    update: function(id, updates) {
        tasks[id] = merge(tasks[id], updates);
    },
    /**
     * Update all of the TODO items with the same object.
     *     the data to be updated.  Used to mark all TODOs as completed.
     * @param  {object} updates An object literal containing only the data to be
     *     updated.
     
     */
    updateAll: function(updates) {
        for (var id in tasks) {
            update(id, updates);
        }
    },
    /**
     * Delete a TODO item.
     * @param  {string} id
     */
    destroy: function(id) {
        if (this.tasks[id]) {
            delete this.tasks[id];
        }
    },
    /**
     * Delete all the completed TODO items.
     */
    destroyCompleted: function() {
        for (var id in tasks) {
            if (tasks[id] && tasks[id].complete) {
                destroy(id);
            }
        }
    },
    /**
     * Tests whether all the remaining TODO items are marked as completed.
     * @return {booleam}
     */
    areAllComplete: function() {
        for (var id in _todos) {
            if (!_todos[id].complete) {
                return false;
            }
        }
        return true;
    },
    /**
     * Get the entire collection of TODOs.
     * @return {object}
     */
    getAll: function() {
        return this.tasks;
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

module.exports = TaskStore;
