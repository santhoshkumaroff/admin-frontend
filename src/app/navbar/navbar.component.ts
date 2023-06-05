import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  myClass = 'sidebar close'
  dropdownOpen = false;
  items: MenuItem[] = [];
  primengConfig: any;
    
  
  ngOnInit() {
      this.items = [
          {label: 'Profile', icon: 'pi pi-user', command: () => {
          }},
          {label: 'Log out', icon: 'pi pi-arrow-left', command: () => {
          }}
      ];

  }
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  toggleSidebar(){
    if(this.myClass==="sidebar close"){
      this.myClass="sidebar";
    }

    else{
      this.myClass="sidebar close";
    }
  }
}
