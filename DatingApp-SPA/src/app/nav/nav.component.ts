import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  model:any={};
  constructor(public authService:AuthService, private alertify:AlertifyService) { }

  ngOnInit() {
  }

  login(){
   this.authService.login(this.model).subscribe(next=>{
     this.alertify.success('Logged in Successfully');
   }, error => {
    this.alertify.error(error);
   });
  }

  loggedIn(){
    
    return this.authService.loggedIn();
 }

 logOut(){
   localStorage.removeItem('token');
   this.alertify.message('Logged out');
 }

}
