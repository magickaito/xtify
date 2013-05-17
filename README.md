Xtify Node Module
=================================================
This is a module that talks to Xtify to send out push notification
Currently it is still extremely simple, only able to send plain text notification with badge count.

Usage Examples
==============
var xtify = require('xtify');
xtify.setup("API_KEY_HERE", "APP_KEY_HERE");
xtify.push(["XID_HERE"],"subject", "message here",3);

Changes
==============
0.0.3: added badge count

