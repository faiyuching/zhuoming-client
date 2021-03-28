import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonSegment, IonSegmentButton, IonLabel, IonButtons,
  IonList, IonItem, IonBackButton, IonToggle
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const UserSettings: React.FC = () => {
  const [checked1, setChecked1] = useState(true);
  const { t, i18n } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text={t("back")} defaultHref="/user" />
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
          <IonItem>
            <IonLabel>{t("response.notice_me_new_task")}</IonLabel>
            <IonToggle checked={checked1} onIonChange={e => setChecked1(e.detail.checked)} />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default UserSettings;
