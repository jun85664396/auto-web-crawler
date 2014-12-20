auto-web-crawler
================

##Installation

    npm install awc
    
##Usage

    var awc = require("awc");
    
    var getIndex = function(callback){
    
    	//Write your code
    	//ex) var idx = [8911,8912,8913,8914,8915]; //url Suffixes.
  
    	callback(idx);
    };
    
    awc.run({
	    "minute":1, // If Minute Parameter is null,Minute Default Value is 60.
	    "url":"https://github.com/joyent/node/issues/", //Idx Default Prefix.
	    "idxFunc":getIndex, //Index List
	    "rule":{"title":"$('.gh-header-title').text().trim()"}, //Jquery Selector Rule.
	    "done":function(res){
	    
    		console.log(res); //Return Value { '0': { title: 'events.markdown document improvements\n #8911' } ...}
    		//Write your code
    		
	    }
    });
    
##Test
    
    $ node test.js
    	
##Parameter

+ minute `int` 
+ url `String`
+ idxFunc `Function` // Require parameter callback
+ rule `Hash`

#use
+ jsdom
+ fs
