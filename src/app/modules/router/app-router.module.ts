import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from '../../pages/oss/system/user/user-list/user-list.component';
import { UserAddComponent } from '../../pages/oss/system/user/user-add/user-add.component';


const appRoutes: Routes = [
  { path: 'user/list', component: UserListComponent },
  { path: 'user/add', component: UserAddComponent }
];

@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {}
