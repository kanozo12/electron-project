const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database("real.sqlite");
const execSync = require('child_process').execSync;

const http = require('http');
const express = require('express');
const hand = require('express-handlebars');
const path = require('path');
const fs = require('fs');

const app = express();

  
const request = require('request');

app.engine('handlebars', hand({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('port', 13000);
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {

    let labelData = [];
    let valueData = [];

    request('https://api.bithumb.com/public/ticker/All', (err, res, body) => {
        if (err) {
            console.log(err);
            return;
        }
        let json = JSON.parse(body);
        // let obj = JSON.parse(json);

        console.log(json.data.BTC.opening_price);

        labelData.push(json.data.BTC.opening_price);
        valueData.push(json.data.BTC.opening_price);
    });

    res.render('home', { 'labels': labelData, 'values': valueData });
});

http.createServer(app).listen(app.get('port'), () => {
    console.log('서버 실행중 : ' + app.get('port'));
});
