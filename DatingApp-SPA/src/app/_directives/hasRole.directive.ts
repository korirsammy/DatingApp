import { Directive, Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit {
@Input() appHasRole:string[];
isVisble=false;

  constructor(private viewContainerRef:ViewContainerRef,
    private templateRef:TemplateRef<any>,
    private authService:AuthService) { }

    ngOnInit(){
      const userRoles=this.authService.decodedToken.role as Array<string>
      //if there are no role,clear view container ref
      if(!userRoles){
        this.viewContainerRef.clear();
      }
      //if a user has a role needed, render the element
      if(this.authService.roleMatch(this.appHasRole)){
        if(!this.isVisble){
          this.isVisble=true;
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        }else{
          this.isVisble=false;
          this.viewContainerRef.clear();
        }
      }

    }
}
