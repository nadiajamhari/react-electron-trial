const { createWindow } = require("./main");
require("./database");
const { application } = require("electron");

application.whenReady().then(createWindow);
application.allowRenderedProcessReuse = true;
