import { Router } from 'express'
import { createUser, deleteUser, findUsers, findUsersById, updateUser } from '@controller/usersControllers';
import { createRoles, deleteRoles, findRoles, findRolesById, updateRoles } from '@controller/rolesControllers';
import { createPosts, deletePosts, findPosts, findPostsById, updatePosts } from "@controller/postsControllers";
import { loginUser, registerUser } from '@auth/authControllers';

const router = Router();

export default () => {
    router.get('/health', (req, res) => {
        res.send("Api es Healthy!!");
    })

  // Auth Routes
  router.post("/auth/register", registerUser);
  router.post("/auth/login", loginUser);

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

  // Posts Routes
    router.get("/posts", findPosts);
    router.get("/posts/:id", findPostsById);
    router.post("/posts", createPosts);
    router.put("/posts/:id", updatePosts);
    router

  return router;
};