import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonMenuButton,
  IonPage, IonTitle, IonToolbar, IonSplitPane, IonToggle,
  IonButtons, IonItem, IonLabel
} from '@ionic/react';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";

const ResponseSettings: React.FC = () => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(true);
  return (
    <IonSplitPane contentId="response">
      <ResponseMenu />
      <IonPage id="response">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{t("response.response")}</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.settings")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonItem>
            <IonLabel>有新任务时通知我</IonLabel>
            <IonToggle checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
          </IonItem>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default ResponseSettings;
