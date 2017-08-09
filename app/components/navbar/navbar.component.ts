import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
@Component({
    moduleId:module.id,
	selector: 'navbar',
    templateUrl: 'navbar.html',
    directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent{
    private appName: string;

    constructor(){
        this.appName = "MyAngularApp"
    }
}