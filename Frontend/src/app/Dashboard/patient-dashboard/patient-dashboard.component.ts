import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {

  constructor(private toastr:ToastrService, private router:Router){}

  logout(){
    if( this.toastr.success('Logout Successfully!')){
      this.router.navigateByUrl('logindash');
    }else{
      this.toastr.error('Logout Failde!');
    }
  }


}
