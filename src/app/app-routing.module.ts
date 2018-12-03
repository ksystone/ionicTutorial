import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'comp-action-sheet', loadChildren: './comp-action-sheet/comp-action-sheet.module#CompActionSheetPageModule' },
  { path: 'comp-alert', loadChildren: './comp-alert/comp-alert.module#CompAlertPageModule' },
  { path: 'comp-badge', loadChildren: './comp-badge/comp-badge.module#CompBadgePageModule' },
  { path: 'comp-button', loadChildren: './comp-button/comp-button.module#CompButtonPageModule' },
  { path: 'comp-card', loadChildren: './comp-card/comp-card.module#CompCardPageModule' },
  { path: 'comp-checkbox', loadChildren: './comp-checkbox/comp-checkbox.module#CompCheckboxPageModule' },
  { path: 'comp-datetime', loadChildren: './comp-datetime/comp-datetime.module#CompDatetimePageModule' },
  { path: 'comp-fab', loadChildren: './comp-fab/comp-fab.module#CompFabPageModule' },
  { path: 'comp-grid', loadChildren: './comp-grid/comp-grid.module#CompGridPageModule' },
  { path: 'comp-infinite-scroll', loadChildren: './comp-infinite-scroll/comp-infinite-scroll.module#CompInfiniteScrollPageModule' },
  { path: 'comp-input', loadChildren: './comp-input/comp-input.module#CompInputPageModule' },
  { path: 'comp-list', loadChildren: './comp-list/comp-list.module#CompListPageModule' },
  { path: 'comp-loading', loadChildren: './comp-loading/comp-loading.module#CompLoadingPageModule' },
  { path: 'comp-menu', loadChildren: './comp-menu/comp-menu.module#CompMenuPageModule' },
  { path: 'comp-modal', loadChildren: './comp-modal/comp-modal.module#CompModalPageModule' },
  { path: 'comp-nav', loadChildren: './comp-nav/comp-nav.module#CompNavPageModule' },
  { path: 'comp-popover', loadChildren: './comp-popover/comp-popover.module#CompPopoverPageModule' },
  { path: 'comp-range', loadChildren: './comp-range/comp-range.module#CompRangePageModule' },
  { path: 'comp-refresher', loadChildren: './comp-refresher/comp-refresher.module#CompRefresherPageModule' },
  { path: 'comp-searchbar', loadChildren: './comp-searchbar/comp-searchbar.module#CompSearchbarPageModule' },
  { path: 'comp-select', loadChildren: './comp-select/comp-select.module#CompSelectPageModule' },
  { path: 'comp-slides', loadChildren: './comp-slides/comp-slides.module#CompSlidesPageModule' },
  { path: 'comp-spinner', loadChildren: './comp-spinner/comp-spinner.module#CompSpinnerPageModule' },
  { path: 'comp-tabs', loadChildren: './comp-tabs/comp-tabs.module#CompTabsPageModule' },
  { path: 'comp-toast', loadChildren: './comp-toast/comp-toast.module#CompToastPageModule' },
  { path: 'comp-virtual-scroll', loadChildren: './comp-virtual-scroll/comp-virtual-scroll.module#CompVirtualScrollPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
