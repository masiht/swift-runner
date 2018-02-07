var express    = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var rn = require('random-number');
var exec = require('child_process').exec;
var app = express();

app.listen(8081);
app.use(bodyParser.json());
app.use(bodyParser.text());

app.post("/swiftrunner/playground", function(req, res) {

	const source_code = req.body;
    const rand = rn.generator({
        min:  1,
        max:  1000,
        integer: true
    })()

    // FIXME: add a directory to store source code
    // FIXME: check if the number already exist
    var filename = rand + ".swift"

    fs.writeFile(filename, source_code, function(error) {
        if (error) { return console.log(error); }

        var compile_script = exec('swift ' + filename, function(error, stdout, stderr) {
            if (error !== null) { console.log(error); }
            res.send(stdout);
        });
    });
});
