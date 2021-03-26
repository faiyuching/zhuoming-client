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
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  libraryOutline, librarySharp, bookmarkOutline,
  timeOutline, timeSharp, documentTextOutline, documentTextSharp,
  peopleOutline, peopleSharp, chatbubblesOutline, chatbubblesSharp,
  settingsOutline, settingsSharp
} from 'ionicons/icons';
import './LibraryMenu.css';

interface page {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const libraryPages: page[] = [
  {
    title: 'Geological',
    url: '/library/geological',
    iosIcon: documentTextOutline,
    mdIcon: documentTextSharp
  },
  {
    title: 'Hydrological',
    url: '/library/hydrological',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: 'Meteorological',
    url: '/library/meteorological',
    iosIcon: timeOutline,
    mdIcon: timeSharp
  },
  {
    title: 'Wildfires',
    url: '/library/wildfires',
    iosIcon: libraryOutline,
    mdIcon: librarySharp
  },
  {
    title: 'Epidemic',
    url: '/library/epidemic',
    iosIcon: chatbubblesOutline,
    mdIcon: chatbubblesSharp
  },
  {
    title: 'Others',
    url: '/library/others',
    iosIcon: settingsOutline,
    mdIcon: settingsSharp
  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const LibraryMenu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="library" type="overlay" side="start">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Sort</IonListHeader>
          <IonNote>slogan</IonNote>
          {libraryPages.map((page, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === page.url ? 'selected' : ''} routerLink={page.url} routerDirection="none" lines="none" detail={false}>
                  <IonLabel>{page.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Reading History</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default LibraryMenu;
