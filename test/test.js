var awc = require("../");
var getIndex = function(callback){
	var idx = [8911,8912,8913,8914,8915];
	callback(idx);
};
var start = new Date();
awc.run({
	"minute":1,
	"url":"https://github.com/joyent/node/issues/",
	"idxFunc":getIndex,
	"rule":{"title":"$('.gh-header-title').text().trim()"},
	"done":function(res){
		var end = new Date();
		console.log((end.getTime()-start.getTime())/1000);
		console.log(res);
	}
});
