import { Authority } from './authority.model';

export class User {
    username: string;
    enabled:boolean;
    authorities:Authority[];
}