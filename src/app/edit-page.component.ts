import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService} from './contacts.service';

@Component({
    selector:'edit-page',
    template:'<edit-item [contact]="contact"></edit-item>'
})
export class EditPageComponent {
    
    contact={};

    constructor(private activatedRoute: ActivatedRoute, 
    private contactsService: ContactsService) {

        this.activatedRoute.params
            .map(params => params['id'])
            .subscribe(id => {
                this.contact = this.contactsService.getContacts()[id];
            });

    }
}
