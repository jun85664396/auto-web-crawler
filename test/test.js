var atc = require("../");
var getIndex = function(callback){
	var idx = [""];
	callback(idx);
}
atc.run({
	"time":10000,
	"url":"https://github.com/jun85664396/auto-web-crawler",
	"idxFunc":getIndex,
	"rule":{"title":"$('title').text()"},
	"done":function(res){
		console.log(res);
	}
});
