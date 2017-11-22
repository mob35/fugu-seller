import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabnavPage } from './../pages/tabnav/tabnav';
import { HomePage } from '../pages/home/home';
import { MorePage } from '../pages/more/more';
import { OrderPage } from '../pages/order/order';
import { NotificationPage } from '../pages/notification/notification';
import { ProductPage } from '../pages/product/product';

@NgModule({
  declarations: [
    MyApp,
    TabnavPage,
    HomePage,
    MorePage,
    OrderPage,
    NotificationPage,
    ProductPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabnavPage,
    HomePage,
    MorePage,
    OrderPage,
    NotificationPage,
    ProductPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
