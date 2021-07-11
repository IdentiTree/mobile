import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer/ExploreContainer';
import NewTreeForm from '../components/trees/NewTreeForm';


const NewTree: React.FC = function() {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create Tree</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
          <NewTreeForm />
      </IonContent>
    </IonPage>
  );
};

export default NewTree;
