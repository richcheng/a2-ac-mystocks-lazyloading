import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../shared/base.component';
import { toastConfig } from '../shared/toastrConfig';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends BaseComponent implements OnInit {

  private profile: any;

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.toastrService.info('Getting profile data from local storage', 'Profile Data', toastConfig);    
    console.log('entered ProfileComponent.ngOnInit().');
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
  }

}