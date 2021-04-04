import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonSplitPane,
  IonTitle, IonToolbar, IonButton, IonButtons, IonLabel, IonIcon,
  IonCard, IonCardHeader, IonCardSubtitle, IonAvatar, IonImg,
  IonCardTitle, IonItem, IonMenuButton, IonNote,
} from '@ionic/react';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";
import { notificationsOutline } from 'ionicons/icons';

const Response: React.FC = () => {
  const { t } = useTranslation();
  const [response, setResponse] = useState({
    response_id: "",
    response_name: "",
    response_slogan: "",
  });

  if (!localStorage.getItem("response_id")) {
    window.location.href = "/response/history"
  }

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
            <IonTitle>{response.response_name}</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">总览</IonTitle>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon color="danger" icon={notificationsOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>任务</IonCardSubtitle>
              <IonCardTitle>10</IonCardTitle>
            </IonCardHeader>
            <IonItem lines="none">
              <IonAvatar slot="start">
                <IonImg src="/assets/avatar.png" />
              </IonAvatar>
              <IonLabel>
                <h2>刚刚：完成任务</h2>
                <IonNote>搜集微博灾情信息</IonNote>
              </IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonAvatar slot="start">
                <IonImg src="/assets/avatar.png" />
              </IonAvatar>
              <IonLabel>
                <h2>一小时前：发布任务</h2>
                <p>搜集微博灾情信息</p>
              </IonLabel>
            </IonItem>
          </IonCard>
          <IonCard>
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
              {/* <IonCardTitle>20</IonCardTitle> */}
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
