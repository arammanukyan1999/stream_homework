var fs = require('fs');
var {Readable} = require('stream');
var moment = require('moment');
let Timer;
class Reader extends Readable{
    _read(){
        Timer = setTimeout(()=>{
            if (true){
            this.push(moment(new Date()).format('LTS'));
            }
        },1000);
       }     
    }
let readStream= new Reader();
let writeStream = fs.createWriteStream('data.txt');
readStream.pipe(writeStream);
process.stdin.on("date",(chunk)=>{
     readStream.push(chunk),1000
});