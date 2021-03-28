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
              <IonBackButton defaultHref="/notice" text={t("back")} />
            </IonButton>
          </IonButtons>
          <IonTitle>{t("notice.notice")}</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonTitle size="large">{t("notice.post_notice")}</IonTitle>
          <IonButtons slot="end">
            <IonButton>{t("notice.post")}</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonLabel>{t("notice.to")}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{t("notice.notice_title")}</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{t("notice.notice_content")}</IonLabel>
            <IonTextarea autoGrow></IonTextarea>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default NoticeNew;
