export class CreateUserDTO {
  name: string;
  email: string;
  password: string;

  constructor(user: CreateUserDTO) {
    this.name = user.name
    this.email = user.email
    this.password = user.password
  }
}
