Xtify Node Module
=================================================
This is a module that talks to Xtify to send out push notification
Currently it is still extremely simple, only able to send plain text notification with badge count.

Usage Examples
==============
	var xtify = require('xtify');
	xtify.setup("API_KEY_HERE", "APP_KEY_HERE");
	xtify.push(["XID_HERE"],"SUBJECT_HERE", "MESSAGE_HERE",BADGE_COUNT, function(error)
	{
		if(!error)
		{
			//success!
		}
	});

Changes
==============
- 0.0.3: added badge count
- 0.0.4: push method has a callback with error object. if error is nil means it is success. Updated read me.

