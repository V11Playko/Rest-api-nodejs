import { Router } from 'express'
import { createUser, deleteUser, findUsers, findUsersById, updateUser } from '@controller/usersControllers';
import { createRoles, deleteRoles, findRoles, findRolesById, updateRoles } from '@controller/rolesControllers';
import { createPosts, deletePosts, findPosts, findPostsById, updatePosts } from "@controller/postsControllers";
import { loginUser, registerUser } from '@auth/authControllers';
import { verifyToken } from '@middlewares/auth';
import { checkRoles } from '@middlewares/roles';

const router = Router();

export default () => {
    router.get('/health', (req, res) => {
        res.send("Api es Healthy!!");
    })

  // Auth Routes
  router.post("/auth/register", checkRoles, registerUser);
  router.post("/auth/login", loginUser);

 // User Routes
  router.get("/users", verifyToken, findUsers);
  router.get("/users/:id", verifyToken, findUsersById);
  router.post("/users", verifyToken, createUser);
  router.put("/users/:id", verifyToken, updateUser);
  router.delete("/users/:id", verifyToken, deleteUser);

 // Roles Routes
  router.get("/roles", verifyToken, findRoles);
  router.get("/roles/:id", verifyToken, findRolesById);
  router.post("/roles", verifyToken, createRoles);
  router.put("/roles/:id", verifyToken, updateRoles);
  router.delete("/roles/:id", verifyToken, deleteRoles);

  // Posts Routes
  router.get("/posts", verifyToken, findPosts);
  router.get("/posts/:id", findPostsById);
  router.post("/posts", verifyToken, createPosts);
  router.put("/posts/:id", verifyToken, updatePosts);
  router.delete("/posts/:id", verifyToken, deletePosts)

  return router;
};