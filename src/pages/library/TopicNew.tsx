import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
  IonSegment, IonSegmentButton, IonBackButton, IonLabel, IonButton
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import TopicStepOne from "../../components/library/TopicStepOne"
import TopicStepTwo from "../../components/library/TopicStepTwo"
import TopicStepThree from "../../components/library/TopicStepThree"

const TopicNew: React.FC = () => {
  const [value, setValue] = useState('1')
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={"/library"} text="" />
          </IonButtons>
          <IonTitle>{t("library.library")}</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonTitle size="large">新建专题</IonTitle>
          <IonButtons slot="end">
            {value !== "1" && <IonButton onClick={() => { setValue(value.slice(1)) }}>上一步</IonButton>}
            {value === "111" ?
              <IonButton>完成</IonButton> :
              <IonButton onClick={() => { setValue(value + "1") }}>下一步</IonButton>
            }
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSegment disabled value={value} onIonChange={e => setValue(e.detail.value!)}>
          <IonSegmentButton value="1">
            <IonLabel>第一步</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="11">
            <IonLabel>第二步</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="111">
            <IonLabel>第三步</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {value === "1" && <TopicStepOne />}
        {value === "11" && <TopicStepTwo />}
        {value === "111" && <TopicStepThree />}
      </IonContent>
    </IonPage>

  );
};

export default TopicNew;
