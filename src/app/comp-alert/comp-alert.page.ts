import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertInput } from '@ionic/core';

@Component({
  selector: 'app-comp-alert',
  templateUrl: './comp-alert.page.html',
  styleUrls: ['./comp-alert.page.scss'],
})
export class CompAlertPage implements OnInit {
  alert : HTMLIonAlertElement = null;
  constructor(public alertController: AlertController) {}

  ngOnInit() {
  }

  async presentAlertTest() {
    this.alert = await this.alertController.create({
      header: 'Alert Header',
      subHeader: 'alert sub header',
      message: 'alert message.',
      mode : "md", //"ios","md"
      animated : true,      
      backdropDismiss :  true, 
      translucent : true, // 반투명한
      keyboardClose : false,
      cssClass: '', //class이름을 space로 분리해서 작성 
      //enterAnimation : AnimationBuilder 
      //leaveAnimation : AnimationBuilder 
      //overlayIndex : number

      // button : text, option(handler, role )
      // role : cancel ( 항상 아래에 나타나며, backdrop 클릭시 실행)
      // handler : false return하면 Action Sheet 닫히지 않음.
      buttons: [ 
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah', blah);
          }
        }, 
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ],

      // input : name, type, id, value, placeholder, label, min, max, checked, disabled, handler
      // type : TextFieldTypes( 'date' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' | 'time' ) | 'radio' | 'checkbox'
      // TextFieldTypes, radio, checkbox가 같이 사용될 수 없다.
      // handler는  'radio' | 'checkbox'에서만 사용가능, radio를 선택하거나, checkbox를 토글할 때 실행됨.
      inputs: [
        {
          name: 'name1',
          type: 'text',
          id: 'name1-id',
          value: 'hello',
          placeholder: 'Place Holder 1',
          handler : (input: AlertInput) =>{
            console.log('input1:',input);
          } 
        },
        {
          name: 'name2',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        {
          name: 'name33',
          value: 'aaa',
          type: 'email',
          placeholder: '이메일을 입력하세요.',
          handler : (input: AlertInput) =>{
            console.log('input3:',input);
          } 
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        {
          name: 'name5',
          type: 'number',
          min: -5,
          max: 10
        }
      ],
    });

    // Method : dismiss(), onDidDismiss(), onWillDismiss(), present()
    this.alert.style.cssText = "--min-width:400px;--background: #ff0000;--max-height: 500px;"
    await this.alert.present();
  }


  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2',
          handler : (input: AlertInput) =>{
            console.log('radio2:',input);
          } 
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true,
          handler : (input: AlertInput) =>{
            console.log('checkbox1:',input);
          } 
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2'
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3'
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4'
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5'
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
