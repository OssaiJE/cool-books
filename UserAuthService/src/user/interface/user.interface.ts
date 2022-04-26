export interface UserInterface {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  createdDate?: Date; // ? makes the field optional
}
