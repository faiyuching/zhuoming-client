import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonMenuButton, IonPage, IonTitle,
  IonToolbar, IonSplitPane, IonButtons, IonLabel, IonSegment, IonAlert,
  IonSegmentButton, IonButton, IonIcon, IonPopover, IonList, IonItem
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";
import ResponseBaseInfo from "../../components/response/ResponseBaseInfo"
import ResponseGroups from "../../components/response/ResponseGroups"
import ResponseJobs from "../../components/response/ResponseJobs"

const ResponseSettings: React.FC = () => {
  const [value, setValue] = useState('base_info')
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
            <IonTitle>{localStorage.getItem("response_name")}</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.settings")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonSegment value={value} onIonChange={e => setValue(e.detail.value!)}>
            <IonSegmentButton value="base_info">
              <IonLabel>{t("response.base_info")}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="groups">
              <IonLabel>{t("response.groups")}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="jobs">
              <IonLabel>{t("response.jobs")}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {value === "base_info" && <ResponseBaseInfo />}
          {value === "groups" && <ResponseGroups />}
          {value === "jobs" && <ResponseJobs />}
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default ResponseSettings;
