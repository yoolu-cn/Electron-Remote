const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 300,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    if (isDev) {
        win.loadURL('http://localhost:3000');
    } else {
        win.loadFile(path.resolve(__dirname, '../renderer/src/main/dist/index.html'));
    }
    
}

app.whenReady().then(() => {
    createWindow();
});