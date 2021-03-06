import { Routes } from '@angular/router';

import { EditComplaint } from './pages/complaints/complaint.edit.component';
import { ComplaintComponent } from './pages/complaints/complaint';
import { ComplaintListComponent } from './pages/complaints/complaint.list.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { ParentComponent } from './pages/login/parent'
import { LoginComponent } from './pages/login/login.component';
import { ForgetPasswordComponent } from './pages/login/forget.password.component';
import { LoggedInGuard } from './pages/login/logged-in.guard';
import { StudentDetail } from './pages/student-detail/student-detail.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'parent/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard] },
  { path: 'complaint', component: ComplaintComponent, canActivate: [LoggedInGuard],
    children: [
      { path: 'status/:statusId', component: ComplaintListComponent, pathMatch: 'full'},
      { path: 'category-status/category/:categoryId', component: ComplaintListComponent, pathMatch: 'full'},
      { path: 'category-status/:categoryId/:statusId', component: ComplaintListComponent, pathMatch: 'full'},
      { path: 'department-status/department/:departmentId', component: ComplaintListComponent, pathMatch: 'full'},
      { path: 'department-status/:departmentId/:statusId', component: ComplaintListComponent, pathMatch: 'full'},
      { path: 'program-standard/program/:programId', component: ComplaintListComponent, pathMatch: 'full'},
      { path: 'program-standard/:programId/:standardId', component: ComplaintListComponent, pathMatch: 'full'},    
      { path: '', component: ComplaintListComponent, pathMatch: 'full'},
      { path: 'edit/:complaint', component: EditComplaint}
    ]
  },
  {path:'program/student-detail/:programId/:standardId',component:StudentDetail, canActivate: [LoggedInGuard]},
  {path:'department/student-detail/:departmentId/:standardId',component:StudentDetail, canActivate: [LoggedInGuard]},
  { path: 'parent', component: ParentComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'forget-password', component: ForgetPasswordComponent }
    ]
  },
  { path: 'account', component: AccountComponent }
];
