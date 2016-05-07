Botlytics
=========

Node module for Botlytics API.

Visit the official HTTP docs [here](http://botlytics.api-docs.io/)

## Installation

  `npm install botlytics`

## Usage

    var botlytics = require('botlytics');
    
    var bot_token ="";  // Include your bot token here. 
    
    botlytics.setBotToken(bot_token);  
  
  
  This sets the bot token for our function calls.
  
##### Incoming Message
    
    botlytics.incoming(<message>,<conversation_id>, function(err, response, body){} );

##### Outgoing Message
    
     botlytics.outgoing(<message>,<conversation_id>, function(err, response, body){} );
    
        
## Example

    var botlytics = require('botlytics');

    botlytics.setBotToken('XXXXXXXXXXXX');

    botlytics.incoming("Hello!","test_user", function(err,res, body){
        if(err) throw Error(err);
        console.log(body);
    });

 This outputs :
 
    {
      "text": "Hello!",
      "kind": "incoming",
      "created_at": "2016-05-07T04:42:58.129Z"
    }
    
## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.