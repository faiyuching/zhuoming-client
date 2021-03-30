import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonMenuButton, IonPage, IonTitle,
  IonToolbar, IonSplitPane, IonButtons, IonLabel, IonSegment,
  IonSegmentButton, IonButton, IonIcon, IonPopover, IonList, IonItem
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";
import ResponseBaseInfo from "../../components/response/ResponseBaseInfo"
import ResponseGroups from "../../components/response/ResponseGroups"
import ResponseJobs from "../../components/response/ResponseJobs"

const ResponseSettings: React.FC = () => {
  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });
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
            <IonTitle>{t("response.response")}</IonTitle>
            <IonButtons slot="end">
              <IonButton
                onClick={
                  (e: any) => {
                    e.persist();
                    setShowPopover({ showPopover: true, event: e })
                  }}
              >
                <IonIcon icon={addOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.settings")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonPopover
            cssClass='my-custom-class'
            event={popoverState.event}
            isOpen={popoverState.showPopover}
            onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
          >
            <IonList>
              <IonItem button>{t("response.add_groups")}</IonItem>
              <IonItem button>{t("response.add_jobs")}</IonItem>
            </IonList>
          </IonPopover>
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
