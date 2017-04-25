import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

    private _contacts = [
        {name:'Filip', id:0},
        {name:'Christian', id:1},
        {name:'Patrick', id:2},
        {name:'Andreas', id:3}
    ];

    getContacts() {
        return this._contacts;
    }    

    makeFavorite(contact) {
        alert('make favorite'+contact);
    }


    constructor(private http: Http) {

        this.http.get('http://www.json-generator.com/api/json/get/bMKjmIKyrm')
        .map(response => response.json())
        .subscribe(data => {
            data.forEach(contact => {
                this._contacts.push(contact);
            });
        })


    }

}
