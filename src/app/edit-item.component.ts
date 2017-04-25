import {Component, Input} from '@angular/core';

@Component({
    selector:'edit-item',
    template:`
        <input type="text" [(ngModel)]="contact.name" />

        
        <button (click)="onClick()">klik</button>
    `
})
export class EditItemComponent {

    @Input() contact;

    ngOnInit() {
        console.log(this.contact);
    }

    onClick() {

        console.log(this.contact);
    }

}