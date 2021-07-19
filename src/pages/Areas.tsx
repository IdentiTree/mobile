import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useEffect } from 'react';
import { Area } from '../components/Area/Area';
import { useIdentity } from '../hooks/useIdentity';
import { AREAS } from '../mocks/areas';

const Areas: React.FC = () => {

  const {keyPair, didDocument, generateDid} = useIdentity();

  useEffect(() => {
    if (!keyPair) {
      generateDid();
    }  
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Areas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Areas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {AREAS.map(area => (
            <Area
              key={area.did}
              did={area.did}
              name={area.name}
              type={area.type.name}
              description={area.description}
              image={area.image}
            />
          ))}
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Areas;
