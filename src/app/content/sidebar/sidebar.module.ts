import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { SidebarItemGroupComponent } from './sidebar-item-group/sidebar-item-group.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [SidebarComponent, SidebarItemComponent, SidebarItemGroupComponent, SidebarNavComponent],
  exports: [SidebarComponent, SidebarItemComponent, SidebarItemGroupComponent, SidebarNavComponent]
})
export class SidebarModule { }
