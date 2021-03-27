import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  volumeHighOutline, libraryOutline, notificationsOutline,
  chatbubblesOutline, personOutline
} from 'ionicons/icons';
import Response from './pages/Response';
import ResponseAbout from './pages/response/ResponseAbout';
import ResponseMember from './pages/response/ResponseMember';
import ResponseTimeline from './pages/response/ResponseTimeline';
import Library from './pages/Library';
import Notice from './pages/Notice';
import Forum from './pages/Forum';
import User from './pages/User';
import UserSettings from './pages/user/UserSettings';

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
          <Route path="/response/about" component={ResponseAbout} exact={true} />
          <Route path="/response/member" component={ResponseMember} exact={true} />
          <Route path="/response/timeline" component={ResponseTimeline} exact={true} />
          <Route path="/library" component={Library} exact={true} />
          <Route path="/notice" component={Notice} exact={true} />
          <Route path="/forum" component={Forum} exact={true} />
          <Route path="/user" component={User} exact={true} />
          <Route path="/user/settings" component={UserSettings} exact={true} />
          <Route path="/" render={() => <Redirect to="/response" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="response" href="/response">
            <IonIcon icon={volumeHighOutline} size="small" />
            <IonLabel>响应</IonLabel>
          </IonTabButton>
          <IonTabButton tab="library" href="/library">
            <IonIcon icon={libraryOutline} size="small" />
            <IonLabel>资料库</IonLabel>
          </IonTabButton>
          <IonTabButton tab="notice" href="/notice">
            <IonIcon icon={notificationsOutline} size="small" />
            <IonLabel>通知</IonLabel>
          </IonTabButton>
          <IonTabButton tab="forum" href="/forum">
            <IonIcon icon={chatbubblesOutline} size="small" />
            <IonLabel>论坛</IonLabel>
          </IonTabButton>
          <IonTabButton tab="user" href="/user">
            <IonIcon icon={personOutline} size="small" />
            <IonLabel>我的</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
