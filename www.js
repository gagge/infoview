const App = require('larvitbase-www');

let app;

app = new App({
	'lBaseOptions':	{'httpOptions': 8001},	// sent to larvitbase
	'routerOptions':	{},	// sent to larvitrouter
	'reqParserOptions': {}, // sent to larvitReqParser
});

app.start(function (err) {
	if (err) throw err;
});
