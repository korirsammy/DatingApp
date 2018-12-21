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

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(()=>{
      console.log('Registration Success');
    },error=> {
      console.log(error);
    })
  }
  cancel(){
    this.cancelRegister.emit(false);
    console.log('Cancelled');
  }

}
