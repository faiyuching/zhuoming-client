import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonSegment,
  IonToolbar, IonButtons, IonButton, IonLabel, IonSegmentButton,
  IonBackButton, IonCard, IonCardContent,
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
              <IonBackButton text={t("back")} defaultHref="/user" />
            </IonButton>
          </IonButtons>
          <IonTitle>{t("user.follow")}</IonTitle>
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
        <IonCard href="https://github.com/zhuoming-info" target="blank">
          <IonCardContent>
            正在开发中，参与此开源项目请访问：https://github.com/zhuoming-info
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default UserFollow;
