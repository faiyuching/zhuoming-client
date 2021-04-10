import React, { useState, useEffect } from 'react';
import {
  IonContent, IonHeader, IonPage, IonSplitPane,
  IonTitle, IonToolbar, IonButton, IonButtons, IonLabel, IonIcon,
  IonCard, IonCardHeader, IonCardSubtitle, IonAvatar, IonImg,
  IonCardTitle, IonItem, IonMenuButton, IonNote,
} from '@ionic/react';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";
import axios from 'axios';

const Response: React.FC = () => {
  const { t } = useTranslation();
  const [moments, setMoments] = useState([{
    User: {
      nickname: "",
      headimgurl: "",
      type: "",
      description: "",
    },
    Task: {
      task_name: ""
    },
    type: "",
    action: "",
    created_at: ""
  }]);

  if (!localStorage.getItem("response_id")) {
    window.location.href = "/response/history"
  }

  useEffect(() => {
    axios.get(`/moments?response_id=${localStorage.getItem("response_id")}`)
      .then(function (res) {
        console.log(res.data)
        setMoments(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return (
    <IonSplitPane contentId="response">
      <ResponseMenu />
      <IonPage id="response">
        <IonHeader>
          <IonToolbar>
            <IonButtons>
              <IonButton slot="start">
                <IonMenuButton />
              </IonButton>
            </IonButtons>
            <IonTitle>{localStorage.getItem("response_name")}</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.moments")}</IonTitle>
            <IonButtons slot="end">
              <IonButton>新手指引</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonCard routerLink={"/response/tasks"}>
            <IonCardHeader>
              <IonCardSubtitle>任务</IonCardSubtitle>
              <IonCardTitle>10</IonCardTitle>
            </IonCardHeader>
            {moments.map((moment, index) => {
              return (
                <IonItem lines="none" key={index}>
                  <IonAvatar slot="start">
                    <IonImg src={moment.User.headimgurl} />
                  </IonAvatar>
                  <IonLabel>
                    <h2>{moment.User.nickname + " " + t(`response.${moment.action + moment.type}`) + "：" + moment.Task.task_name}</h2>
                    <p>{moment.created_at.split(".")[0].replace("T", " ")}</p>
                  </IonLabel>
                </IonItem>
              )
            })}
          </IonCard>
          <IonCard routerLink={"/response/members"}>
            <IonCardHeader>
              <IonCardSubtitle>成员</IonCardSubtitle>
              <IonCardTitle>20</IonCardTitle>
            </IonCardHeader>
            <IonItem lines="none">
              <IonAvatar slot="start">
                <IonImg src="/assets/avatar.png" />
              </IonAvatar>
              <IonLabel>
                <h2>刚刚：发布任务</h2>
                <p>搜集微博灾情信息</p>
              </IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonAvatar slot="start">
                <IonImg src="/assets/avatar.png" />
              </IonAvatar>
              <IonLabel>
                <h2>刚刚：发布任务</h2>
                <p>搜集微博灾情信息</p>
              </IonLabel>
            </IonItem>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>讨论</IonCardSubtitle>
              <IonCardTitle>5</IonCardTitle>
            </IonCardHeader>
            <IonItem lines="none">
              <IonAvatar slot="start">
                <IonImg src="/assets/avatar.png" />
              </IonAvatar>
              <IonLabel>
                <h2>刚刚：提问</h2>
                <p>请问哪里可以找到XXX</p>
              </IonLabel>
            </IonItem>
          </IonCard>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default Response;
