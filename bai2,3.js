var http = require('http');
var fs = require('fs');


fs.appendFileSync('thongtin.txt', '\nVuvanquyen');
console.log("Oke:",
  fs.readFileSync('thongtin.txt', "utf8"));

fs.renameSync('thongtin.txt','mssv.txt');
console.log('Reanme thanh cong');


http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  if(req.url=='/createfile'){
    fs.writeFile('thongtin.txt', 'vuvanquyen', function (err) {
        if (err) throw err;
        console.log('Saved!');
        res.write('Da tao file');
        res.end();
      });
  }
}).listen(8086);