import { IUser } from './user.interface';

export interface IComment {
    id: string;
    user: IUser;
    body: {
        image?: string[];
        commentText?: string;
    }
}