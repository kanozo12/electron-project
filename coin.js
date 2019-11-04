  
const request = require('request');



request('https://api.bithumb.com/public/ticker/All', (err, res, body)=>{
    if(err){
        console.log(err);
        return;
    }
    let json = JSON.parse(body);
    // let obj = JSON.parse(json);

    console.log(json.data.BTC.opening_price);

});