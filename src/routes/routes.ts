import { IUserRepository, IUserService } from 'types/UsersTypes';
import { Router } from 'express'
import { UserService } from '@service/UserService';
import { UserRepository } from '@repository/UserRepository';

const router = Router();

const userRepository: IUserRepository = new UserRepository()
const userService: IUserService = new UserService(userRepository);

export default () => {
    router.get('/health', (req, res) => {
        res.send("Api es Healthy!!");
    })

    router.get("/users", async (req, res) => {
        const users = await userService.findUsers();
        res.json(users);
    });

    router.post("/users", async (req, res) => {
        const newUser = req.body;
        const createdUser = await userService.createUser(newUser);
        res.status(201).json(createdUser);
    });

    return router;
}