import React from 'react';
import {
  IonContent, IonHeader, IonPage,
  IonTitle, IonToolbar, IonButton, IonButtons,
  IonCard, IonBackButton,
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const ResponseHistory: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonBackButton text={t("back")} />
            </IonButton>
          </IonButtons>
          <IonTitle>404</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>没有此页面</IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ResponseHistory;
