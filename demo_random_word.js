const http = require ("http");
const fs = require("fs")



http
    .createServer((req,res)=>{
        
        fs.readFile("words.json" ,(err,data) =>{
            if (err) throw(err);

            const wordsArray = JSON.parse(data)
            var word = JSON.stringify(wordsArray[Math.floor(Math.random()*wordsArray.length)])
            res.write(word);
            res.end();
        
        })
    
        } )
        
   

    .listen(3000);
    console.log("listening")