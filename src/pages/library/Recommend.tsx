import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonItem,
  IonSegment, IonSegmentButton, IonBackButton, IonLabel, IonButton
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import RecommendStepOne from "../../components/library/RecommendStepOne"
import RecommendStepTwo from "../../components/library/RecommendStepTwo"
import RecommendStepThree from "../../components/library/RecommendStepThree"

const Recommend: React.FC = () => {
  const [value, setValue] = useState('1')
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={"/library"} text={t("back")} />
          </IonButtons>
          <IonTitle>{t("library.library")}</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonTitle size="large">{t("library.recommend")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSegment disabled value={value} onIonChange={e => setValue(e.detail.value!)}>
          <IonSegmentButton value="1">
            <IonLabel>{t("library.step_one")}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="11">
            <IonLabel>{t("library.step_two")}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="111">
            <IonLabel>{t("library.step_three")}</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {value === "1" && <RecommendStepOne />}
        {value === "11" && <RecommendStepTwo />}
        {value === "111" && <RecommendStepThree />}
        <IonItem lines="none">
          <IonButtons slot="end">
            {value !== "1" && <IonButton onClick={() => { setValue(value.slice(1)) }}>{t("library.previous")}</IonButton>}
            {value === "111" ?
              <IonButton>{t("library.complete")}</IonButton> :
              <IonButton onClick={() => { setValue(value + "1") }}>{t("library.next_step")}</IonButton>
            }
          </IonButtons>
        </IonItem>
      </IonContent>
    </IonPage>

  );
};

export default Recommend;
