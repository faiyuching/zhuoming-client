import React from 'react';
import {
  IonContent, IonHeader, IonMenuButton, IonIcon,
  IonPage, IonTitle, IonToolbar, IonSplitPane,
  IonButton, IonButtons, IonItem, IonLabel, IonInput
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";

const ResponseGroup: React.FC = () => {
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
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.group")}</IonTitle>
            <IonButtons slot="end">
              <IonButton>添加</IonButton>
              <IonButton>编辑</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonItem detail>
            <IonLabel position="stacked">信息组</IonLabel>
            introduction
          </IonItem>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default ResponseGroup;
