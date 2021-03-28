import React from 'react';
import {
  IonList, IonListHeader, IonLabel, IonItem,
  IonInput, IonTextarea, IonButton
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const TopicStepOne: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonList>
      <IonListHeader>{t("library.base_settings")}</IonListHeader>
      <IonItem>
        <IonLabel position="floating">{t("library.topic_name")}</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">{t("library.topic_intro")}</IonLabel>
        <IonTextarea autoGrow></IonTextarea>
      </IonItem>
      <IonItem lines="none">
        <IonButton>{t("library.choose_picture")}</IonButton>
      </IonItem>
    </IonList>

  );
};

export default TopicStepOne;
