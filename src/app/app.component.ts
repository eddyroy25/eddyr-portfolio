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
			backgroundColor: '#586176',
			Color: '#2a395b'
		})),
		state('active', style ({
			backgroundColor: '#2a395b',
			Color: '#d0d6e2'
		})),
		state('third', style ({
			backgroundColor: 'green'
		})),
		
		transition ('inactive=>active', [animate('2s ease')]),
		transition ('active=>inactive', [animate('2s ease')]),
		transition ('active=>third', [animate('2s ease')]),
		transition ('third=>inactive', [animate('2s ease')])
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
	trigger('navTranslate', [
		transition ('void=> *',[
			style({ transform:'translateY(-100%)'}),
			animate('5s ease')
			]),
		transition ('*=> void',[
			style({ transform:'translateY(100%)'}),
			animate('5s ease')
			])
	])
	]
})

export class AppComponent{
	
	  title2 = "Webdeveloper";
	  section1 = "About me";
	  sectionState: string = 'inactive';
	  changeColor(){
		  this.sectionState= (this.sectionState === 'inactive') ? 'active' : 'inactive' && (this.sectionState === 'active') ? 'third' : 'active' && (this.sectionState === 'third') ? 'inactive' : 'third';
	  }
	  section2 = "Education";
	  section3 = "Skills";
	  section4 = "Portfolio";
	  section5 = "Contact";
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

