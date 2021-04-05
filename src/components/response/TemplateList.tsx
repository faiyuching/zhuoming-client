import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonButton, IonButtons, IonItem, IonLabel, IonModal,
  IonRadioGroup, IonListHeader, IonRadio
} from '@ionic/react';
import { useTranslation } from "react-i18next";


const TemplateList: React.FC = () => {
  const { t } = useTranslation();
  const [showTemp, setShowTemp] = useState(false);
  console.log("ok")
  const [slideOpts, setSlideOpts] = useState({
    initialSlide: 0,
    speed: 400
  })
  return (
    <IonModal isOpen={showTemp} >
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton>创建模版</IonButton>
            </IonButtons>
            <IonTitle>模版库</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => { setShowTemp(false) }}>{t("close")}</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonRadioGroup>
          <IonListHeader>响应模版</IonListHeader>
          <IonItem>
            <IonLabel>
              <h2>气象水文灾害模版</h2>
              <p>描述</p>
            </IonLabel>
            <IonRadio value="meteoro_hydro" />
          </IonItem>
          <IonItem>
            <IonLabel>
              <h2>地质地震灾害模版</h2>
              <p>描述</p>
            </IonLabel>
            <IonRadio value="geological" />
          </IonItem>
        </IonRadioGroup>
      </IonContent>
    </IonModal>
  );
};

export default TemplateList;