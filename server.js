let http = require('http');
let fs = require('fs');
let url = require('url');
let page = "index.html";

let server = http.createServer(function (request, response) {

    let q = url.parse(request.url, true).query;
    console.log(q.username);

    page = "index.html";
    if ( (q.username !== undefined) && (q.password !== undefined)){
        if (q.username === "admin"  && q.password === "admin"){
            page = "mainpage.html";
        }else{
            page = "accessdenied.html";
        }
    }

    fs.readFile(page, function (error, content) {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.end(content, 'utf-8');
    });


});
server.listen(8080);
console.log('Server running at http://127.0.0.1:8080/');