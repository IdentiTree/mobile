import React from 'react';
import Map from './Map';

import { useIonViewWillEnter, useIonLoading, IonButton, IonLoading } from "@ionic/react";


const MapView = function () {

  const [loaded, isLoading] = React.useState(true)

  const [present] = useIonLoading();

  const [showLoading, setShowLoading] = React.useState(true);

  setTimeout(() => {
  }, 1000);
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
      <IonButton
        expand="block"
        onClick={() => present('Loading', 2000, 'dots')}
      >
        Show Loading using params
      </IonButton>
      {loaded ? (
        <p>loading</p>
      ) : (
        <Map />
      )}
    </div>

  )
}

export default MapView