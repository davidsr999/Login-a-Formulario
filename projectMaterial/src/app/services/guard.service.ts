import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GuardService implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.valid;
    }

    valid: boolean = false;
    getValid(){
        this.valid = true;
    }

    notvalid() {
        this.valid = false;
    }

    getValue(): boolean {
        return this.valid;
    }
    
}