import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonList, IonListHeader, IonItem, IonButtons, IonButton, IonBackButton,
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const NoticeDetail: React.FC = () => {
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
          <IonTitle size="large">通知类型</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonListHeader>通知标题</IonListHeader>
          <IonItem lines="none">
            <p>通知内容</p>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default NoticeDetail;
