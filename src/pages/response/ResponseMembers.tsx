import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonMenuButton, IonIcon, IonItemOptions,
  IonPage, IonTitle, IonToolbar, IonSplitPane, IonItemOption,
  IonButton, IonButtons, IonItem, IonLabel, IonItemSliding, IonAvatar, IonImg
} from '@ionic/react';
import { addOutline, trashOutline, pencilOutline } from 'ionicons/icons';
import ResponseMenu from '../../components/response/ResponseMenu';
import { useTranslation } from "react-i18next";
import ResponseMembersPicker from "../../components/response/ResponseMembersPicker"

export interface ISessionTime {
  weekday: string;
  period: string;
}

const ResponseMembers: React.FC = () => {
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
            <IonTitle size="large">{t("response.members")}</IonTitle>
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
          <IonItemSliding>
            <IonItem button>
              <IonAvatar slot="start">
                <IonImg src="/assets/avatar.png" />
              </IonAvatar>
              <IonLabel>
                <h2>Faiyuching</h2>
                <p>正在进行中的任务：x个</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption color="danger">
                <IonIcon slot="icon-only" icon={trashOutline} />
              </IonItemOption>
              <IonItemOption>
                <IonIcon slot="icon-only" icon={pencilOutline} />
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default ResponseMembers;
