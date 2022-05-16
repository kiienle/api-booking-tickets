import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import movieController from "../controllers/movieController";
import cinemaController from "../controllers/cinemaController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);

    router.post("/api/login", userController.handleLogin);
    router.post("/api/create-new-user", userController.createNewUser);
    router.get("/api/get-all-users", userController.handleGetAllUsers);
    router.delete("/api/delete-user", userController.handleDeleteUser);
    router.put("/api/update-user", userController.handleUpdateUser);

    router.get("/api/get-allcode", userController.handleGetAllcode);

    router.post("/api/create-new-movie", movieController.createNewMovie);
    router.get("/api/get-all-movies", movieController.handleGetAllMovie);
    router.put("/api/update-movie", movieController.handleUpdateMovie);

    router.post("/api/create-new-cineplex", cinemaController.createNewCineplex);
    router.get("/api/get-all-cineplex", cinemaController.handleGetAllCineplex);
    router.put("/api/update-cineplex", cinemaController.handleUpdateCineplex);

    return app.use("/", router);
};

module.exports = initWebRoutes;
