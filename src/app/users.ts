export class Users {
  constructor(public username: string,
    public location: string,
    public followers: number,
    public following: number,
    public memberSince: Date,
    public email: string) {
}
}
