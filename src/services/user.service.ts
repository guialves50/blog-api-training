import { prisma } from "../database/database.connection";

export class UserService {
  async createUser(data: { name: string; email: string; password: string }) {
    await prisma.user.create({ data });
  }

  async findAllUser() {
    await prisma.user.findMany();
  }

  async findUserById(userId: string) {
    await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  async deleteUserById(userId: string) {
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });
  }
}
