import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {observeOn} from 'rxjs/operators';

@Injectable()
export class WebService{

    messages=[];

    BASE_URL='http://localhost:1357/api';

    constructor(private http : HttpClient){
        this.getMessages();
    }

    async getMessages(){
       var response = await this.http.get(this.BASE_URL+'/messages').toPromise();
       response = JSON.stringify(response);
       this.messages = JSON.parse(response.toString()) ;
    }

    async postMessages(message){
        var response= await this.http.post(this.BASE_URL+'/messages',message).toPromise();
        response = JSON.stringify(response);
        this.messages.push(JSON.parse(response.toString()));
     }
}