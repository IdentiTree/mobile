import React from 'react';
import Map from './Map';

import { useIonViewWillEnter, useIonLoading, IonButton, IonLoading, IonItem, IonLabel  } from "@ionic/react";


const MapView = function () {

  const [loaded, isLoading] = React.useState(true)

  const [present] = useIonLoading();

  const [showLoading, setShowLoading] = React.useState(true);

  useIonViewWillEnter(() => {
    setShowLoading(false);
    isLoading(false);

  });

  return (
    <div>

      <IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Please wait...'}
        duration={5000}
      />

      <IonItem routerLink="/trees/new">
            <IonLabel>Add new tree</IonLabel>
      </IonItem>
      {loaded ? (
        <p>loading</p>
      ) : (
        <Map />
      )}
    </div>

  )
}

export default MapView