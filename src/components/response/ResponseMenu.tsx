import {
  IonButton, IonButtons, IonContent, IonIcon, IonItem, IonLabel,
  IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  libraryOutline, librarySharp, bookmarkOutline,
  timeOutline, timeSharp, peopleOutline, peopleSharp,
  chatbubblesOutline, chatbubblesSharp,
  settingsOutline, settingsSharp, listOutline, listSharp,
  homeOutline, homeSharp
} from 'ionicons/icons';
import { arrowForwardOutline } from 'ionicons/icons';
import './ResponseMenu.css';
import { useTranslation } from "react-i18next";
import axios from 'axios';

interface page {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const ResponseMenu: React.FC = () => {
  const [responses, setResponses] = useState([{ id: "", response_name: "" }]);

  useEffect(() => {
    axios.get('/responses')
      .then(function (res) {
        const responseList = res.data
        responseList.pop()
        setResponses(responseList)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  const location = useLocation();
  const { t } = useTranslation();
  const responsePages: page[] = [
    {
      title: t("response.home"),
      url: `/response/home`,
      iosIcon: homeOutline,
      mdIcon: homeSharp
    },
    {
      title: t("response.settings"),
      url: `/response/settings`,
      iosIcon: settingsOutline,
      mdIcon: settingsSharp
    },
    {
      title: t("response.tasks"),
      url: `/response/tasks`,
      iosIcon: listOutline,
      mdIcon: listSharp
    },
    {
      title: t("response.members"),
      url: `/response/members`,
      iosIcon: peopleOutline,
      mdIcon: peopleSharp
    },
    {
      title: t("response.timeline"),
      url: `/response/timeline`,
      iosIcon: timeOutline,
      mdIcon: timeSharp
    },
    {
      title: t("response.resources"),
      url: `/library?response_id=${localStorage.getItem("response_id")}`,
      iosIcon: libraryOutline,
      mdIcon: librarySharp
    },
    {
      title: t("response.discussion"),
      url: `/forum?response_id=${localStorage.getItem("response_id")}`,
      iosIcon: chatbubblesOutline,
      mdIcon: chatbubblesSharp
    },
  ];

  return (
    <IonMenu contentId="response" type="overlay" side="start">
      <IonContent>
        {localStorage.getItem("response_id") &&
          <IonList id="inbox-list">
            <IonListHeader>{localStorage.getItem("response_name")}</IonListHeader>
            <IonNote>{localStorage.getItem("response_slogan")}</IonNote>
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
        }
        <IonList id="labels-list">
          <IonListHeader>{t("response.history")}</IonListHeader>
          {responses.length === 0 ? (
            <IonItem lines="none">
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>暂无历史任务</IonLabel>
            </IonItem>
          ) : responses.map((response, index) => {
            return (
              <IonItem lines="none" key={index}>
                <IonIcon slot="start" icon={bookmarkOutline} />
                <IonLabel>{response.response_name}</IonLabel>
              </IonItem>
            )
          })}
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
