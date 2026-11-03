const { app, BrowserWindow } = require("electron");
const path = require("node:path");

const APP_ID = "com.valpresent.desktop";
const INDEX_FILE = path.join(__dirname, "..", "index.html");

app.setAppUserModelId(APP_ID);

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: "#0b111b",
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  mainWindow.once("ready-to-show", () => mainWindow.show());
  mainWindow.loadFile(INDEX_FILE);

  // Keep the app's existing window.open(...?output=1) behavior.
  // Electron creates Project Output as a second native desktop window.
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    try {
      const target = new URL(url);
      const isLocalApp = target.protocol === "file:";
      const isProjectOutput = target.searchParams.get("output") === "1";

      if (isLocalApp && isProjectOutput) {
        return {
          action: "allow",
          overrideBrowserWindowOptions: {
            width: 1280,
            height: 720,
            minWidth: 640,
            minHeight: 360,
            backgroundColor: "#000000",
            autoHideMenuBar: true,
            webPreferences: {
              contextIsolation: true,
              nodeIntegration: false,
              sandbox: true
            }
          }
        };
      }
    } catch (error) {
      console.error("Unable to open requested window:", error);
    }

    // Do not allow arbitrary popups from the app.
    return { action: "deny" };
  });

  return mainWindow;
}

app.whenReady().then(() => {
  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
