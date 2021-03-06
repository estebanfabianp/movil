import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import {MyApp} from './app.component';
import { Camera } from '@ionic-native/camera';
import {HomePage} from '../pages/home/home';
import {RegistroPage} from '../pages/registro/registro';
import {PrincipalPage} from '../pages/principal/principal';
import {OlvidarContraPage} from '../pages/olvidar-contra/olvidar-contra'
import {ConectarProvider} from '../providers/conectar/conectar';
import {ReservaPage} from '../pages/reserva/reserva';
import {ConsultarPage} from '../pages/consultar/consultar';
import {MisReservasPage} from '../pages/mis-reservas/mis-reservas';
import {FileTransfer,FileUploadOptions,FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';


    

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        RegistroPage,
        PrincipalPage,
        OlvidarContraPage,
        ReservaPage,
        ConsultarPage,
        MisReservasPage

    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        RegistroPage,
        PrincipalPage,
        OlvidarContraPage,
        ReservaPage,
        ConsultarPage,
        MisReservasPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Camera,
        FileTransfer,
        File,
        FileTransferObject,
        
        
        
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ConectarProvider
    ]
})
export class AppModule {}
