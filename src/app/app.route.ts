import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PictureComponent } from './picture/picture.component';

const routes : Routes = [
    { path:'', redirectTo:'/pictures', pathMatch:'full'},
    { path:'pictures', component:PictureComponent}
]

@NgModule({
    imports : [ RouterModule.forRoot( routes ) ] ,
    exports : [ RouterModule ]
})

export class AppRouter{ }