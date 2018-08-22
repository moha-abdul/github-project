export class Users {
  constructor(public username: string,
    public location: string,
    public memberSince: Date,
    public followers: number,
    public following: number) {
}
}
