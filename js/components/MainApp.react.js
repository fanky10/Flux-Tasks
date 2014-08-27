
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
var Header = require('./Header.react');

var MainApp = React.createClass({
    /**
     * @return {object}
     */
    render: function() {
        return (
                <div className="row">
                    <Header className="col-lg-12" />
                    <section id="main" className="col-lg-4">
                        <ul className="list-group">
                            <li className="list-group-item">Item 1</li>
                            <li className="list-group-item">Item 2</li>
                            <li className="list-group-item">Item 3</li>
                        </ul>
                    </section>
                </div>
                );
    }
}

);

module.exports = MainApp;