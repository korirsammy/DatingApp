import { MemberListResolver } from './_resolver/member-list.resolver';
import { AuthGuard } from './_guards/auth.guard';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';

export const appRoutes: Routes=[

    {    path:'',component: HomeComponent},
    {
        path:'',
        runGuardsAndResolvers:'always',
        canActivate:[AuthGuard],
        children:[
            {    path:'members',component: MemberListComponent,resolve:{users:MemberListResolver}},
            {    path:'members/:id',component: MemberDetailComponent,
                    resolve:{user:MemberDetailResolver}},
            {    path:'messages',component: MessagesComponent},
            {    path:'lists',component: ListsComponent}
        ]
    },
    
    {    path:'**',redirectTo:'',pathMatch:'full'}
  
];