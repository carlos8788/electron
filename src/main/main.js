const { app, BrowserWindow } = require('electron')
const createWindow = require('./window/window.js')
const connectDatabase = require('./database/connect.js')
const setupIPC = require('./ipc/avion.ipc.js')

require('electron-reload')

app.whenReady().then(async () => {
    try {
        await connectDatabase();
        createWindow()
    } catch (err) {
        console.log('Error: ' + err)
    }

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

setupIPC();