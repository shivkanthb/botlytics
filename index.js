
var bot_token;
var request = require("request");

module.exports = { 
    
    incoming : function(dict, callback) {
        dict.kind = "incoming";
        var options = { 
            method: 'POST',
            url: 'http://www.botlytics.co/api/v1/messages?token='+bot_token,
            json: true,
            body: {
                message: dict
            }
        };
        request(options, function (err, res, body) {
            callback(err, res, body);
        });
    },

    outgoing: function(dict, callback) {
        dict.kind = "outgoing";
        var options = { 
            method: 'POST',
            url: 'http://www.botlytics.co/api/v1/messages?token='+bot_token,
            json: true,
            body: {
                message: dict
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






