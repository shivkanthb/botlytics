'use strict';

var chai = require('chai');
var expect = chai.expect;

var botlytics = require('../index');
var bot_token = "f8695b4d4c9e4107"; //bot token comes here

describe('botlytics', function() {
  
    it('should return an object for incoming', function() {
       botlytics.setBotToken(bot_token);
       var dict = {
          text: "hello",
          conversation_id: "user_123",
          sender_id: "sender1",
          platform: "kik"
       };
       var res = botlytics.incoming(dict, function(err, resp,body) {
          expect(res.body).to.have.property('text'); 
       });    
    });
    
      it('should return an object for outgoing', function() {
       botlytics.setBotToken(bot_token);
       var dict = {
          text: "hello hooman",
          conversation_id: "user_123",
          sender_id: "sender1",
          platform: "kik"
       };
       var res = botlytics.outgoing(dict, function(err, resp,body) {
           expect(res.body).to.have.property('text');  
       });    
    });
      
});
