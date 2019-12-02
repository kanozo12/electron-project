import { ipcRenderer, shell } from 'electron';

export default class App {
    constructor(){
        this.loadBtn = document.querySelector("#btnLoad");

        this.addEvent();
    }

    addEvent(){
        this.loadBtn.addEventListener("click", this.loadData.bind(this));
        ipcRenderer.on("dataLoad", this.handleData.bind(this));
        
        
        
        window.addEventListener("keydown", (e) => {
            if (e.ctrlKey && e.key.toLowerCase() == "q") {
                ipcRenderer.send("openDev");
            }
        });
    }

    loadData(){
        ipcRenderer.send("loadData", {s:'20190101', e:'20191201'});
    }

    handleData(e, arg){
        console.log(arg);
    }
}