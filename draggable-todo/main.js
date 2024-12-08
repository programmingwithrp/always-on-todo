const { app, BrowserWindow } = require('electron');
let win;

app.on('ready', () => {
  win = new BrowserWindow({
    width: 310,
    height: 400,
    frame: false, // No default window controls
    transparent: false, // Transparency for the fade effect
    alwaysOnTop: true, // Keeps the window on top
    webPreferences: {
      nodeIntegration: true,
    },
    backgroundColor: '#f0f0f0',
    resizable: false, // Prevents resizing
  });

  win.loadFile('index.html');
  win.setIgnoreMouseEvents(false); // Allows interaction
  win.on('blur', () => {
    win.webContents.insertCSS('html { filter: brightness(0.90); }');
  });
  
  win.on('focus', () => {
    win.webContents.insertCSS('html { filter: brightness(1); }');
  });
  
});

