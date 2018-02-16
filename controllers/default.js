'use strict';

const fs = require('fs');

exports = module.exports = function (req, res, cb) {
	const	path	= process.cwd() + '/public/views/';

	res.data = {'title': 'infoview'};

	fs.readdir(path, function(err, items) {
		res.data.views = items;
		cb();
	});
};
