import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import routes from "../routes/index.js"

const server = express();

export async function appInit() {
  try {
    console.log("setting up...");
    //middleware
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(morgan("dev"));

    server.use((req, res, next) => {
      res.header(
        "Access-Control-Allow-Origin",
        process.env.CORS_URL || "http://localhost:3000"
      );
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
      );
      next();
    });

    server.use("/", routes)

    server.listen(process.env.PORT || 3001, () => {
      console.log(`http server listening at ${process.env.PORT || 3001}`);
    });
  } catch (error) {
    throw error;
  }
}

export default server