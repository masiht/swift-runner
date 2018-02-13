var express    = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var rn = require('random-number');
var exec = require('child_process').exec;
var config = require('./config.json');
var app = express();

app.listen(8081);
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Compile-Version");
    next();
});

app.post("/swiftrunner/playground", function(req, res) {

	const source_code = req.body;
    // TODO: pass this to compile with designated version
    const compile_version = req.headers['compile-version']
    const rand = rn.generator({min:  1, max:  1000, integer: true})()

    // FIXME: check if the number already exist
    var source_file = config.storage_directory + "/" + rand + ".swift"

    fs.writeFile(source_file, source_code, function(error) {
        if (error) {
            res.sendStatus(500);
            return console.log(error);
        }

        var compile_script = exec('swift ' + source_file, function(error, stdout, stderr) {
            if (error !== null) {
                res.send(String(error));
                return console.log(error);
            }
            res.send(stdout);
        });
    });
});
