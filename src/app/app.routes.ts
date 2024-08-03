import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DepartmentComponent } from './pages/department/department.component';
import { CardComponent } from './units/card/card.component';

export const routes: Routes = [
    {path:"",component: HomeComponent},
    {path:"contact",component: ContactComponent},
    {path:"department",component:CardComponent},
];
