export class Users {
  constructor(public userName: string,
    public location: string,
    public followers: number,
    public following: number,
    public memberSinceDate: Date,
    public email: string) {
}
}
