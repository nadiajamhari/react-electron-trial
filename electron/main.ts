const {
  app,
  ipcMain,
  ipcRenderer,
  BrowserWindow,
  screen: electronScreen,
} = require("electron");
const mongoose = require("mongoose");
const optionDB = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// const Profile = require("electron/models/Profile");

const createMainWindow = () => {
  let mainWindow = new BrowserWindow({
    width: electronScreen.getPrimaryDisplay().workArea.width,
    height: electronScreen.getPrimaryDisplay().workArea.height,
    show: false,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
    },
  });

  const startURL = "http://localhost:3000";

  mainWindow.loadURL(startURL);

  mainWindow.once("ready-to-show", () => mainWindow.show());

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

app.whenReady().then(async () => {
  createMainWindow();
  console.log("Yo");

  mongoose
    .connect("mongodb://127.0.0.1:27017/Test_Data", optionDB)
    .then((db) => console.log("DB is connected"))
    .catch((err) => console.log(err));

  const profile = mongoose.model("profiles", {
    firstName: { type: String },
    lastName: { type: String },
  });


  var testing = await profile.find({});
  console.log("First function call ", testing);

  app.on("activate", () => {
    if (!BrowserWindow.getAllWindows().length) {
      createMainWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// ipcMain.handle("getProfile", async (e, args) => {
//   console.log("im comming here");
//   const profile = await Profile.find().lean();
//   e.reply("profile", JSON.stringify(profile));
//   console.log("profile", profile);
// });
