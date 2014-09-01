
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @jsx React.DOM
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var Header = require('./Header.react');
var TaskStore = require('../stores/TaskStore');

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTasksState() {
  return {
    allTasks: TaskStore.getAll(),
    areAllComplete: TaskStore.areAllComplete()
  };
}

var MainApp = React.createClass({
    
    getInitialState: function() {
        return getTasksState();
    },

    /**
     * @return {object}
     */
    render: function() {
        // This section should be hidden by default
        // and shown when there are todos.
        if (Object.keys(this.state.allTasks).length < 1) {
          return null;
        }

        var allTasks = this.state.allTasks;
        var tasks = [];

        for (var key in allTasks) {
            tasks.push(<li id={key} > {allTasks[key]} </li>);
        }

        return (
                < div className = "row" >
                < Header className = "col-lg-12" />
                < section id = "main" className = "col-lg-4" >
                < ul className = "list-groupy" >
                {tasks}
                < /ul>
                < /section>
                < /div>
                );
    }

});
module.exports = MainApp;