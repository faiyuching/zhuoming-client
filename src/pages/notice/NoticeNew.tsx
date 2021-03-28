import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonList, IonItem, IonButtons, IonButton, IonBackButton,
  IonLabel, IonInput, IonTextarea,
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const NoticeNew: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonBackButton defaultHref="/notice" text="" />
            </IonButton>
          </IonButtons>
          <IonTitle>{t("forum.forum")}</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonTitle size="large">发布通知</IonTitle>
          <IonButtons slot="end">
            <IonButton>发布</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonLabel>发送给：</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">通知标题</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">通知内容</IonLabel>
            <IonTextarea autoGrow></IonTextarea>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default NoticeNew;
