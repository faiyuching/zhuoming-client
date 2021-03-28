import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSplitPane,
  IonSegment, IonButtons, IonButton, IonLabel, IonBackButton,
  IonSegmentButton, IonList, IonItem, IonAvatar, IonImg
} from '@ionic/react';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";

const TaskPage: React.FC = () => {
  const [value, setValue] = useState('base_info')
  const { t } = useTranslation();
  return (
    <IonSplitPane contentId="response">
      <ResponseMenu />
      <IonPage id="response">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton text="" />
            </IonButtons>
            <IonTitle>{t("response.response")}</IonTitle>
            <IonButtons slot="end">
              <IonButton routerLink={"/response/applylist"}>{t("response.invite")}</IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.task_detail")}</IonTitle>
            <IonButtons slot="end">
              <IonSegment value={value} onIonChange={e => setValue(e.detail.value!)}>
                <IonSegmentButton value="base_info">
                  <IonLabel>{t("response.base_info")}</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="members">
                  <IonLabel>{t("response.task_recipient")}</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonList>
            <IonItem button routerLink={'/user'}>
              <IonAvatar slot="start">
                <IonImg src="/assets/avatar.png" />
              </IonAvatar>
              <IonLabel>
                <h2>Faiyuching</h2>
                <p>正在进行中的任务：x个</p>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default TaskPage;
