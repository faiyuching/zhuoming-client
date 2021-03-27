import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle,
  IonToolbar, IonButtons, IonButton,
  IonSegment, IonSegmentButton, IonLabel,
  IonCard, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonCardContent, IonItem,
  IonImg, IonText, IonThumbnail
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const User: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("user.user")}</IonTitle>
          <IonButtons slot="end">
            <IonButton>更多</IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonItem lines="none">
            <IonThumbnail slot="start">
              <IonImg style={{ borderRadius: "50%" }} src="/assets/avatar.png" />
            </IonThumbnail>
            <IonLabel>
              <h1><strong>Faiyuching</strong></h1>
              <p>@faiyuching</p>
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonButtons slot="start">
              <IonButton size="small" color="medium"><IonText color="dark">{"123"}</IonText>{t("user.following")}</IonButton>
              <IonButton size="small" color="medium"><IonText color="dark">{"123"}</IonText>{t("user.followers")}</IonButton>
            </IonButtons>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTitle size="large">{t("user.tasks")}</IonTitle>
        <IonButtons slot="end">
          <IonSegment value="unfinished" onIonChange={e => console.log('Segment selected', e.detail.value)}>
            <IonSegmentButton value="unfinished">
              <IonLabel>{t("user.unfinished")}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="finished">
              <IonLabel>{t("user.finished")}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonButtons>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Group Name｜Job Name</IonCardSubtitle>
            <IonCardTitle>Task Name</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Task Content
            </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Group Name｜Job Name</IonCardSubtitle>
            <IonCardTitle>Task Name</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Task Content
            </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Group Name｜Job Name</IonCardSubtitle>
            <IonCardTitle>Task Name</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Task Content
            </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default User;
