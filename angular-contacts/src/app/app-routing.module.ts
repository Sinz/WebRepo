import { TagEditComponent } from './tag-edit/tag-edit.component';
import { TagNewComponent } from './tag-new/tag-new.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { LayoutComponent } from './layout/layout.component';
import { ContactEditComponent } from "./contact-edit/contact-edit.component";
import { ContactNewComponent } from "./contact-new/contact-new.component";
/*
 * @Since: 2020-09-26 00:42:41
 * @LastEditTime: 2020-09-26 16:15:34
 * @LastEditors: Zhao.J
 * @FilePath: \angular-contacts\src\app\app-routing.module.ts
 * @Description: 
 */
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SigninComponent} from './signin/signin.component';
import {SignupComponent  } from "./signup/signup.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ContactListComponent
      },
      {
        path: 'new',
        component: ContactNewComponent
      },
      {
        path: 'edit',
        component: ContactEditComponent
      }
    ]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'tags',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: TagListComponent
      },
      {
        path: 'new',
        component: TagNewComponent
      },
      {
        path: 'edit',
        component: TagEditComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
