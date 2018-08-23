export class Users {
  constructor(public username: string,
    public location: string,
    public followers: number,
    public following: number,
    public memberSinceDate: Date,
    public email: string) {
}
}
