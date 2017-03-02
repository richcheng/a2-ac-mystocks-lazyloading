import { Component, OnInit, Injector } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { BaseComponent } from '../shared/base.component';
import { toastConfig } from '../shared/toastrConfig';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit{

    constructor(
      private injector: Injector,
      private authService: AuthService) {
      super(injector);
    }

  ngOnInit() {
    this.toastrService.info('Going home', 'Home Menu', toastConfig);
  }

}

