let webpackFile = require('./webpack/webpack.file.conf');
const port = 3001;
const defIndex = 'index.html';

const http = require('http'), fs = require('fs'), url = require('url'), path = require('path'), os = require('os'),
    mine = { 'css': 'text/css', 'gif': 'image/gif', 'html': 'text/html', 'ico': 'image/x-icon', 'xml': 'text/xml', 'jpeg': 'image/jpeg', 'jpg': 'image/jpeg', 'js': 'text/javascript', 'json': 'application/json', 'pdf': 'application/pdf', 'png': 'image/png', 'svg': 'image/svg+xml', 'swf': 'application/x-shockwave-flash', 'tiff': 'image/tiff', 'txt': 'text/plain', 'wav': 'audio/x-wav', 'wma': 'audio/x-ms-wma', 'wmv': 'video/x-ms-wmv'},
    clientIP = (() => {
        let nets = os.networkInterfaces();
        for (let a in nets) {
            let ifaces = nets[a];
            for (let o in ifaces) {
                if (ifaces[o].family == 'IPv4' && !ifaces[o].internal) return ifaces[o].address;
            }
        }
        return '';
    })();
http.createServer(function (req, res) {
    const readHtml = name => {
        console.log(`++++ request: ${name}`);
        let status = 200, exist = fs.existsSync(name), data;
        if(exist) data = fs.readFileSync(name, 'utf-8');
        else  data = `file:${name} not exist!`, status = 404;
        res.writeHead(status, {'Content-Type': 'text/html'});
        res.end(data);
        console.log(` ...done`);
    };
    const readBinary = name =>{
        console.log(`++++ request: ${name}`);
        let exist = fs.existsSync(name);
        if(exist){
            res.writeHead(200, {'Content-Type': mine[ext] || 'text/plain'});
            res.end(fs.readFileSync(name, 'binary'), 'binary');
        }else{
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end(`file:${name} not exist!`);
        }
        console.log(` ...done`);
    };
    let pathname = url.parse(req.url).pathname, realPath = path.join(webpackFile.proDirectory, pathname), ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    if(pathname==='/') readHtml(path.join(webpackFile.proDirectory, defIndex));
    else if(ext === 'html') readHtml(realPath);
    else if(ext in mine) readBinary(realPath);
    else{
        console.log(`++++ request: / => ${realPath}`);
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('no data');
        console.log(` ...done`);
        res.end();
    }

}).listen(port, '0.0.0.0', function () {
    console.log('===== Server running: localhost => http://%s:%s =============================================', clientIP || 'localhost', port);
});