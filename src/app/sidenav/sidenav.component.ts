import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

     colorMode = 'lightMode';
    toggleMode(){
      if(this.colorMode ==='lightMode'){
        this.colorMode ='darkMode';
      }
      else{
        this.colorMode = 'lightMode';
      }
    }
}
