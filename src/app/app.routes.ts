import { Routes } from '@angular/router';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { AddBooksPageComponent } from './page/add-books-page/add-books-page.component';
import { ManageBooksPageComponent } from './page/manage-books-page/manage-books-page.component';
import { AddMembersPageComponent } from './page/add-members-page/add-members-page.component';
import { ManageMembersPageComponent } from './page/manage-members-page/manage-members-page.component';
import { DashBoardComponent } from './common/dash-board/dash-board.component';
import { AddBorrowerPageComponent } from './page/add-borrower-page/add-borrower-page.component';
import { ManageBorrowerPageComponent } from './page/manage-borrower-page/manage-borrower-page.component';
import { LogInPageComponent } from './common/log-in-page/log-in-page.component';
import { MainPageComponent } from './common/main-page/main-page.component';

export const routes: Routes = [
    {path:'navbar',component:NavBarComponent},
    {path:'dashBoard',component:DashBoardComponent},
    {path:'AddBooks',component:AddBooksPageComponent},
    {path:'ManageBooks',component:ManageBooksPageComponent},
    {path:'AddMembers',component:AddMembersPageComponent},
    {path:'ManageMembers',component:ManageMembersPageComponent},
    {path:'AddBorrowers',component:AddBorrowerPageComponent},
    {path:'ManageBorrowers',component:ManageBorrowerPageComponent},
    {path:'logIn',component:LogInPageComponent},
    {path:'main',component:MainPageComponent}
];
