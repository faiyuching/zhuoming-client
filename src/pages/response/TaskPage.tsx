import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSplitPane,
  IonSegment, IonButtons, IonButton, IonLabel, IonBackButton,
  IonSegmentButton, IonModal, IonIcon, IonRadioGroup, IonListHeader,
  IonItem, IonAvatar, IonImg, IonRadio
} from '@ionic/react';
import ResponseMenu from '../../components/response/ResponseMenu';
import TaskBaseInfo from '../../components/response/TaskBaseInfo';
import TaskMembers from '../../components/response/TaskMembers';
import TaskSubmit from '../../components/response/TaskSubmit';
import { useTranslation } from "react-i18next";
import { closeOutline } from 'ionicons/icons';

const TaskPage: React.FC = () => {
  const [value, setValue] = useState('base_info')
  const { t } = useTranslation();
  const [showApplyList, setShowApplyList] = useState(false);
  return (
    <IonSplitPane contentId="response">
      <ResponseMenu />
      <IonPage id="response">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton text={t("back")} defaultHref="/response/tasks" />
            </IonButtons>
            <IonTitle>{t("response.response")}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => { setShowApplyList(true) }}>{t("response.invite")}</IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.task_detail")}</IonTitle>
            <IonButtons slot="end">
              <IonButton>{t("response.receive")}</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          {/* <ApplyList show={showApplyList} /> */}
          <IonModal isOpen={showApplyList} >
            <IonContent>
              <IonHeader>
                <IonToolbar>
                  <IonTitle>{t("response.response")}</IonTitle>
                  <IonButtons slot="end">
                    <IonButton onClick={() => { setShowApplyList(false) }}>
                      <IonIcon icon={closeOutline} />
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
                <IonToolbar>
                  <IonTitle size="large">{t("response.apply_list")}</IonTitle>
                  <IonButtons slot="end">
                    <IonButton>{t("response.invite")}</IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonRadioGroup>
                <IonListHeader>信息组</IonListHeader>
                <IonItem>
                  <IonAvatar slot="start">
                    <IonImg src="/assets/avatar.png" />
                  </IonAvatar>
                  <IonLabel>
                    <h2>Faiyuching</h2>
                    <p>正在进行中的任务：x个</p>
                  </IonLabel>
                  <IonRadio value="faiyuching" />
                </IonItem>
              </IonRadioGroup>
            </IonContent>
          </IonModal>
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
