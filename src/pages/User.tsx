import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle,
  IonToolbar, IonButtons, IonButton,
  IonSegment, IonSegmentButton, IonLabel,
  IonSplitPane, IonMenuButton, IonCard,
  IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonCardContent
} from '@ionic/react';
import UserMenu from '../components/user/UserMenu';
import { useTranslation } from "react-i18next";

const User: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonSplitPane contentId="user">
      <UserMenu />
      <IonPage id="user">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton>
                <IonMenuButton />
              </IonButton>
            </IonButtons>
            <IonTitle>{t("user.user")}</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("user.tasks")}</IonTitle>
            <IonButtons slot="end">
              <IonSegment value="unfinished" onIonChange={e => console.log('Segment selected', e.detail.value)}>
                <IonSegmentButton value="unfinished">
                  <IonLabel>{t("user.unFinished")}</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="finished">
                  <IonLabel>{t("user.finished")}</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
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
    </IonSplitPane>

  );
};

export default User;
