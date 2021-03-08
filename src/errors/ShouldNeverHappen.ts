export class ShouldNeverHappen extends Error {
  constructor(message: string) {
    super(message);
    this.name = ShouldNeverHappen.name;
  }
}
