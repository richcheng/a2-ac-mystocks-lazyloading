import { Http } from '@angular/http';
import { Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export class BaseComponent {

    public toastrService: ToastrService;
    
    constructor(private inject: Injector) {
        this.toastrService = inject.get(ToastrService);
    }
}