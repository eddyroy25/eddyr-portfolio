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

import {
	Contact
} from './contact';

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
		onSubmit(value: any){
			console.log(value);
		}
	 title2 = "Webdeveloper";
	  section1 = "About me";
	  sectionState: string = 'inactive';
	  section2 = "Education";
	  section3 = "Skills";
	  section4 = "Portfolio";
	  section5 = "Contact";
		
		contact = new Contact();

	  name = 'Eddy';
	  age = '28';
	  hero: Hero = {
	  id: 1,
	  name: 'Hello'
	  };

	title : Title = {
	name: 'Eddy ROY,'
}
}
