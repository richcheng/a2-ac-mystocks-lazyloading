import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: 'home', 
        component: HomeComponent 
      },
      // { 
      //   path: '**',  /* fallback route */
      //   component: HomeComponent 
      // },      
      { 
        path: '',  /* index route */
        component: HomeComponent 
      }      
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }