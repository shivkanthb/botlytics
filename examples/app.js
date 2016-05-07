
var botlytics = require('../index');

var bot_token="";  //include your bot token here

botlytics.setBotToken(bot_token);

botlytics.incoming("callback testing123","user_123", function(err,res, body){
    // console.log("Callback should work hopefully");
    if(err) throw Error(err);
    console.log(body);
});


// botlytics.outgoing("Thanks for trying Botlytics","user_123", function(err,res, body){
//     // console.log("Callback should work hopefully");
//     if(err) throw Error(err);
//     console.log(body);
// });


// console.log(botlytics.test());