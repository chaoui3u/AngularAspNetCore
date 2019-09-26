import {Component} from '@angular/core';

@Component({
    selector: 'messages',
    template: 'This is a messages Component <div *ngFor="let message of messages">{{message.text}} by {{message.owner}}</div>'
})

export class MessagesComponent{
    messages= [{text:'some text',owner:'Tim'},{text:'other message', owner:'jane'}];
}