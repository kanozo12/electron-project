var client = require('cheerio-httpcli');

let url= 'https://coinmarketcap.com/currencies/bitcoin/historical-data/?start=20190101&end=20191125';
let param = {};

client.fetch(url, param, function(err, $, res) {
    if(err) {
        console.log(err);
        return;
    }

    $(".cmc-tab-historical-data .cmc-table__table-wrapper-outer:nth-child(3) .cmc-table-row").each(function(post) {
        let t = $(this).children("td").eq(1).text();
        console.log(t);
    });
});


// request('https://api.bithumb.com/public/ticker/All', (err, res, body) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     let json = JSON.parse(body);
//     // let obj = JSON.parse(json);

//     console.log(json.data.BTC.opening_price);
//     console.log(json.data.ETH.opening_price);

// });

