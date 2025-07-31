import express, {Response, Request, Router, application } from "express";
import {userRoute} from "./user.router"

const routes = (app: Router) => {
  app
    .route("/")
    .get((req: Request, res: Response) => res.status(200).send("tudo ok"));

  app.use(express.json(), userRoute);
};

export default routes;
