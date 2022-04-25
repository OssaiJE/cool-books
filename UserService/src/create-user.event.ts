export class CreateUserEvent {
  constructor(
    public readonly email: string,
    public readonly lastname: string,
  ) {}
}
