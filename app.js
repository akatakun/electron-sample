'use strict';

const electron = require('electron');
const app = electron.app; // Module to control application life.
const BrowserWindow = electron.BrowserWindow; // Module to create native browser window.

let mainWindow;

app.on('window-all-closed', function() {
  // OS XではApplicationがCmt + Qなどで完全に終了するまではApplicationとMenu Barは残り続けるのが一般的
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 300,
    'min-width': 500,
    'min-height': 200,
    'accept-first-mouse': true,
    'title-bar-style': 'hidden',
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  //mainWindow.openDevTools();

  mainWindow.on('closed', function() {
    // Multi Windowに対応している場合はArrayに格納されているWindow Objectの参照を解除
    mainWindow = null;
  });
});
