import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButtons, IonButton, IonLabel, IonBackButton, IonListHeader,
  IonItem, IonAvatar, IonImg, IonRadio, IonRadioGroup
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const ApplyList: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text={t("back")} />
          </IonButtons>
          <IonTitle>{t("response.response")}</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonTitle size="large">{t("response.apply_list")}</IonTitle>
          <IonButtons slot="end">
            <IonButton>{t("response.invite")}</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
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
          <IonItem>
            <IonAvatar slot="start">
              <IonImg src="/assets/avatar.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Faiyuching</h2>
              <p>正在进行中的任务：x个</p>
            </IonLabel>
            <IonRadio value="xtt" />
          </IonItem>
        </IonRadioGroup>
      </IonContent>
    </IonPage>
  );
};

export default ApplyList;
