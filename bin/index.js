"use strict";

var _electron = require("electron");

var _path = require("path");

var mainWindow;

function createWindow() {
  mainWindow = new _electron.BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: (0, _path.join)(__dirname, '/preload.js')
    }
  });
  mainWindow.loadFile('./public/index.html');
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

_electron.app.on('ready', createWindow); // Quit when all windows are closed.


_electron.app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') _electron.app.quit();
});

_electron.app.on('activate', function () {
  if (mainWindow === null) createWindow();
});