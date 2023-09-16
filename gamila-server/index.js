import { appInit } from "./src/init/app.init.js";
import { dbInit } from "./src/init/db.init.js";

(async () => {
  try {
    console.log("starting server");
    await appInit();
    await dbInit();
  } catch (error) {
    console.error(error);
  }
})();
