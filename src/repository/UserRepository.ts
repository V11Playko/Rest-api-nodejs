import { UserModel } from "@model/Users";
import { Query } from "types/RepositoryTypes";
import { IUserRepository, User } from "types/UsersTypes";

export class UserRepository implements IUserRepository {
    async create(data: User): Promise<User> {
      const newUser = new UserModel(data);
      return await newUser.save();
    }
  
    async find(query?: Query): Promise<User[]> {
      return await UserModel.find(query || {}).exec();
    }
    async findById(id: string): Promise<User | null> {
      return await UserModel.findById(id).exec();
    }
    async findOne(query: Query): Promise<User | null> {
      return await UserModel.findOne(query);
    }
    async update(id: string, data: Partial<User>): Promise<User | null> {
      return await UserModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    async delete(id: string): Promise<boolean> {
      const deleted = await UserModel.findByIdAndDelete(id).exec();
      return deleted !== null;
    }
  }