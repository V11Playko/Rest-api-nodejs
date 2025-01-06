import { IUserRepository, IUserService, User } from 'types/UsersTypes';
import { IRolesRepository, IRolesService, Roles } from 'types/RolesTypes';
import { Router } from 'express'
import { UserService } from '@service/UserService';
import { UserRepository } from '@repository/UserRepository';
import { RolesService } from '@service/RolesService';
import { RolesRepository } from '@repository/rolesRepositories';
import { createUser, deleteUser, findUsers, findUsersById, updateUser } from '@controller/usersControllers';

const router = Router();

const userRepository: IUserRepository = new UserRepository()
const userService: IUserService = new UserService(userRepository);

const rolesRepository: IRolesRepository = new RolesRepository()
const rolesService: IRolesService = new RolesService(rolesRepository);

export default () => {
    router.get('/health', (req, res) => {
        res.send("Api es Healthy!!");
    })

 // User Routes
  router.get("/users", findUsers);
  router.get("/users/:id", findUsersById);
  
  router.post("/users", createUser);

  router.put("/users/:id", updateUser);

  router.delete("/users/:id", deleteUser);

 // Roles Routes
 router.get("/roles", async (req, res) => {
  const roles = await rolesService.findRoles();
  res.json(roles);
});
router.get("/roles/:id", async (req, res) => {
  const roles = await rolesService.findRolesById(req.params.id);
  res.json(roles);
});

router.post("/roles", async (req, res) => {
  const newRole: Roles = req.body;
  const result = await rolesService.createRoles(newRole);

  res.json(result);
});

router.put("/roles/:id", async (req, res) => {
  const users = await rolesService.updateRoles(req.params.id, req.body);
  res.json(users);
});
router.delete("/roles/:id", async (req, res) => {
  const roles = await rolesService.deleteRoles(req.params.id);
  res.json(roles);
});

  return router;
};