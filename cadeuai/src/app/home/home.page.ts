import { Camera, CameraResultType } from '@capacitor/camera';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  
  scanactive: boolean = false;
  isCameraOpen = false;
  public image_path =  '' // armazena local do arquivo da imagem

  // opções para dar zoom a imagem no slide
  sliderOpt = {
    zoom: {
      maxRatio: 3.5,
    }
  } 
  
  constructor(
    public router: RouterModule,
    private route : ActivatedRoute,
    private modalController: ModalController
  
  ) {}

  async checkPermission() { 
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) { 
        BarcodeScanner.openAppSettings();
        resolve(false);
      }
    });
  }

  async startScanner() {
    const allowed = await this.checkPermission();

    if (allowed) {
      this.scanactive = true
      BarcodeScanner.hideBackground();

      const result = await BarcodeScanner.startScan();
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      });
      const theActualPicture = image.dataUrl;

      if (result.hasContent) {
        this.scanactive = false;
        alert(result.content);
      } else {
        alert('NO DATA')
      }
    } else { 
      alert('NOT ALLOWED')
    }  
  }

  stopScanner() { 
    BarcodeScanner.stopScan();
    this.scanactive = false;
  }

  ionViewWillLeave() { 
    BarcodeScanner.stopScan();
    this.scanactive = false
  }

  ngOnInit() {
    // coleta o id da pagina e monstra a imagem inicial
    var id: any = String(this.route.snapshot.paramMap.get('id'))
    this.image_path = `assets/map-shopping/entry-${id}/entry${id}-inicio-${id}.png`
  }

  routeSelect(loja: string){
    // coleta o id da pagina e monstra a imagem da rota até o setor
    this.modalController.dismiss()
    var id: any = String(this.route.snapshot.paramMap.get('id'))
    this.image_path = `assets/map-shopping/entry-${id}/entry${id}-${loja}.png`
  }

  
  async takePicture() {
    // monstra a camera na tela
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });
  
    // Here you get the image as result.
    const theActualPicture = image.dataUrl;
  }
}
