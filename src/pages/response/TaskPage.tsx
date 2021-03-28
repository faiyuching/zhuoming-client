import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSplitPane,
  IonSegment, IonButtons, IonButton, IonLabel, IonBackButton,
  IonSegmentButton,
} from '@ionic/react';
import ResponseMenu from '../../components/response/ResponseMenu';
import TaskBaseInfo from '../../components/response/TaskBaseInfo';
import TaskMembers from '../../components/response/TaskMembers';
import TaskSubmit from '../../components/response/TaskSubmit';
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
              <IonBackButton text="" defaultHref="/response/tasks" />
            </IonButtons>
            <IonTitle>{t("response.response")}</IonTitle>
            <IonButtons slot="end">
              <IonButton routerLink="/response/applylist">{t("response.invite")}</IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.task_detail")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonSegment value={value} onIonChange={e => setValue(e.detail.value!)}>
            <IonSegmentButton value="base_info">
              <IonLabel>{t("response.base_info")}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="task_recipient">
              <IonLabel>{t("response.task_recipient")}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="task_submit">
              <IonLabel>{t("response.task_submit")}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {value === "base_info" && <TaskBaseInfo />}
          {value === "task_recipient" && <TaskMembers />}
          {value === "task_submit" && <TaskSubmit />}
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default TaskPage;
