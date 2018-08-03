import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';
   
@Injectable()
export class UserService{
   
    private url = "/assets/users.json";
    constructor(private http: HttpClient){ }
      
    getUsers(){
        return this.http.get(this.url);
    }
}