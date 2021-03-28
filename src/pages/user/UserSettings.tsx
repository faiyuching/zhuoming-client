import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonSegment, IonSegmentButton, IonLabel, IonButtons,
  IonList, IonItem, IonBackButton
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const UserSettings: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" defaultHref="/user" />
          </IonButtons>
          <IonTitle>{t("user.settings")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonLabel>{t("user.language")}</IonLabel>
            <IonButtons slot="end">
              <IonSegment value={i18n.language} onIonChange={e => console.log('Segment selected', e.detail.value)}>
                <IonSegmentButton value="zh" onClick={() => { i18n.changeLanguage("zh"); }}>
                  <IonLabel>中文</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="en" onClick={() => { i18n.changeLanguage("en"); }}>
                  <IonLabel>English</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonButtons>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default UserSettings;
