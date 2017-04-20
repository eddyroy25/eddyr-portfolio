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
import { Observable } from 'rxjs/Rx';
 
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
	]),
	trigger('rightSlide', [
		state('one', style ({
			transform: 'translateX(0%)'
		})),
		state('two', style ({
			transform: 'translateX(-2.15%)'
		})),
		state('three', style ({
			transform: 'translateX(-4.3%)'
		})),
		state('four', style ({
			transform: 'translateX(-6.45%)'
		})),
		state('five', style ({
			transform: 'translateX(0%)'
		})),
		transition ('one => two', [animate('1s ease')]),
		transition ('two => three', [animate('1s ease')]),
		transition ('three => four', [animate('1s ease')]),
		transition ('four => five', [animate('1s ease')]),
		transition ('five => one', [animate('1s ease')])
	])	
	]
})

export class AppComponent{

		changeColor(){
		this.sectionState= (this.sectionState === 'inactive') ? 'active' : 'inactive' && (this.sectionState === 'active') ? 'third' : 'active' && (this.sectionState === 'third') ? 'inactive' : 'third';
		}
		
		rightSlide(){
			this.slideState = (this.slideState === 'one') ? 'two' : 'one' 
			&& (this.slideState === 'two') ? 'three' : 'two'
			&& (this.slideState === 'three') ? 'four' : 'three'
			&& (this.slideState === 'four') ? 'five' : 'four'
			&& (this.slideState === 'five') ? 'one' : 'five';
		}
			
		name: string;
		fname: string;
		email: string;
		message: string;
		endpoint : string;

		constructor( private http : Http) {
			this.http = http;
		}

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

	 title2 = "Développeur web";
	  section1 = "A propos";
	  sectionState: string = 'inactive';
	  section2 = "Formation";
	  section3 = "Compétences";
	  section4 = "Portfolio";
	  slideState: string = 'one';
	  section5 = "Contact";
		
	contact = new Contact();
  
	title : Title = {
	name: 'Eddy ROY,'
	}

	private data;

	ngOnInit(){
		this.http.get('http://eddyr.marmier.codeur.online/projects.php')
		.subscribe(result => this.data = result.json());
	}
}



		