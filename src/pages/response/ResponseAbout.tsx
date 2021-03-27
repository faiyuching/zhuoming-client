import React from 'react';
import {
  IonContent, IonHeader, IonMenuButton, IonIcon,
  IonPage, IonTitle, IonToolbar, IonSplitPane,
  IonButton, IonButtons
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";

const ResponseAbout: React.FC = () => {
  const { t } = useTranslation();
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
            <IonButtons slot="end">
              <IonButton>
                <IonIcon icon={addOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.about")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          about
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default ResponseAbout;
