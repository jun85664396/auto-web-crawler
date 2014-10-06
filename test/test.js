var atc = require("../");
var getIndex = function(callback){
	var idx = [54];
	callback(idx);
}
atc.run({
	"time":44444,
	"url":"http://egleye.co.kr/community/notice_view?idx=",
	"idxFunc":getIndex,
	"rule":{"contents":"$('html').html()"},
	"done":function(res){
		console.log(res);
	}
});
