import {
  IonContent, IonIcon, IonItem, IonItemDivider, IonLabel,
  IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote,
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
import { useTranslation } from "react-i18next";

interface page {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const LibraryMenu: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const libraryPages: page[] = [
    {
      title: t("library.geological"),
      url: '/library?sort=geological',
      iosIcon: documentTextOutline,
      mdIcon: documentTextSharp
    },
    {
      title: t("library.hydrological"),
      url: '/library?sort=hydrological',
      iosIcon: peopleOutline,
      mdIcon: peopleSharp
    },
    {
      title: t("library.meteorological"),
      url: '/library?sort=meteorological',
      iosIcon: timeOutline,
      mdIcon: timeSharp
    },
    {
      title: t("library.climate"),
      url: '/library?sort=climate',
      iosIcon: libraryOutline,
      mdIcon: librarySharp
    },
    {
      title: t("library.ecological"),
      url: '/library?sort=ecological',
      iosIcon: chatbubblesOutline,
      mdIcon: chatbubblesSharp
    },
    {
      title: t("library.space"),
      url: '/library?sort=space',
      iosIcon: chatbubblesOutline,
      mdIcon: chatbubblesSharp
    },
    {
      title: t("library.others"),
      url: '/library?sort=others',
      iosIcon: settingsOutline,
      mdIcon: settingsSharp
    }
  ];

  return (
    <IonMenu contentId="library" type="overlay" side="start">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>{t("library.sort")}</IonListHeader>
          <IonNote></IonNote>
          <IonItemDivider>{t("library.disaster")}</IonItemDivider>
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
          <IonListHeader>{t("library.history")}</IonListHeader>
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
