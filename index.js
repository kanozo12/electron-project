const fs = require('fs');
const { app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
let client = require('cheerio-httpcli');


const defaultProps = {
    width:1280,
    height:720,
    resizeable:true,
    webPreferences:{
        nodeIntegration:true,
        nativeWindowOpen: true,
        nodeIntegrationInWorker: true
    }
    // icon: path.join(__dirname, 'images/icon.ico')
};

let win = null;

ipcMain.on("openDev", (e, arg)=>{
    win.webContents.openDevTools();
});

ipcMain.on("loadData", (e, arg)=>{
    let url = `https://coinmarketcap.com/currencies/bitcoin/historical-data/?start=${arg.s}&end=${arg.e}`;
    let param = {};

    client.fetch(url, param, function (err, $, res) {
        if (err) {
            e.reply("dataLoad", {error:true, msg:'데이터 파싱중 오류 발생'});
            return;
        }

        let resData = [];
        $(".cmc-tab-historical-data .cmc-table__table-wrapper-outer:nth-child(3) .cmc-table-row").each(function (post) {
            let t = $(this).children("td").eq(1).text();
            resData.push(t);
        });
        console.log(resData);
        e.reply("dataLoad", {error:false, data:resData});
    });

});

function createWindow(){
    win = new BrowserWindow(defaultProps);
    win.setMenu(null);
    win.loadFile("index.html");

    win.on("closed", ()=>{
        win = null;
    });
    win.webContents.openDevTools();
};

app.on("ready", ()=>{
    createWindow();
});