import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {observeOn} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';
import {Subject} from 'rxjs';

@Injectable()
export class WebService{

    private messageStore=[];

    private messageSubject = new Subject();

    messages = this.messageSubject.asObservable();

    BASE_URL='http://localhost:1357/api';

    constructor(private http : HttpClient,private sb : MatSnackBar){
        this.getMessages();
    }

     getMessages(user=''){
            user = (user) ? '/' + user : ''; 
            this.http.get(this.BASE_URL+'/messages'+user).subscribe(response =>{
            response = JSON.stringify(response);
            this.messageStore = JSON.parse(response.toString()) ;
            this.messageSubject.next(this.messageStore);
            },error=>{
                this.handleError("Unable to get messages")
            });
       
    }

    async postMessages(message){
        try {
            var response= await this.http.post(this.BASE_URL+'/messages',message).toPromise();
            response = JSON.stringify(response);
            this.messageStore.push(JSON.parse(response.toString()));
            this.messageSubject.next(this.messageStore)
        } catch (error) {
            this.handleError("Unable to post message")
        }

     }
    
     getUser(){
         return this.http.get(this.BASE_URL+'/users/me').subscribe();
     }
     private handleError(error){
        console.error(error);
        this.sb.open(error,"close",{duration:2000});
     }
}