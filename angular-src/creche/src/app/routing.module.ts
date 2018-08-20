import { NgModule } from '@angular/core';
import {Routes , RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ContactComponent} from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {CrechesComponent} from './creches/creches.component';
import {RegisterComponent} from './register/register.component'
import { ParentregisterComponent } from './parentregister/parentregister.component';
import { GovregisterComponent } from './govregister/govregister.component';
import { CrecheregisterComponent } from './crecheregister/crecheregister.component';
import { GovhomeComponent } from './govhome/govhome.component';
import { AddcrecheComponent } from './addcreche/addcreche.component';
import { AddadminComponent } from './addadmin/addadmin.component';

const routes : Routes =[
    { path :'', pathMatch :'full' , component : HomeComponent },
    { path :'loginform', component : LoginComponent },
    {path : 'contact' , component : ContactComponent},
    {path : 'creches' , component : CrechesComponent},
    {path : 'about' , component : AboutComponent},
    {path : 'register' , component : RegisterComponent},
    {path : 'parentregister' , component : ParentregisterComponent},
    {path : 'governmentregister' , component : GovregisterComponent},
    {path : 'crecheregister' , component : CrecheregisterComponent},
    {path : 'govhome' , component : GovhomeComponent},
    {path : 'addcreche' , component : AddcrecheComponent},
    {path : 'addadmin' , component : AddadminComponent}
];


@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class RoutingModule {}