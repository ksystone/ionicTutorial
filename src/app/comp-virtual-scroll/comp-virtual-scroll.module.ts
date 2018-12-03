import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CompVirtualScrollPage } from './comp-virtual-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: CompVirtualScrollPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompVirtualScrollPage]
})
export class CompVirtualScrollPageModule {}
