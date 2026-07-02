import express from "express";
import  homeController  from "../controller/homeController";
const router = express.Router();

/**
 * Init all web routes
 * @param {*} app from express
 */

const initWebRoutes = (app) => {
  router.get("/", homeController.hanldeHelloWorld);
  router.get("/user", homeController.handleUserPage); 
  // webstite bắt đầu sau dấu /, ví dụ: localhost:8080/about thì sẽ vào router.get("/about")
  router.post("/users/create-user", homeController.handleCreateNewUser);

  app.use("/", router);
}
export default initWebRoutes;