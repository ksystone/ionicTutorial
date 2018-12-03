import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-comp-action-sheet',
  templateUrl: './comp-action-sheet.page.html',
  styleUrls: ['./comp-action-sheet.page.scss'],
})
export class CompActionSheetPage implements OnInit, OnDestroy {
  
  actionSheet: HTMLIonActionSheetElement = null;
  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  
  ngOnDestroy(): void {
    //if( this.actionSheet != null )
      //this.actionSheet.dismiss()
  }
  async presentActionSheet() {
    this.actionSheet = await this.actionSheetController.create({
      header: 'Albums(Header)',
      subHeader : 'subHeader',
      mode : "md", //"ios","md"
      animated : true,      
      backdropDismiss :  true, 
      translucent : true, // 반투명한
      keyboardClose : false,
      cssClass: '', //class이름을 space로 분리해서 작성 
      //enterAnimation : AnimationBuilder 
      //leaveAnimation : AnimationBuilder 
      //overlayIndex : number

      // button : text, option(handler, role, icon)
      // role : destructive( 제일 위에 작성함 ), cancel ( 항상 아래에 나타나며, backdrop 클릭시 실행)
      // handler : false return하면 Action Sheet 닫히지 않음.
      buttons: [{
        text: 'Delete',
        role: 'destructive', // role : 
        icon: 'trash',
        cssClass: '',
        handler: () => {
          console.log('Delete clicked');
          return false;
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    
    // Method : dismiss(), onDidDismiss(), onWillDismiss(), present() 
    this.actionSheet.style.cssText = "--max-width:450px;--width: 300px;"
    await this.actionSheet.present();
  }
}
