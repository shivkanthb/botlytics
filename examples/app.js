
var botlytics = require('../index');

var bot_token="";  //include your bot token here

botlytics.setBotToken(bot_token);

botlytics.incoming("test js testing ","user_123", function(err,res, body){
    if(err) throw Error(err);
    console.log(body);
});


botlytics.outgoing("Thanks for trying Botlytics test","user_123", function(err,res, body){
    if(err) throw Error(err);
    console.log(body);
});

