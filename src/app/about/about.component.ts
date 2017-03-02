import { Component, OnInit, Injector} from '@angular/core';
//import { JsonFilesService } from '../../app/services/json-files.service';
import { FirebaseService } from '../../app/services/firebase.service';
import { BaseComponent } from '../shared/base.component'; 
import { AboutItem } from '../about-item';
import { toastConfig } from '../shared/toastrConfig';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [FirebaseService]
})
export class AboutComponent extends BaseComponent implements OnInit {
  aboutItems:AboutItem[];
  // constructor(private jsonFilesService:JsonFilesService) { }
  constructor(private firbaseService:FirebaseService,
    private injector: Injector) {
    super(injector);
   }
  ngOnInit() {
    // this.jsonFilesService.getAbouts().subscribe(abouts=>{this.aboutItems=abouts;})
    this.firbaseService.getAbouts().subscribe(abouts=>{
      this.aboutItems=abouts;
      this.toastrService.info('Getting feature technology items from firebase db...', 'About Items', toastConfig);
    });
  }

}
