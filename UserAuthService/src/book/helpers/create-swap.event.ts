export class CreateSwapEvent {
  constructor(
    public readonly userid: string,
    public readonly title: string,
    public readonly author: string,
  ) {}
}
