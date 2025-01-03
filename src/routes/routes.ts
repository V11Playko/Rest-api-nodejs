import { IUserRepository, IUserService, User } from 'types/UsersTypes';
import { IRolesRepository, IRolesService, Roles } from 'types/RolesTypes';
import { Router } from 'express'
import { UserService } from '@service/UserService';
import { UserRepository } from '@repository/UserRepository';
import { RolesService } from '@service/RolesService';
import { RolesRepository } from '@repository/rolesRepositories';

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
 router.get("/users", async (req, res) => {
    const users = await userService.findUsers();
    res.json(users);
  });

  router.get("/users/:id", async (req, res) => {
    const users = await userService.findUsersById(req.params.id);
    res.json(users);
  });
  
  //Create
  router.post("/users", async (req, res) => {
    const newUser: User = req.body;
    const result = await userService.createUser(newUser);

    res.json(result);
  });

  router.put("/users/:id", async (req, res) => {
    const users = await userService.updateUser(req.params.id, req.body);
    res.json(users);
  });
  router.delete("/users/:id", async (req, res) => {
    const users = await userService.deleteUser(req.params.id);
    res.json(users);
  });

 // Roles Routes
 //Get
 router.get("/roles", async (req, res) => {
  const roles = await rolesService.findRoles();
  res.json(roles);
});

router.get("/roles/:id", async (req, res) => {
  const roles = await rolesService.findRolesById(req.params.id);
  res.json(roles);
});

//Create
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