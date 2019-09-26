import {Component} from '@angular/core';
import {WebService} from './web.service';
@Component({
    selector: 'new-message',
    template: `
            <mat-card class="card">
                
                    <mat-card-content>
                    <form>
                            <mat-form-field>
                                <input matInput placeholder="Free Area">
                            </mat-form-field>
                            <mat-form-field>
                                <textarea matInput placeholder="Free Area text"></textarea>
                            </mat-form-field>
                    </form>
                    </mat-card-content>
            </mat-card>
    `
})

export class NewMessageComponent{
    constructor(private webService: WebService){}
   

}