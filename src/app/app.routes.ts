import { RouterModule } from '@angular/router'; 

import {ContactListComponent} from './contact-list.component';
import {EditPageComponent} from './edit-page.component';

const routes = [{
    path:'',
    component: ContactListComponent
},{
    path:'edit/:id',
    component:EditPageComponent
}];


export const routing = RouterModule.forRoot(routes);



