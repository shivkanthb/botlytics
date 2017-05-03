
var botlytics = require('../index');

var bot_token="";  //include your bot token here

botlytics.setBotToken(bot_token);

var dict = {
	  text: "Sup",
	  conversation_identifier: "user_123",
	  sender_identifier: "sender1",
	  platform: "kik"
};
botlytics.incoming(dict, function(err,res, body){
    if(err) throw Error(err);
    console.log(body);
});


var dict1 = {
	  text: "sup Hooman",
	  conversation_identifier: "user_123",
	  sender_identifier: "sender1",
	  platform: "kik"
};
botlytics.outgoing(dict1, function(err,res, body){
    if(err) throw Error(err);
    console.log(body);
});

