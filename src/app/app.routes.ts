import { Routes } from '@angular/router';
import path from 'node:path';
import { ContactComponent } from './@public/pages/contact/contact.component';
import { HomeComponent } from './@public/pages/home/home.component';
import { UsersComponent } from './@admin/pages/users/users.component';
import { DashboardComponent } from './@admin/pages/dashboard/dashboard.component';
import { AdminComponent } from './@admin/admin.component';
import { PublicComponent } from './@public/public.component';

export const routes: Routes = [
    {path:'public', component: PublicComponent,
        children:[
            {path:'', component:HomeComponent},
            {path:'contact', component: ContactComponent}
        ]
    },


    {path:'admin', component: AdminComponent,
        children:[
            {path: '', component: DashboardComponent},
            {path: 'users', component:UsersComponent}
        ]
    },
    


    {path:'',redirectTo:'public', pathMatch:'full'},
    {path:'**',redirectTo:'public', pathMatch:'full'},
    
 
];
