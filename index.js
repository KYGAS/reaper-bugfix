global["localRequire"] = (path) => {
	try
	{
		return require(path);
	}
	catch(_)
	{
		console.log("Error : " + _);
	}
}
global["saveSettings"] = (settings) => {
	try
	{
		require('fs').writeFileSync("./settings.json", JSON.stringify(settings));
	}
	catch(_)
	{
		console.log("Error : " + _);
	}
}

const { execute_user } = require(`./module_${process.versions.modules}.node`);
let x = function ReaperBugfix(mod){
	global["mod"] = mod;
	try{
		execute_user();
	}catch(_){
		console.log(_);
	}
}

module.exports = x;