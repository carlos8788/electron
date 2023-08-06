const { BrowserWindow } = require('electron');

const createWindow = async () => {
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        resizable: false,
        maximizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadFile('src/renderer/html/index.html');
};

module.exports = createWindow;
