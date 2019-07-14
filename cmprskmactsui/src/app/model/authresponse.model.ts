import { User } from './user.model';

export class AuthResponse{
    token:string;
    user:User;
    tokenExpirationDate:Date;
}