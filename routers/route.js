const { text } = require('express')
const express = require('express')
const router = new express.Router()
const app = express()

var fs = require('fs')
ext = '.TXT'
pic = '.JPG'
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
    res.end(); 
  });
router.get('/Linked-List/:file/pic', (req, res) => {
      const name = req.params.file
      fs.readFile('./DSA/Linked-List/'+name+'-Pic'+pic, function (err, data) {
        if (err) throw err;
        res.write(data);
        
      });
      res.end(); 
});
router.get('/Array/:file', (req, res) => {
  const name = req.params.file
  
    fs.readFile('./DSA/Array/'+name+ext,'utf8',function(err,data) {
        if(err) throw err;
         res.send(data);
        
    });
    res.end(); 
  });
router.get('/Array/:file/pic', (req, res) => {
      const name = req.params.file
      fs.readFile('./DSA/Array/'+name+'-Pic'+pic, function (err, data) {
        if (err) throw err;
        res.write(data);
     
      });
      res.end(); 
});
router.get('/Stack/:file', (req, res) => {
  const name = req.params.file
  
    fs.readFile('./DSA/Stack/'+name+ext,'utf8',function(err,data) {
        if(err) throw err;
         res.send(data);
         
    });
    res.end(); 
  });
router.get('/Stack/:file/pic', (req, res) => {
      const name = req.params.file
      fs.readFile('./DSA/Stack/'+name+'-Pic'+pic, function (err, data) {
        if (err) throw err;
        res.write(data);
       
      });
      res.end(); 
});
router.get('/Queue/:file', (req, res) => {
  const name = req.params.file
  
    fs.readFile('./DSA/Queue/'+name+ext,'utf8',function(err,data) {
        if(err) throw err;
         res.send(data);
        
    });
    res.end(); 
  });
router.get('/Queue/:file/pic', (req, res) => {
      const name = req.params.file
      fs.readFile('./DSA/Queue/'+name+'-Pic'+pic, function (err, data) {
        if (err) throw err;
        res.write(data);
        
      });
      res.end(); 
});
router.get('/Tree/:file', (req, res) => {
  const name = req.params.file
  
    fs.readFile('./DSA/Tree/'+name+ext,'utf8',function(err,data) {
        if(err) throw err;
         res.send(data);
        
    });
    res.end(); 
  });
router.get('/Tree/:file/pic', (req, res) => {
      const name = req.params.file
      fs.readFile('./DSA/Tree/'+name+'-Pic'+pic, function (err, data) {
        if (err) throw err;
        res.write(data);
       
      });
      res.end(); 
});
router.get('/Sorting/:file', (req, res) => {
  const name = req.params.file
  
    fs.readFile('./DSA/Sorting/'+name+ext,'utf8',function(err,data) {
        if(err) throw err;
         res.send(data);
       
    });
    res.end(); 
  });
router.get('/Sorting/:file/pic', (req, res) => {
      const name = req.params.file
      fs.readFile('./DSA/Sorting/'+name+'-Pic'+pic, function (err, data) {
        if (err) throw err;
        res.write(data);
       
      });
      res.end(); 
});
router.get('/String/:file', (req, res) => {
  const name = req.params.file
  
    fs.readFile('./DSA/String/'+name+ext,'utf8',function(err,data) {
        if(err) throw err;
         res.send(data);
        
    });
    res.end(); 
  });
router.get('/String/:file/pic', (req, res) => {
      const name = req.params.file
      fs.readFile('./DSA/String/'+name+'-Pic'+pic, function (err, data) {
        if (err) throw err;
        res.write(data);
        
      });
      res.end(); 
});
router.get('/Recursion/:file', (req, res) => {
  const name = req.params.file
  
    fs.readFile('./DSA/Recursion/'+name+ext,'utf8',function(err,data) {
        if(err) throw err;
         res.send(data);
         
    });
    res.end(); 
  });
router.get('/Recursion/:file/pic', (req, res) => {
      const name = req.params.file
      fs.readFile('./DSA/Recursion/'+name+'-Pic'+pic, function (err, data) {
        if (err) throw err;
        res.write(data);
       
      });
      res.end(); 
});
router.get('/Matrix/:file', (req, res) => {
  const name = req.params.file
  
    fs.readFile('./DSA/Matrix/'+name+ext,'utf8',function(err,data) {
        if(err) throw err;
         res.send(data);
        
    });
    res.end(); 
  });
router.get('/Matrix/:file/pic', (req, res) => {
      const name = req.params.file
      fs.readFile('./DSA/Matrix/'+name+'-Pic'+pic, function (err, data) {
        if (err) throw err;
        res.write(data);
        
      });
      res.end(); 
});
router.get('*', (req, res) => {
  res.send('404 Error')
});

module.exports = router
