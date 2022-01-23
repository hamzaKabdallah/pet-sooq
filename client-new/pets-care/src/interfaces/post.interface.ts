import { Url } from 'url';
import { IComment } from './comment.interface';
import { IUser } from './user.interface';

export interface IPost {
    id: string;
    title: string;
    body:string;
    images: string[];
    likes: IUser[]
    comments: IComment[];
}