var fs = require('fs');
var colors = require('colors');

fs.readdir('../18 Node-npm','utf-8', function (err, files) {
	console.log('Pobieram dane'.green);

	fs.writeFile('./tekst.txt', ' Wszystko chodzi jak należy!', function (err) {
		if (err) throw err;
		console.log('Zapisano!'.gray);

	});
});
