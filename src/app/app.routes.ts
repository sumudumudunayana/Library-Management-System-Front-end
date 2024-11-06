import { Routes } from '@angular/router';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { AddBooksPageComponent } from './page/add-books-page/add-books-page.component';
import { ManageBooksPageComponent } from './page/manage-books-page/manage-books-page.component';

export const routes: Routes = [
    {path:'navbar',component:NavBarComponent},
    {path:'AddBooks',component:AddBooksPageComponent},
    {path:'ManageBooks',component:ManageBooksPageComponent}

];
