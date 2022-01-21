import { Url } from 'url';
import { IPetTypes } from 'src/enums/petType.interface';

export interface IUser {
    id: string;
    name: string;
    age: number;
    profileImage: Url;
    petName: string;
    petImage: string;
    petType: IPetTypes[];
    interestedIn: IPetTypes[];
}