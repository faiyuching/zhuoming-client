import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonSegment,
  IonToolbar, IonButtons, IonButton, IonImg, IonSegmentButton,
  IonItemGroup, IonItemSliding, IonLabel, IonAvatar,
  IonItemOptions, IonItemOption, IonItem, IonBackButton,
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const UserFollow: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonButton>
              <IonBackButton text="" defaultHref="/user" />
            </IonButton>
          </IonButtons>
          <IonTitle>{t("user.user")}</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSegment value="following" onIonChange={e => console.log('Segment selected', e.detail.value)}>
            <IonSegmentButton value="following">
              <IonLabel>正在关注</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="followers">
              <IonLabel>关注者</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItemGroup>
          <IonItemSliding>
            <IonItem button routerLink={"/notice/detail"}>
              <IonAvatar slot="start">
                <IonImg src="/assets/avatar.png" />
              </IonAvatar>
              <IonLabel>
                <h2>Faiyuching</h2>
                <p>一句话介绍</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => { }}>{t("notice.archive")}</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default UserFollow;
