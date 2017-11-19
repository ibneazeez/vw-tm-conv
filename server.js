/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

require('dotenv').config({silent: true});

var server = require('./app');


	// Chrome requires https to access the user's microphone unless it's a localhost url so
	// this sets up a basic server on port 3001 using an included self-signed certificate
	// note: this is not suitable for production use
	// however bluemix automatically adds https support at https://<myapp>.mybluemix.net
	
/*server.listen(port, function() {
  // eslint-disable-next-line
  console.log('Server running on port: %d', port);
});*/
