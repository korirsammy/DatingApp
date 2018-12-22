import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input,  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome:any
  @Output() cancelRegister= new EventEmitter();
 model:any={};

  constructor(private authService:AuthService, private alertify:AlertifyService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(()=>{
      this.alertify.success('Registration Success');
    },error=> {
      this.alertify.error(error);
    })
  }
  cancel(){
    this.cancelRegister.emit(false);
   
  }

}
