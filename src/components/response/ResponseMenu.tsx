import {
  IonButton, IonButtons, IonContent, IonIcon, IonItem, IonLabel,
  IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  libraryOutline, librarySharp, bookmarkOutline,
  timeOutline, timeSharp, peopleOutline, peopleSharp,
  chatbubblesOutline, chatbubblesSharp,
  settingsOutline, settingsSharp, listOutline, listSharp
} from 'ionicons/icons';
import { arrowForwardOutline } from 'ionicons/icons';
import './ResponseMenu.css';
import { useTranslation } from "react-i18next";

interface page {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}



const labels = ['history1', 'history2', 'history3'];

const ResponseMenu: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const responsePages: page[] = [
    {
      title: t("response.settings"),
      url: '/response/settings',
      iosIcon: settingsOutline,
      mdIcon: settingsSharp
    },
    {
      title: t("response.tasks"),
      url: '/response/tasks',
      iosIcon: listOutline,
      mdIcon: listSharp
    },
    {
      title: t("response.members"),
      url: '/response/members',
      iosIcon: peopleOutline,
      mdIcon: peopleSharp
    },
    {
      title: t("response.timeline"),
      url: '/response/timeline',
      iosIcon: timeOutline,
      mdIcon: timeSharp
    },
    {
      title: t("response.resources"),
      url: '/library/topic',
      iosIcon: libraryOutline,
      mdIcon: librarySharp
    },
    {
      title: t("response.discussion"),
      url: '/forum',
      iosIcon: chatbubblesOutline,
      mdIcon: chatbubblesSharp
    },
  ];

  return (
    <IonMenu contentId="response" type="overlay" side="start">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>{t("response.response")}</IonListHeader>
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
          <IonListHeader>{t("response.history")}</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
          <IonMenuToggle autoHide>
            <IonItem lines="none">
              <IonButtons slot="start">
                <IonButton routerLink="/response/history">{t("response.more")}<IonIcon icon={arrowForwardOutline} size="small" /></IonButton>
              </IonButtons>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default ResponseMenu;
