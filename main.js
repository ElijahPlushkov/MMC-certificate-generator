const { app, BrowserWindow, ipcMain } = require('electron/main');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1440,
        height: 800,
        icon: path.join(__dirname, 'mmc-logo.png'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

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