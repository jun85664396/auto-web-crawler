var jsdom = require('jsdom'),
fs = require("fs"),
jquery = fs.readFileSync(__dirname+"/jquery.js", "utf-8"),
time,
url,
idxFunc,
rule = {},
done,
repeat;
var mv = function(){
	idxFunc(function(res){
		var idx = res;
		var stack = {};
		idx.forEach(function(val,index){
			jsdom.env({
				"url":url+val,
				"src":[jquery],
				"done":function(errors,window){
					try{
						var $ = window.jQuery;
						var	temp = {};
						for(var key in rule){
							temp[key] = eval(rule[key]);
						}
						window.close();
						stack[index] = temp;
						if(idx.length == Object.keys(stack).length){
							done(stack);
							clearTimeout(repeat);
							repeat = setTimeout(mv,time);
						}
					}catch(e){
						stack[index] = e;
						console.error(e);
					}
				}
			});
		});
	});
};
exports = function(opt){
	time = typeof opt.minute !== 'undefined' ? 60000 * opt.minute : 60000*60;
	url = opt.url;
	idxFunc = opt.idxFunc;
	rule = opt.rule;
	done = opt.done;
	mv();
};
module.exports.run = exports;
