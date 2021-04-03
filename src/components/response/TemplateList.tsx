import React, { useRef, useState, useEffect, useImperativeHandle } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButton, IonButtons, IonSlide, IonBackButton, IonSlides,
  IonItem, IonLabel, IonInput, IonGrid, IonRow, IonCol,
  IonTextarea, IonSelect, IonSelectOption, IonModal, IonIcon,
  IonRadioGroup, IonListHeader, IonAvatar, IonImg, IonRadio
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import { closeOutline } from 'ionicons/icons';


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
              <IonButton onClick={() => { setShowTemp(false) }}>
                <IonIcon icon={closeOutline} />
              </IonButton>
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