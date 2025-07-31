import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { CreateUserDTO } from "../DTO/user.create.dto";
const userService = new UserService();

export default class UserController {
  static createUser = async (req: Request, res: Response) => {
    try {
      if (!req.body && req.body != CreateUserDTO) {
        return res
          .status(400)
          .json({ message: "Um ou mais dados não foram informados." });
      } else {
        userService.createUser(req.body);
        return res
          .status(200)
          .json({ message: "Usuário cadastrado com sucesso" });
      }
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: `${error.message} - erro interno no servidor` });
    }
  };

  static findAllUsers = async (req: Request, res: Response) => {
    try {
      return res.status(200).json(userService.findAllUser());
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: `${error.message} - erro interno no servidor` });
    }
  };
}
