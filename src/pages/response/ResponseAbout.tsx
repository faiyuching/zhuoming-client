import React from 'react';
import {
  IonContent, IonHeader, IonMenuButton, IonTextarea,
  IonPage, IonTitle, IonToolbar, IonSplitPane,
  IonButton, IonButtons, IonItem, IonLabel, IonInput,
} from '@ionic/react';
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
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.about")}</IonTitle>
            <IonButtons slot="end">
              <IonButton>{t("response.edit")}</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonItem>
            <IonLabel position="stacked">{t("response.response_name")}</IonLabel>
            <IonInput value={"text"}> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{t("response.organizer")}</IonLabel>
            <IonInput value={"text"}> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{t("response.disaster_type")}</IonLabel>
            <IonInput value={"text"}> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{t("response.disaster_level")}</IonLabel>
            <IonInput value={"text"}> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{t("response.begin_time")}</IonLabel>
            <IonInput value={"text"}> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{t("response.needs_time")}</IonLabel>
            <IonInput value={"text"}> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{t("response.end_time")}</IonLabel>
            <IonInput value={"text"}> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{t("response.need_people")}</IonLabel>
            <IonInput value={"text"}> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{t("response.statement")}</IonLabel>
            <IonTextarea autoGrow value={"text"}> </IonTextarea>
          </IonItem>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default ResponseAbout;
