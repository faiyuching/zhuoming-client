import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { volumeHighOutline, folderOutline, notificationsOutline, chatbubblesOutline, personOutline } from 'ionicons/icons';
import Response from './pages/Response';
import Library from './pages/Library';
import Notice from './pages/Notice';
import Forum from './pages/Forum';
import User from './pages/User';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/response" component={Response} exact={true} />
          <Route path="/library" component={Library} exact={true} />
          <Route path="/notice" component={Notice} />
          <Route path="/forum" component={Forum} />
          <Route path="/user" component={User} />
          <Route path="/" render={() => <Redirect to="/response" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="response" href="/response">
            <IonIcon icon={volumeHighOutline} size="small" />
            <IonLabel>Response</IonLabel>
          </IonTabButton>
          <IonTabButton tab="library" href="/library">
            <IonIcon icon={folderOutline} size="small" />
            <IonLabel>Library</IonLabel>
          </IonTabButton>
          <IonTabButton tab="notice" href="/notice">
            <IonIcon icon={notificationsOutline} size="small" />
            <IonLabel>Notice</IonLabel>
          </IonTabButton>
          <IonTabButton tab="forum" href="/forum">
            <IonIcon icon={chatbubblesOutline} size="small" />
            <IonLabel>Forum</IonLabel>
          </IonTabButton>
          <IonTabButton tab="user" href="/user">
            <IonIcon icon={personOutline} size="small" />
            <IonLabel>User</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
