import { Repository } from "./RepositoryTypes";

export interface User extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface IUserRepository extends Repository<User> {}

export interface IUserService {
  createUser(user: User): Promise<User>;
  findUsers(): Promise<User[]>;
}