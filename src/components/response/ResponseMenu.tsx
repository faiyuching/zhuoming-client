import {
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonToolbar,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  libraryOutline, librarySharp, bookmarkOutline,
  timeOutline, timeSharp, documentTextOutline, documentTextSharp,
  peopleOutline, peopleSharp, chatbubblesOutline, chatbubblesSharp,
  settingsOutline, settingsSharp
} from 'ionicons/icons';
import { arrowForwardOutline } from 'ionicons/icons';
import './ResponseMenu.css';

interface page {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const responsePages: page[] = [
  {
    title: 'About',
    url: '/response/:id/about',
    iosIcon: documentTextOutline,
    mdIcon: documentTextSharp
  },
  {
    title: 'Groups',
    url: '/response/:id/groups',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: 'Timeline',
    url: '/response/:id/timeline',
    iosIcon: timeOutline,
    mdIcon: timeSharp
  },
  {
    title: 'Resources',
    url: '/response/:id/resources',
    iosIcon: libraryOutline,
    mdIcon: librarySharp
  },
  {
    title: 'Discussion',
    url: '/response/:id/discussion',
    iosIcon: chatbubblesOutline,
    mdIcon: chatbubblesSharp
  },
  {
    title: 'Settings',
    url: '/response/:id/settings',
    iosIcon: settingsOutline,
    mdIcon: settingsSharp
  }
];

const labels = ['Family', 'Friends', 'Notes'];

const ResponseMenu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="response" type="overlay" side="start">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Response</IonListHeader>
          <IonNote>slogan</IonNote>
          {responsePages.map((page, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === page.url ? 'selected' : ''} routerLink={page.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={page.iosIcon} md={page.mdIcon} />
                  <IonLabel>{page.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>History</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
          <IonItem lines="none">
            <IonButtons slot="start">
              <IonButton>more<IonIcon icon={arrowForwardOutline} size="small" /></IonButton>
            </IonButtons>
          </IonItem>
          <IonToolbar>
          </IonToolbar>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default ResponseMenu;
