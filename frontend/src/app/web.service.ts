import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {observeOn} from 'rxjs/operators';

@Injectable()
export class WebService{

    constructor(private http : HttpClient){}

    getMessages(){
       return this.http.get('http://localhost:1357/api/messages').toPromise();
    }
}