import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  

  })
     /* selector: 'app',
    template: `
      <!-- Container for sidebar(s) + page content -->
      <ng-sidebar-container>
   
        <!-- A sidebar -->
        <ng-sidebar [(opened)]="_opened">
          <p>Sidebar contents</p>
        </ng-sidebar>
   
        <!-- Page content -->
        <div ng-sidebar-content>
          <button (click)="_toggleSidebar()">Toggle sidebar</button>
        </div>
   
      </ng-sidebar-container>
    `
  })*/

export class AppComponent {
    private toggleSideBar() {
      document.getElementById('sidebar').classList.toggle('expanded');
    }

<<<<<<< HEAD
=======
  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  constructor() {

  }
>>>>>>> f14c721cedf0aeb3c362576800c9b3e6912e0cf8
}
