import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home', url: '/home', icon: 'home'
    },
    {
      title: 'List',url: '/list',icon: 'list'
    },
    {
      title: 'Comp-ActionSheet',url: '/comp-action-sheet',icon: 'menu'
    },
    {
      title: 'Comp-Alert',url: '/comp-alert',icon: 'alert'
    },
    {
      title: 'Comp-Badge',url: '/comp-badge',icon: 'paper-plane'
    },
    {
      title: 'Comp-Button',url: '/comp-button',icon: 'rose'
    },
    {
      title: 'Comp-Card',url: '/comp-card',icon: 'card'
    },
    {
      title: 'Comp-CheckBox',url: '/comp-checkbox',icon: 'checkbox'
    },
    {
      title: 'Comp-Datetime',url: '/comp-datetime',icon: 'calendar'
    },
    {
      title: 'Comp-FAB',url: '/comp-fab',icon: 'arrow-forward'
    },
    {
      title: 'Comp-Grid',url: '/comp-grid',icon: 'grid'
    },
    {
      title: 'Comp-Infinite-Scroll',url: '/comp-infinite-scroll',icon: 'infinite'
    },
    {
      title: 'Comp-Input',url: '/comp-input',icon: 'create'
    },
    {
      title: 'Comp-List',url: '/comp-list',icon: 'list'
    },
    {
      title: 'Comp-Loading',url: '/comp-loading',icon: 'refresh'
    },
    {
      title: 'Comp-Menu',url: '/comp-menu',icon: 'menu'
    },
    {
      title: 'Comp-Modal',url: '/comp-modal',icon: 'square'
    },
    {
      title: 'Comp-Nav',url: '/comp-nav',icon: 'redo'
    },
    {
      title: 'Comp-PopOver',url: '/comp-popover',icon: 'gift'
    },
    {
      title: 'Comp-Range',url: '/comp-range',icon: 'code'
    },
    {
      title: 'Comp-Refresher',url: '/comp-refresher',icon: 'refresh-circle'
    },
    {
      title: 'Comp-SearchBar',url: '/comp-searchbar',icon: 'search'
    },
    {
      title: 'Comp-Select',url: '/comp-select',icon: 'checkmark-circle-outline'
    },
    {
      title: 'Comp-Slides',url: '/comp-slides',icon: 'albums'
    },
    {
      title: 'Comp-Spinner',url: '/comp-spinner',icon: 'options'
    },
    {
      title: 'Comp-Tabs',url: '/comp-tabs',icon: 'folder'
    },
    {
      title: 'Comp-Toast',url: '/comp-toast',icon: 'chatbubbles'
    },
    {
      title: 'Comp-Virtual-Scroll',url: '/comp-virtual-scroll',icon: 'repeat'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
