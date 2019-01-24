import { app, BrowserWindow, screen } from 'electron';

import * as url from 'url';
import * as dev from 'electron-is-dev';

let window: BrowserWindow;

function newWindow(): void {
  window = new BrowserWindow({
    height: screen.getPrimaryDisplay().size.height / 2,
    width: 600,
    show: false,
    frame: false,
    webPreferences: {
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
}

app.on('ready', () => {
  newWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'win32') {
    app.quit();
  }
});
