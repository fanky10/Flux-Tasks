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

var Footer = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div className="row">
        All rights reserved.
      </div>
    );
  }

});

module.exports = Footer;
