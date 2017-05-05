'use strict';

var chai = require('chai');
var expect = chai.expect;

var botlytics = require('../index');
var bot_token = "f8695b4d4c9e4107"; //bot token comes here

describe('botlytics', function() {
  
    it('should return an object for incoming', function(done) {
       botlytics.setBotToken(bot_token);
       var dict = {
          text: "hello",
          conversation_identifier: "user_123",
          sender_identifier: "sender1",
          platform: "kik"
       };
       botlytics.incoming(dict, function(err, resp,body) {
          expect(body).to.have.property('text'); 
          expect(body).to.have.property('kind');
          expect(body).to.have.property('created_at');  
          done();
       });    
    });
    
      it('should return an object for outgoing', function(done) {
       botlytics.setBotToken(bot_token);
       var dict = {
          text: "hello hooman",
          conversation_identifier: "user_123",
          sender_identifier: "sender1",
          platform: "kik"
       };
       botlytics.outgoing(dict, function(err, resp,body) {
           expect(body).to.have.property('text'); 
           expect(body).to.have.property('kind');
           expect(body).to.have.property('created_at'); 
           done();
       });    
    });

});
