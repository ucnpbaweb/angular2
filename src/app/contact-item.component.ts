import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'contact-item',
    template:`item: {{contact.name}} 
    <button (click)="onClick()">toggle</button>
    <br/><br/>`
})
export class ContactItemComponent {

    @Input() contact;

    @Output() togglefav = new EventEmitter();

    onClick() {
        this.togglefav.emit(this.contact.name);
    }

}
