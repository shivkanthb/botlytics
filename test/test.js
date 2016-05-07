'use strict';

var chai = require('chai');
var expect = chai.expect;

var botlytics = require('../index');
var bot_token = ""; //bot token comes here

describe('botlytics', function() {
  
    it('should return an object for incoming', function() {
       botlytics.setBotToken('f8695b4d4c9e4107');
       var res = botlytics.incoming("hello","user_123", function(err, resp,body) {
           expect(res.body).to.have.property('text'); 
       });    
    });
    
      it('should return an object for outgoing', function() {
       botlytics.setBotToken(bot_token);
       var res = botlytics.outgoing("hello hooman","user_123", function(err, resp,body) {
           expect(res.body).to.have.property('text'); 
       });    
    });
    
});