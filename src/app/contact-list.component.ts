import { Component } from '@angular/core';
import {ContactsService} from './contacts.service';

@Component({
    selector: 'contact-list',
    template: `
        <h1>My Contacts</h1>

        <ul>
            <li *ngFor="let contact of contacts">
                <a [routerLink]="['edit',contact.id]">{{contact.name}}</a>
            </li>
        </ul>
    `
})
export class ContactListComponent {
    contacts = [];

    toggle(name) {
        this.contactsService.makeFavorite(name);
    }

    ngOnInit() {
        this.contacts = this.contactsService.getContacts();
    }

    constructor(private contactsService: ContactsService) { }

}
