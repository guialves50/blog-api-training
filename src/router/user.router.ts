import express from "express";
import userController from "../controllers/user.controller";

export const userRoute = express.Router()

userRoute.post("/user", userController.createUser)
userRoute.get("/user", userController.findAllUsers)
