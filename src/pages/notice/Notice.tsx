import React, { useState, useEffect } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonSegment, IonSegmentButton, IonLabel,
  IonList, IonItemSliding, IonItem, IonItemOptions,
  IonItemOption, IonAvatar, IonImg, IonButtons, IonButton, IonBadge,
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';

const Notice: React.FC = () => {
  const { t } = useTranslation();
  const [notices, setNotices] = useState([{
    User: {
      nickname: "",
      headimgurl: "",
      type: "",
      description: "",
    },
    Task: {
      task_id: "",
      task_name: ""
    },
    type: "",
    action: "",
    status: "",
    created_at: ""
  }]);

  useEffect(() => {
    axios.get(`/notices?user_id=${localStorage.getItem("user_id")}`)
      .then(function (res) {
        console.log(res.data)
        setNotices(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("notice.notice")}</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink={"/notice/new"}>{t("notice.post")}</IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonSegment value="unread" onIonChange={e => console.log('Segment selected', e.detail.value)}>
            <IonSegmentButton value="unread">
              <IonLabel>{t("notice.unread")}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="read">
              <IonLabel>{t("notice.archive")}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {notices.map((notice, index) => {
            return (
              <IonItemSliding key={index}>
                <IonItem button routerLink={`/response/task/${notice.Task.task_id}`}>
                  <IonAvatar slot="start">
                    <IonImg src="/assets/task.png" />
                  </IonAvatar>
                  <IonLabel>
                    <h2>{t(`notice.${notice.type}`)}</h2>
                    <p>{notice.User.nickname + " " + t(`response.${notice.action + notice.type}`) + "：" + notice.Task.task_name}</p>
                  </IonLabel>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption onClick={() => { }}>{t("notice.archive")}</IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            )
          })}
          <IonItemSliding>
            <IonItem button routerLink={"/notice/detail/:id"}>
              <IonAvatar slot="start">
                <IonImg src="/assets/notice.png" />
              </IonAvatar>
              <IonLabel>
                <h2>{t("notice.system")}</h2>
                <p>卓明开源社长期招募开发者，设计师，新媒体编辑，新媒体运营...</p>
              </IonLabel>
              <IonBadge color="danger">1</IonBadge>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => { }}>{t("notice.archive")}</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button routerLink={"/notice/detail/:id"}>
              <IonAvatar slot="start">
                <IonImg src="/assets/task.png" />
              </IonAvatar>
              <IonLabel>
                <h2>{t("notice.task")}</h2>
                <p>卓明开源社长期招募开发者，设计师，新媒体编辑，新媒体运营...</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => { }}>{t("notice.archive")}</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button routerLink={"/notice/detail/:id"}>
              <IonAvatar slot="start">
                <IonImg src="/assets/group.png" />
              </IonAvatar>
              <IonLabel>
                <h2>{t("notice.group")}</h2>
                <p>卓明开源社长期招募开发者，设计师，新媒体编辑，新媒体运营...</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => { }}>{t("notice.archive")}</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItemSliding>
            <IonItem button routerLink={"/notice/detail/:id"}>
              <IonAvatar slot="start">
                <IonImg src="/assets/avatar.png" />
              </IonAvatar>
              <IonLabel>
                <h2>Faiyuching</h2>
                <p>卓明开源社长期招募开发者，设计师，新媒体编辑，新媒体运营...</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => { }}>{t("notice.archive")}</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Notice;
