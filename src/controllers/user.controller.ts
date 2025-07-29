import { Request, Response } from "express";
import { UserService } from "../services/user.service";
const userService = new UserService();

export default class UserController {
  static createUser = async (req: Request, res: Response) => {
    try {
      userService.createUser(req.body);
      if (!req.body) {
        return res
          .status(400)
          .json({ message: "Um ou mais dados não foram informados." });
      } else {
        return res
          .status(200)
          .json({message: "Usuário cadastrado com sucesso"})
      }
    } catch (error: any) {
      return res
        .status(500)
        .json({message: `${error.message} - erro interno no servidor`})
    }
  };
}
