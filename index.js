var dotenv = require('dotenv');
dotenv.load();

var bot_token=process.env.BOT_TOKEN;

var request = require("request");

module.exports = {
    
incoming : function(input, conv_id, callback) {
    
    var options = { 
    method: 'POST',
    url: 'http://www.botlytics.co/api/v1/messages?token='+bot_token,
    json: true,
    body: {
        message: {
            text: input,
            kind: "incoming",
            conversation_identifier: conv_id
        }
    }
};
    
    request(options, function (err, res, body) {
        // if (err) throw new Error(err);
        // console.log(body);
        callback(err, res, body);
    });
    
},

outgoing: function(output, conv_id, callback) {
    
    var options = { 
    method: 'POST',
    url: 'http://www.botlytics.co/api/v1/messages?token='+bot_token,
    json: true,
    body: {
        message: {
            text: output,
            kind: "outgoing",
            conversation_identifier: conv_id
        }
    }
};
    
    request(options, function (err, res, body) {
        // if (err) throw new Error(err);
        // console.log(body);
        callback(err, res, body);
    });
    
},

test: function(){
    return "hola";
}

};

// module.exports.incoming=incoming;
// module.exports.outgoing=outgoing;





