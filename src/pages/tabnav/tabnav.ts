import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from './../home/home';
import { MorePage } from './../more/more';
import { OrderPage } from './../order/order';
import { NotificationPage } from './../notification/notification';
import { ProductPage } from './../product/product';

/**
 * Generated class for the TabnavPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabnav',
  templateUrl: 'tabnav.html'
})
export class TabnavPage {

  homeRoot = HomePage;
  orderRoot = OrderPage;
  productRoot = ProductPage;
  notificationRoot = NotificationPage;
  moreRoot = MorePage;


  constructor(public navCtrl: NavController) {}

}
