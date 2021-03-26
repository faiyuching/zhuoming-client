import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonAvatar,
  IonImg
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  flashOutline, flashSharp, bookmarkOutline, bookmarkSharp,
  documentTextOutline, documentSharp, personOutline, personSharp,
  peopleOutline, peopleSharp, settingsOutline, settingsSharp
} from 'ionicons/icons';
import './UserMenu.css';

interface page {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const userPages: page[] = [
  {
    title: 'Profile',
    url: '/user/profile',
    iosIcon: personOutline,
    mdIcon: personSharp
  },
  {
    title: 'Tasks',
    url: '/user/tasks',
    iosIcon: documentTextOutline,
    mdIcon: documentSharp
  },
  {
    title: 'Moments',
    url: '/user/resources',
    iosIcon: flashOutline,
    mdIcon: flashSharp
  },
  {
    title: 'Follow',
    url: '/user/follow',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: 'Bookmarks',
    url: '/user/timeline',
    iosIcon: bookmarkOutline,
    mdIcon: bookmarkSharp
  },
  {
    title: 'Settings',
    url: '/user/settings',
    iosIcon: settingsOutline,
    mdIcon: settingsSharp
  }
];

const UserMenu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="user" type="overlay" side="start">
      <IonContent>
        <IonList id="inbox-list">
          <IonItem lines="none">
            <IonAvatar slot="start">
              <IonImg src="https://ionicframework.com/docs/demos/api/list/avatar-leia.png" />
            </IonAvatar>
          </IonItem>
          <IonListHeader>Nickname</IonListHeader>
          <IonNote>@Username</IonNote>
          {userPages.map((page, index) => {
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
      </IonContent>
    </IonMenu>
  );
};

export default UserMenu;
