export class CreateSwapEvent {
  constructor(
    public readonly userid: string,
    public readonly title: string,
    public readonly author: string,
    public readonly shortdesc: string,
    public readonly typetag: string,
    public readonly lookingfor: string,
  ) {}
}
