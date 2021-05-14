import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonSplitPane,
  IonTitle, IonToolbar, IonButton, IonButtons, IonMenuButton,
} from '@ionic/react';
import ResponseMenu from '../../components/response/ResponseMenu';
import MomentTaskCard from "../../components/response/MomentTaskCard"
import MomentMemberCard from "../../components/response/MomentMemberCard"
import MomentTalkCard from "../../components/response/MomentTalkCard"
import { useTranslation } from "react-i18next";

const Response: React.FC = () => {
  const { t } = useTranslation();

  if (!localStorage.getItem("response_id")) {
    window.location.href = "/response/history"
  }

  return (
    <IonSplitPane contentId="response">
      <ResponseMenu />
      <IonPage id="response">
        <IonHeader>
          <IonToolbar>
            <IonButtons>
              <IonButton slot="start">
                <IonMenuButton />
              </IonButton>
            </IonButtons>
            <IonTitle>{localStorage.getItem("response_name")}</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.moments")}</IonTitle>
            {/* <IonButtons slot="end">
              <IonButton>新手指引</IonButton>
            </IonButtons> */}
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <MomentTaskCard />
          <MomentMemberCard />
          <MomentTalkCard />
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default Response;
