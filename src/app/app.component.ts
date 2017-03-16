import { 	Component,
			Input,
			trigger,
			state,
		    style,
		    transition,
		    animate
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
})

export class AppComponent {
	
	title2 = "Webdeveloper";
	section1 = "About me";
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

