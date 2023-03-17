import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { v4 as uuidv4 } from 'uuid';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';  

const myGuid = uuidv4();

@Component({
  selector: 'app-selecionar-mapa',
  templateUrl: './selecionar-mapa.page.html',
  styleUrls: ['./selecionar-mapa.page.scss'],
})
export class SelecionarMapaPage {

  constructor(private router: Router) {}


  async checkPermission() {
    // check or request permission
    const status = await BarcodeScanner.checkPermission({ force: true });

    if (status.granted) {
      // the user granted permission
      return true;
    }

    return false;
  };



      // inicio do scan 
  async startScan() {
    // Check camera permission
    // exemplo simples
    await BarcodeScanner.checkPermission({ force: true });

    // make background of WebView transparent
    // note: sulficiente no ionic
    BarcodeScanner.hideBackground();

    const ionContent = document.querySelector('ion-content');
    if (ionContent) {
      ionContent.classList.remove('scanner-active');
    }

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    // if conteudo
    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
      this.router.navigate([result.content]); 
    }
  };

  async stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    const ionContent = document.querySelector('ion-content');
    if (ionContent) {
      ionContent.classList.remove('scanner-active');
    }
  };

  ionViewWillLeave(){
    this.stopScan()
  }

}
