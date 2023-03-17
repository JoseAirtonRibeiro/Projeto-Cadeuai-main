import { Injectable } from '@angular/core';
// import { maps } from '../modal/maps.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { Firestore, collectionData, collection} from '@angular/fire/firestore';
import { getStorage, ref, getDownloadURL} from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

    // private firestore: Firestore
    constructor() {}

    // getmaps(): Observable<maps[]> {
    //   const contactsCollection = collection(this.firestore, 'maps');
    //   // this method returns a stream of documents mapped to their payload and id
    //   return collectionData(contactsCollection, {idField: 'id'})
    //   .pipe(
    //     map(contacts => contacts as maps[])
    //   );
    // }
  
    getmapsimages() {
      const storage = getStorage();
      getDownloadURL(ref(storage, 'mapa_shopping/Ponto_de_inicio(P4).png')).then((url) => {
          
          const xhr = new XMLHttpRequest()
          xhr.responseType = 'blob'
          xhr.onload = (event) => { const blob = xhr.response }
          xhr.open('GET', url)
          xhr.send()
        })
        .catch((error) => {
          switch (error.code) {
            case 'storage/object-not-found':
              
              break;
            case 'storage/unauthorized':
              console.log('User doesnt have permission to access the object')
              break;
            case 'storage/canceled':
              console.log('User canceled the upload')
              break;
            case 'storage/unknown':
              console.log('Unknown error occurred, inspect the server response')
              break;
          }
        })
      }
}
