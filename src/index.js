import { app, BrowserWindow } from 'electron'
import { join } from 'path'

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: join(__dirname, '/preload.js')
    }
  })

  mainWindow.loadFile('./public/index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
