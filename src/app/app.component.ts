import { 	Component,
			Input,
			trigger,
			state,
		  style,
		  transition,
			keyframes,
		  animate,
			ElementRef,
			OnInit
 } from '@angular/core';
 
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { RequestOptions, URLSearchParams, Headers , Http}    from '@angular/http';
 
// import {HTTP_PROVIDERS}    from '@angular/http';
// import { HttpModule } from '@angular/http';

import {Contact} from './contact';

// import {ContactService}    from './contactservice';

export class Hero {
	id : number;
	name : string;
};

export class Title {
	name : string;
};



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [HttpModule, ContactService],
  animations : [
	trigger('ChangeColor', [
		state('inactive',style ({
			backgroundColor: '#6e82af',
			color: '#2a395b'
		})),
		state('active', style ({
			backgroundColor: '#2a395b',
			color: '#d0d6e2'
		})),
		state('third', style ({
			backgroundColor: '#5f677a',
			color: '#87aaff'
		})),
		transition ('inactive=>active', [animate('5s ease')]),
		transition ('active=>third', [animate('5s ease')]),
		transition ('third=>inactive', [animate('5s ease')])
	]),
	trigger('nameTranslate', [
		transition ('void=> *',[
			style({ transform:'translateX(-100%)'}),
			animate('5s ease')
			]),
		transition ('*=> void',[
			style({ transform:'translateX(100%)'}),
			animate('5s ease')
			])
	]),
	trigger('webTranslate', [
		transition ('void=> *',[
			style({ transform:'translateX(100%)'}),
			animate('5s ease')
			]),
		transition ('*=> void',[
			style({ transform:'translateX(-100%)'}),
			animate('5s ease')
			])
	])
	]
})

export class AppComponent{

		changeColor(){
		this.sectionState= (this.sectionState === 'inactive') ? 'active' : 'inactive' && (this.sectionState === 'active') ? 'third' : 'active' && (this.sectionState === 'third') ? 'inactive' : 'third';
		}
		
		name: string;
		fname: string;
		email: string;
		message: string;
		endpoint : string;

    constructor( private http : Http) {
        this.http = http;
    }

    ngForm = new FormGroup({
        name: new FormControl(null),
        fname: new FormControl(null),
        email: new FormControl(null),
        tel: new FormControl(null),
        message: new FormControl(null)
    });
		onSubmit(value: any){
			console.log(value.name);
			
		let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        this.endpoint = "http://eddyr.marmier.codeur.online/validate.php";


        let postVars = {
            name : value.name,
            fname : value.fname,
            email : value.email,
            tel : value.tel,
            message : value.message
        };
		
		console.log(postVars);

        this.http.post(this.endpoint, postVars, options )
            .subscribe(
                response => console.log(response)
            )
		}
	 title2 = "Webdeveloper";
	  section1 = "About me";
	  sectionState: string = 'inactive';
	  section2 = "Education";
	  section3 = "Skills";
	  section4 = "Portfolio";
	  section5 = "Contact";
		
	contact = new Contact();
  
	  hero: Hero = {
	  id: 1,
	  name: 'Hello'
	  };

	title : Title = {
	name: 'Eddy ROY,'
}
}
