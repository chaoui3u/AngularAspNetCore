import {Component} from '@angular/core';
import {WebService} from './web.service';
@Component({
    selector: 'new-message',
    template: `
            <mat-card class="card">
                
                    <mat-card-content>
                        <form>
                                <mat-form-field>
                                    <input [(ngModel)]="message.owner" [ngModelOptions]="{standalone: true}" matInput placeholder="Free Area">
                                </mat-form-field>
                                <mat-form-field>
                                    <textarea [(ngModel)]="message.text" [ngModelOptions]="{standalone: true}" matInput placeholder="Free Area text"></textarea>
                                </mat-form-field>
                                <mat-card-actions>
                                    <button (click)="post()" mat-button color="primary">POST</button>
                                </mat-card-actions>
                        </form>
                    </mat-card-content>
            </mat-card>
    `
})

export class NewMessageComponent{


    constructor(private webService: WebService){}
   
    message ={
        owner:"",
        text:""
    }

    post(){
        this.webService.postMessages(this.message);
    }
}