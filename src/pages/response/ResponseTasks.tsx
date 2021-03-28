import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonMenuButton, IonIcon, IonPage,
  IonTitle, IonToolbar, IonSplitPane, IonButton, IonButtons,
  IonSegment, IonSegmentButton, IonLabel, IonCard, IonCardHeader,
  IonCardSubtitle, IonCardTitle, IonCardContent, IonItem
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";
import ResponseMembersPicker from "../../components/response/ResponseMembersPicker"

export interface ISessionTime {
  weekday: string;
  period: string;
}

const ResponseTasks: React.FC = () => {
  const { t } = useTranslation();
  const [pickerIsOpen, setPickerIsOpen] = useState(false);
  const [sessionTime, setSessionTime] = useState<ISessionTime | undefined>(
    undefined
  );
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
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Group Name｜Job Name</IonCardSubtitle>
              <IonCardTitle>Task Name</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Task Content
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Group Name｜Job Name</IonCardSubtitle>
              <IonCardTitle>Task Name</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Task Content
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Group Name｜Job Name</IonCardSubtitle>
              <IonCardTitle>Task Name</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Task Content
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default ResponseTasks;
