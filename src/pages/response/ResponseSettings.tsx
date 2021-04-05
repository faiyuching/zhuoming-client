import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonMenuButton, IonPage, IonTitle,
  IonToolbar, IonSplitPane, IonButtons, IonLabel, IonSegment,
  IonSegmentButton, IonButton, IonAlert
} from '@ionic/react';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";
import ResponseBaseInfo from "../../components/response/ResponseBaseInfo"
import ResponseGroups from "../../components/response/ResponseGroups"
import ResponseJobs from "../../components/response/ResponseJobs"
import axios from 'axios';

const ResponseSettings: React.FC = () => {
  const [value, setValue] = useState('base_info')
  const { t } = useTranslation();
  const [endConfirm, setEndConfirm] = useState(false);
  const endResponse = () => {
    localStorage.removeItem("response_id")
    localStorage.removeItem("response_name")
    localStorage.removeItem("response_slogan")
    axios.put(`/response/${localStorage.getItem("response_id")}`, { end_time: Date.now() })
      .then(function (res) {
        localStorage.removeItem("response_id")
        localStorage.removeItem("response_name")
        localStorage.removeItem("response_slogan")
        window.location.href = "/response"
      })
      .catch(function (error) {
        console.log(error);
      });
  }
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
            <IonButtons slot="end">
              <IonButton onClick={() => setEndConfirm(true)} color="danger">结束响应</IonButton>
              <IonAlert
                isOpen={endConfirm}
                onDidDismiss={() => setEndConfirm(false)}
                header={t("response.end_confirm")}
                message={t("response.end_message")}
                buttons={[
                  {
                    text: t("response.okay"),
                    handler: () => { endResponse() }
                  },
                  {
                    text: t("response.cancel"),
                    role: 'cancel',
                    handler: blah => {
                      console.log('Confirm Cancel: blah');
                    }
                  }
                ]}
              />
            </IonButtons>
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
