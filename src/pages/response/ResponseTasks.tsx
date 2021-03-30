import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonMenuButton, IonPage, IonIcon,
  IonTitle, IonToolbar, IonSplitPane, IonButton, IonButtons,
  IonSegment, IonSegmentButton, IonLabel, IonCard, IonCardHeader,
  IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonItemDivider
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";
import ResponseMembersPicker from "../../components/response/ResponseMembersPicker"
import axios from 'axios';

export interface ISessionTime {
  weekday: string;
  period: string;
}

const ResponseTasks: React.FC = () => {
  const [tasks, setTasks] = useState([
    {
      id: "",
      task_name: "",
      description: "",
      Group: {
        group_name: ""
      },
      Job: {
        job_name: ""
      }
    }
  ]);
  const { t } = useTranslation();
  const [pickerIsOpen, setPickerIsOpen] = useState(false);
  const [sessionTime, setSessionTime] = useState<ISessionTime | undefined>(
    undefined
  );

  useEffect(() => {
    axios.get(`/${localStorage.getItem("res_id")}/tasks`)
      .then(function (res) {
        setTasks(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

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
                {/* {t("response.create_task")} */}
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.tasks")}</IonTitle>
            <IonButtons slot="end">
              <IonSegment value="unfinished" onIonChange={e => console.log('Segment selected', e.detail.value)}>
                <IonSegmentButton value="unfinished">
                  <IonLabel>{t("response.unfinished")}</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="finished">
                  <IonLabel>{t("response.finished")}</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonItem onClick={() => { setPickerIsOpen(true); }} lines="none">
              {sessionTime ? (
                <IonLabel>{sessionTime?.weekday} - {sessionTime?.period}</IonLabel>
              ) : (
                <IonLabel className="placeHolder">{t("response.all_groups")} - {t("response.all_jobs")}</IonLabel>
              )}
            </IonItem>
            <IonButtons slot="end">
              <IonButton onClick={() => { setPickerIsOpen(true); }}>{t("response.filter")}</IonButton>
              <IonButton onClick={() => { setSessionTime(undefined); }}>{t("response.clear")}</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <ResponseMembersPicker
            isOpen={pickerIsOpen}
            onCancel={() => {
              setPickerIsOpen(false);
            }}
            onSave={(_value: any) => {
              console.log(_value);
              let { Day, SessionTime } = _value;
              setSessionTime({ weekday: Day.text, period: SessionTime.text });
              setPickerIsOpen(false);
            }}
          />
          <IonItemDivider>45{t("response.tasks")}</IonItemDivider>
          {tasks.length === 0 ? (
            <IonCard>
              <IonCardHeader>暂无任务</IonCardHeader>
            </IonCard>
          ) : tasks.map((task, index) => {
            return (
              <IonCard key={index} routerLink={`/response/task/${task.id}`}>
                <IonCardHeader>
                  <IonCardSubtitle>{task.Group.group_name}｜{task.Job.job_name}</IonCardSubtitle>
                  <IonCardTitle>{task.task_name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{task.description}</IonCardContent>
              </IonCard>
            )
          })}
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default ResponseTasks;
