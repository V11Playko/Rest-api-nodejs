import { Router } from 'express'
import { createUser, deleteUser, findUsers, findUsersById, updateUser } from '@controller/usersControllers';
import { createRoles, deleteRoles, findRoles, findRolesById, updateRoles } from '@controller/rolesControllers';

const router = Router();

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
  router.get("/roles", findRoles);
  router.get("/roles/:id", findRolesById);

  router.post("/roles", createRoles);

  router.put("/roles/:id", updateRoles);

  router.delete("/roles/:id", deleteRoles);

  return router;
};