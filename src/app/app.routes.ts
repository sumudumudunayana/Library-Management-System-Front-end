import { Routes } from '@angular/router';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { AddBooksPageComponent } from './page/add-books-page/add-books-page.component';
import { ManageBooksPageComponent } from './page/manage-books-page/manage-books-page.component';
import { AddMembersPageComponent } from './page/add-members-page/add-members-page.component';
import { ManageMembersPageComponent } from './page/manage-members-page/manage-members-page.component';
import { DashBoardComponent } from './common/dash-board/dash-board.component';

export const routes: Routes = [
    {path:'navbar',component:NavBarComponent},
    {path:'dashBoard',component:DashBoardComponent},
    {path:'AddBooks',component:AddBooksPageComponent},
    {path:'ManageBooks',component:ManageBooksPageComponent},
    {path:'AddMembers',component:AddMembersPageComponent},
    {path:'ManageMembers',component:ManageMembersPageComponent}

];
