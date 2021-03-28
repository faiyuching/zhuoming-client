import React from 'react';
import {
  IonList, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio,
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const RecommendStepTwo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonList>
      <IonRadioGroup>
        <IonListHeader>二、请选择灾害类型</IonListHeader>
        <IonItem>
          <IonLabel>{t("library.meteoro_hydro")}</IonLabel>
          <IonRadio value="meteoro_hydro" />
        </IonItem>
        <IonItem>
          <IonLabel>{t("library.geological")}</IonLabel>
          <IonRadio value="geological" />
        </IonItem>
        <IonItem>
          <IonLabel>{t("library.marine")}</IonLabel>
          <IonRadio value="marine" />
        </IonItem>
        <IonItem>
          <IonLabel>{t("library.biological")}</IonLabel>
          <IonRadio value="biological" />
        </IonItem>
        <IonItem>
          <IonLabel>{t("library.ecological")}</IonLabel>
          <IonRadio value="boecologicalok" />
        </IonItem>
        <IonItem>
          <IonLabel>{t("library.others")}</IonLabel>
          <IonRadio value="others" />
        </IonItem>
      </IonRadioGroup>
    </IonList>

  );
};

export default RecommendStepTwo;
