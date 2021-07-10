
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonRouterOutlet,
} from '@ionic/react';
import { analytics, leaf, navigate } from 'ionicons/icons';

import Areas from './pages/Areas';
import Map from './pages/Map';
import Market from './pages/Market';

import { AREAS } from './mocks/areas';
import { Area } from './pages/Area';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/areas">
            <Areas />
          </Route>
          <Route exact path="/map">
            <Map />
          </Route>
          <Route path="/market">
            <Market />
          </Route>
          <Route exact path="/">
            <Redirect to="/areas" />
          </Route>
          {AREAS.map(item => (
            <Route
              path={`/areas/${item.did}`}
              key={item.did}
              render={() => {
                return <Area {...item} />;
              }}
            />
          ))}
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="areas" href="/areas">
            <IonIcon icon={leaf} />
            <IonLabel>Areas</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Map" href="/Map">
            <IonIcon icon={navigate} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Market" href="/Market">
            <IonIcon icon={analytics} />
            <IonLabel>Market</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
