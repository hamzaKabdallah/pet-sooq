import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/http';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: BehaviorSubject<IUser> = new BehaviorSubject<IUser>([])
  constructor(private Http: HttpClient) { }


}
