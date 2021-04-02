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
import ResponseSettings from './pages/response/ResponseSettings';
import ResponseTasks from './pages/response/ResponseTasks';
import ResponseMembers from './pages/response/ResponseMembers';
import ResponseTimeline from './pages/response/ResponseTimeline';
import ResponseHistory from './pages/response/ResponseHistory';
import TaskPage from './pages/response/TaskPage';
import Library from './pages/library/Library';
import TopicPage from './pages/library/TopicPage';
import TopicNew from './pages/library/TopicNew';
import Recommend from './pages/library/Recommend';
import Notice from './pages/notice/Notice';
import NoticeDetail from './pages/notice/NoticeDetail';
import NoticeNew from './pages/notice/NoticeNew';
import Forum from './pages/forum/Forum';
import PostDetail from './pages/forum/PostDetail';
import PostNew from './pages/forum/PostNew';
import User from './pages/user/User';
import UserLogin from './pages/user/UserLogin';
import UserProfile from './pages/user/UserProfile';
import UserFollow from './pages/user/UserFollow';
import UserSettings from './pages/user/UserSettings';
import Signin from './pages/user/Signin';
import Signup from './pages/user/Signup';
import NotFound from './pages//NotFound';

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

// import axios from 'axios'

// 只运行一次
// let homePage = "/history"
// axios.get('/response/current')
//   .then(function (res) {
//     homePage = "tasks"
//     localStorage.setItem("response_id", res.data.response_id)
//     localStorage.setItem("response_name", res.data.response_name)
//     localStorage.setItem("response_slogan", res.data.slogan || "")
//   })
//   .catch(function (error) {
//     homePage = "history"
//   });

// console.log(navigator.userAgent.toLowerCase().indexOf('micromessenger') != -1)

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/404" component={NotFound} exact={true} />
          <Route path="/response/tasks" component={ResponseTasks} exact={true} />
          {/* <Route path="/response/tasks" component={ResponseTasks} exact={true} /> */}
          <Route path="/response/members" component={ResponseMembers} exact={true} />
          <Route path="/response/timeline" component={ResponseTimeline} exact={true} />
          <Route path="/response/settings" component={ResponseSettings} exact={true} />
          <Route path="/response/history" component={ResponseHistory} exact={true} />
          <Route path="/response/task/:id" component={TaskPage} exact={true} />
          <Route path="/library" component={Library} exact={true} />
          <Route path="/library/topic" component={TopicPage} exact={true} />
          <Route path="/library/topic/new" component={TopicNew} exact={true} />
          <Route path="/library/recommend" component={Recommend} exact={true} />
          <Route path="/notice" component={Notice} exact={true} />
          <Route path="/notice/new" component={NoticeNew} exact={true} />
          <Route path="/notice/detail/:id" component={NoticeDetail} exact={true} />
          <Route path="/forum" component={Forum} exact={true} />
          <Route path="/forum/post/:id" component={PostDetail} exact={true} />
          <Route path="/forum/post/new" component={PostNew} exact={true} />
          <Route path="/user" component={User} exact={true} />
          <Route path="/user/login" component={UserLogin} exact={true} />
          <Route path="/user/profile" component={UserProfile} exact={true} />
          <Route path="/user/follow" component={UserFollow} exact={true} />
          <Route path="/user/settings" component={UserSettings} exact={true} />
          <Route path="/user/signin" component={Signin} exact={true} />
          <Route path="/user/signup" component={Signup} exact={true} />
          <Route path="/response" render={() => <Redirect to={`/response/history`} />} exact={true} />
          <Route path="/" render={() => <Redirect to={`/response/history`} />} exact={true} />
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
