/**
 * Copyright 2013-2014 Atlassian
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var OutlineServerActionCreators = require('../actions/OutlineServerActionCreators');

var OutlineWebAPIUtils = {
    getAllTasks: function(){
        var tasks = {
            "50": {"id":50,
                "complete": false,
                "text": "Something",
                "estimatedTime": 10}
        };
        // simulate success callback
        OutlineServerActionCreators.receiveAll(tasks);
    }
}

module.exports = OutlineWebAPIUtils;
