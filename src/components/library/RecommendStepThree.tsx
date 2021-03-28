import React from 'react';
import {
  IonList, IonListHeader, IonLabel, IonItem, IonInput,
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const RecommendStepThree: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonList>
      <IonListHeader>{t("library.upload_link_file")}</IonListHeader>
      <IonItem>
        <IonLabel>{t("library.upload_link")}</IonLabel>
        <IonInput></IonInput>
      </IonItem>
    </IonList>

  );
};

export default RecommendStepThree;
