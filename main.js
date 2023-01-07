// const path =require('path');
// const url = require('url');
const {app, BrowserWindow} = require('electron');
let win;
function creqteWindow(){
    win = new BrowserWindow({
        width: 800, 
        height: 600, 
        title: "1111",
        show:false,
        backgroundColor:"#ffffff",
        webPreferences:{
            nodeIntegration: true
        },
        icon: __dirname+"/img/images.png"
        });
    win.loadFile('index.html');
    win.once("ready-to-show", win.show);
    //win.webContents.openDevTools();
}
app.whenReady().then(creqteWindow);
app.on('window-all-closed',()=>{
     if(process.platform!=='darwin'){
        app.quit();
     }
});
app.on('activate',()=>{
    if(BrowserWindow.getAllWindows().length===0){
        creqteWindow();
    }
});