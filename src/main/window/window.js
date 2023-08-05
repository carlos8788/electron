const { BrowserWindow } = require('electron');

const createWindow = async () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadFile('src/renderer/html/index.html');
};

module.exports = createWindow;
