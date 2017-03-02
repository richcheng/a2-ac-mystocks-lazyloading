import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { AngularFireModule } from 'angularfire2';
// import { NgbModule, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
// import { APP_BASE_HREF } from '@angular/common';

/* App Root */
import { AppComponent } from './app.component';

// 3rd party imports
import { ToastrModule } from 'ngx-toastr';
// import { MomentModule} from 'angular2-moment';

// Service imports
import { AuthGuard } from './shared/auth/auth.guard';
//import { AuthService } from './shared/auth/auth.service';
//import { JsonFilesService } from './services/json-files.service';

/* Feature Modules */
import { AboutModule } from './about/about.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileModule } from './profile/profile.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

/* Routing Module */
import { AppRoutingModule } from './app.routing.module';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCQ7OQk8gLkCgiqh2KGefTgOa4O5oZCvo4',
  authDomain: 'stocks-f03e1.firebaseapp.com',
  databaseURL: 'https://stocks-f03e1.firebaseio.com',
  storageBucket: 'stocks-f03e1.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // NgbModule.forRoot(),
    AppRoutingModule,
    AboutModule,
    DashboardModule,
    HomeModule,
    ProfileModule,
    SharedModule.forRoot(),    
    ToastrModule.forRoot() // ToastrModule added

  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    // {
    //   provide: APP_BASE_HREF,
    //   useValue: '/'
    // },        
    ToastrModule,
    //AuthService,
    AuthGuard
    //JsonFilesService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
