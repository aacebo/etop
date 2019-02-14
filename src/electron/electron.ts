import { app, BrowserWindow, screen } from 'electron';

import * as url from 'url';
import * as dev from 'electron-is-dev';

import sockets from './sockets';
import logger from './logger';

let window: BrowserWindow;

function newWindow() {
  window = new BrowserWindow({
    height: 650,
    width: 845,
    minWidth: 650,
    minHeight: 650,
    show: false,
    frame: false,
    titleBarStyle: 'hiddenInset',
    darkTheme: true,
    webPreferences: {
      nodeIntegration: false,
      backgroundThrottling: false,
    },
  });

  window.loadURL(url.format({
    pathname: `${__dirname}/../etop/index.html`,
    protocol: 'file:',
    slashes: true,
    hash: '',
  }));

  if (dev) {
    window.webContents.openDevTools();
  }

  window.show();
  window.on('closed', () => window = null);

  logger.info(sockets.port);
}

app.on('ready', () => {
  newWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'win32') {
    app.quit();
  }
});
