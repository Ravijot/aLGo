const { text } = require('express')
const express = require('express')
const router = new express.Router()
const app = express()

var fs = require('fs')
ext = '.txt'
pic = '.jpg'
router.get('/',(req,res) => {
    res.sender('./public/index.html')
})
router.get('/common',(err,data) => {
  fs.readFile("common.html",function(req,res){
    if(err){
        console.log("error occured");
    }
    res.writeHead(200, {'Content-Type': 'text/html','Content- Length':data.length});
    res.write(data);  
    res.end();     
});

});
router.get('/Linked-List/:file', (req, res) => {
  const name = req.params.file
  
    fs.readFile('./DSA/Linked-List/'+name+ext,'utf8',function(err,data) {
        if(err) throw err;
         res.send(data)
    });
  });
router.get('/Linked-List/:file/pic', (req, res) => {
      const name = req.params.file
      fs.readFile('./DSA/Linked-List/'+name+'-Pic'+pic, function (err, data) {
        if (err) throw err;
        res.write(data);
      });
});
router.get('/Array/:file', (req, res) => {
  const name = req.params.file
  
    fs.readFile('./DSA/Array/'+name+ext,'utf8',function(err,data) {
        if(err) throw err;
         res.send(data)
    });
  });
router.get('/Array/:file/pic', (req, res) => {
      const name = req.params.file
      fs.readFile('./DSA/Array/'+name+'-Pic'+pic, function (err, data) {
        if (err) throw err;
        res.write(data);
      });
});
router.get('/Stack/:file', (req, res) => {
  const name = req.params.file
  
    fs.readFile('./DSA/Stack/'+name+ext,'utf8',function(err,data) {
        if(err) throw err;
         res.send(data)
    });
  });
router.get('/Stack/:file/pic', (req, res) => {
      const name = req.params.file
      fs.readFile('./DSA/Stack/'+name+'-Pic'+pic, function (err, data) {
        if (err) throw err;
        res.write(data);
      });
});
router.get('*', (req, res) => {
  res.send('404 Error')
});
process.on('uncaughtException', err => {
  console.log(`Uncaught Exception: ${err.message}`)
  process.exit(1)
})
module.exports = router
