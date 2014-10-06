auto-web-crawler
================

##Installation

    npm install auto-web-crawler
    
##Usage

    var awc = require(auto-web-crawler); 
    
    var time = 60*24 // 1 Day
    
    var url = "https://github.com/search?q=node&type=Repositories&utf8=%E2%9C%93&p=" // Ignore page index
    
    var idxFunc = function(callback){ // Require callback parameter
      var idx = [1]; // https://github.com/search?q=node&type=Repositories&utf8=%E2%9C%93&p=1
      /*  You made function  */
      callback(idx); // callback parameter Idx Array
    };
    
    var rule = {"title":"$('title').text()"}; // { key : jquerySelector }
    
    awc.run({
      "time":time, 
      "url":url, 
      "idxFunc":idxFunc,
      "rule":rule,
      "done":function(response){
        console.log(response) // {"title" : "Search · node"}
        // Response => rule { Key : SelectorResult }
      }
    });
    
##Parameter

+ time `int` //
+ url `String` //
+ idxFunc `Function` // Require parameter callback
+ rule `Hash` //
