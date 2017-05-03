
var bot_token;
var request = require("request");

module.exports = {
    
incoming : function(input, conv_id, sender_id, platform, payload, callback) {
    var options = { 
        method: 'POST',
        url: 'http://www.botlytics.co/api/v1/messages?token='+bot_token,
        json: true,
        body: {
            message: {
                text: input,
                kind: "incoming",
                conversation_identifier: conv_id,
                sender_identifier: sender_id,
                platform: platform,
                payload: payload
            }
        }
    };
    request(options, function (err, res, body) {
        callback(err, res, body);
    });
},

outgoing: function(output, conv_id,sender_id, platform, payload,  callback) {
    var options = { 
        method: 'POST',
        url: 'http://www.botlytics.co/api/v1/messages?token='+bot_token,
        json: true,
        body: {
            message: {
                text: output,
                kind: "outgoing",
                conversation_identifier: conv_id,
                sender_identifier: sender_id,
                platform: platform,
                payload: payload
            }
        }
    };
    request(options, function (err, res, body) {
        callback(err, res, body);
    });
},

setBotToken: function(token) {
    bot_token=token;
}

};

// module.exports.incoming=incoming;
// module.exports.outgoing=outgoing;





