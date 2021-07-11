import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';

// Photo Gallery Imports
import { camera, trash, close, save } from 'ionicons/icons';
import {
  IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
  IonCol, IonImg, IonActionSheet
} from '@ionic/react';
import { usePhotoGallery } from "../../hooks/usePhotoGallery";



const NewTree: React.FC = () => {

  const [height, setHeight] = useState<number>();
  const [circumference, setCircumference] = useState<number>();
  const { takePhoto, photos } = usePhotoGallery();




  const sendData = function () {

    let data = {
      height,
      circumference,
      treeType: 1,
      coordinate: {
        lat: 1.1,
        lng: 2.2
      }
    }
    console.log("sendData", data)

    fetch('http://localhost:5000/api/trees', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
      console.log("response", response)
      return response.json()
    }).then(json => {
      console.log("response json", json)
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonInput Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>Please add the tree metrics</IonItemDivider>

          <IonItem>
            <IonLabel position="floating">Tree height in Meter</IonLabel>
            <IonInput type="number" value={height} placeholder="20" onIonChange={e => setHeight(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Tree circumference in centimeter</IonLabel>
            <IonInput type="number" value={circumference} placeholder="60" onIonChange={e => setCircumference(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>

          <IonItemDivider>Please add a photo</IonItemDivider>
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
          <IonGrid>
            <IonRow>
              {photos.map((photo, index) => (
                <IonCol size="6" key={index}>
                  <IonImg src={photo.webviewPath} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
          <IonButton onClick={() => sendData()}>
            Send
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default NewTree