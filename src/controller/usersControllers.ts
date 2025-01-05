import { UserRepository } from "@repository/UserRepository";
import { UserService } from "@service/UserService";
import { Request, Response } from "express";
import { IUserRepository, IUserService, User } from "types/UsersTypes";
const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);
export const findUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.findUsers();
    if (users.length === 0) return res.status(404).json({ message: "no users Found." });
    res.json(users);
  } catch (error) {
    console.log("error :>> ", error);
    res.status(500).json(error);
  }
};
export const findUsersById = async (req: Request, res: Response) => {
  try {
    const users = await userService.findUsersById(req.params.id);
    if (!users) return res.status(404).json({ message: "Not user Found" });
    res.json(users);
  } catch (error) {
    console.log("error :>> ", error);
    res.status(500).json(error);
  }
};