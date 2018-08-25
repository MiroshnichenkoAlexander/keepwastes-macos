const electron = require('electron')
const url = require('url')
const path = require('path')

const {app, BrowserWindow} = electron

let MainWindow

app.on('ready', function() {
    MainWindow = new BrowserWindow({})
    MainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'MainWindow.html'),
        protocol: 'file', 
        slashes: true
    }))
})

