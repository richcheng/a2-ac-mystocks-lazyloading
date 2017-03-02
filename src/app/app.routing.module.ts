import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from './auth.guard';

// const indexRoute:Route ={
//     path:'',
//     loadChildren: 'app/home/home.module#HomeModule'
// };

// const fallbackRoute:Route = {
//     path:'**',
//     loadChildren: 'app/home/home.module#HomeModule'
// };

// const routes: Routes = [  
//   {
//     path: '**',
//     redirectTo: '/home',
//     pathMatch: 'full'
//   },   
//   {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full'
//   }  
//     {    
//         path: 'home',
//         loadChildren: 'app/home/home.module#HomeModule'
//     },    
//     {    
//         path: 'profile',
//         loadChildren: 'app/profile/profile.module#ProfileModule',        
//         canActivate: [AuthGuard]
//     },    
//     {    
//         path: 'dashboard',
//         loadChildren: 'app/dashboard/dashboard.module#HomeModule',
//         canActivate: [AuthGuard]        
//     },
//     {
//        path:'about',
//        loadChildren:'app/about/about.module#AboutModule'
//     },
//     fallbackRoute,
//     indexRoute
// ];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule]
})
export class AppRoutingModule {}